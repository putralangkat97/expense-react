<?php

namespace App\Traits;

trait ApiResponse
{
    public function coreResponse(string $message, $data = null, int $status_code = 200, $success = true)
    {
        if (!$message) {
            return response()->json([
                'message' => 'Message is required for the response.'
            ], 500);
        }

        return response()->json([
            'success' => $success ?? false,
            'code' => $status_code,
            'message' => $message,
            'results' => $data
        ], $status_code);
    }

    public function success(string $message, $data = null, int $status_code = 200)
    {
        return $this->coreResponse(
            message: $message,
            data: $data,
            status_code: $status_code
        );
    }

    public function error(string $message, int $status_code = 200)
    {
        return $this->coreResponse(
            message: $message,
            status_code: $status_code,
            success: false
        );
    }
}
