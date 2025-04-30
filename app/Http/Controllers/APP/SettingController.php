<?php

namespace App\Http\Controllers\APP;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class SettingController extends Controller
{
    public function theme(): Response
    {
        return Inertia::render('App/Setting/Theme', [
            'user' => Auth::user(),
        ]);
    }

    public function updateTheme(Request $request)
    {
        sleep(1);
        $validated = $request->validate([
            'theme' => 'required|string',
        ]);

        if ($validated) {
            DB::beginTransaction();
            $theme_update = [
                'type' => 'success',
                'message' => 'updated',
            ];

            try {
                $user = Auth::user();
                $user->themes = $validated['theme'];
                $user->save();
                DB::commit();
                $theme_update['message'] = 'Tema berhasil di pasang';
            } catch (\Exception $e) {
                DB::rollBack();
                info($e->getMessage());
                $theme_update['type'] = 'error';
                $theme_update['message'] = 'Internal server error';
            }

            session()->flash($theme_update['type'], $theme_update['message']);
        }
    }
}
