<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\API\UserRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class AuthController extends Controller
{
    public function register(UserRequest $request)
    {
        $validated = $request->validated();
        if ($validated) {
            DB::beginTransaction();
            try {
                $user = new User();
                $user->name = $validated['name'];
                $user->email = $validated['email'];
                $user->password = $validated['password'];
                $user->save();
                DB::commit();

                $user_token = $user->createToken('auth_token')->plainTextToken;

                return response()->json([
                    'success' => true,
                    'message' => 'User registered successfully',
                    'results' => [
                        ['user' => $user],
                        [
                            'access_token' => $user_token,
                            'token_type' => 'Bearer',
                        ]
                    ],
                ], 201);
            } catch (\Exception $e) {
                DB::rollBack();
                Log::error('register-error', [
                    'status' => $e->getCode(),
                    'message' => $e->getMessage(),
                ]);
                return response()->json([
                    'success' => false,
                    'message' => 'Internal Server Error.'
                ], 500);
            }
        }
    }

    public function login(Request $request)
    {
        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()->json([
                'success' => false,
                'message' => 'Unauthorized',
            ], 401);
        }

        $user = User::where('email', $request->input('email'))->first();
        if ($user) {
            $user_token = $user->createToken('auth_token')->plainTextToken;
            return response()->json([
                'success' => true,
                'message' => 'User login successfully',
                'results' => [
                    ['user' => $user],
                    [
                        'access_token' => $user_token,
                        'token_type' => 'Bearer',
                    ]
                ],
            ], 200);
        }
    }

    public function logout()
    {
        $user = User::where('id', Auth::user()->id)->first();
        $user->tokens()->delete();

        return response()->json([
            'success' => true,
            'message' => 'User Logout successfully',
        ], 200);
    }
}
