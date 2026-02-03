<?php

namespace App\Services;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class FileUploadService
{
    /**
     * Allowed MIME types for document uploads
     */
    private const ALLOWED_MIME_TYPES = [
        'application/pdf',
        'image/jpeg',
        'image/jpg',
        'image/png',
        'image/webp',
    ];

    /**
     * Maximum file size in kilobytes (10MB)
     */
    private const MAX_FILE_SIZE = 10240;

    /**
     * Upload a file to storage with validation
     *
     * @param UploadedFile $file
     * @param string $directory
     * @param string|null $customName
     * @return string File path
     * @throws \Exception
     */
    public function uploadDocument(UploadedFile $file, string $directory, ?string $customName = null): string
    {
        // Validate file type
        if (!in_array($file->getMimeType(), self::ALLOWED_MIME_TYPES)) {
            throw new \Exception('Invalid file type. Only PDF and image files are allowed.');
        }

        // Validate file size
        if ($file->getSize() > self::MAX_FILE_SIZE * 1024) {
            throw new \Exception('File size exceeds maximum allowed size of ' . self::MAX_FILE_SIZE . 'KB.');
        }

        // Generate unique filename
        $filename = $customName 
            ? $customName . '.' . $file->getClientOriginalExtension()
            : Str::uuid() . '_' . time() . '.' . $file->getClientOriginalExtension();

        // Store file securely
        $path = $file->storeAs(
            $directory,
            $filename,
            'private' // Use private disk for sensitive documents
        );

        return $path;
    }

    /**
     * Upload multiple files
     *
     * @param array $files
     * @param string $directory
     * @return array Array of file paths
     */
    public function uploadMultiple(array $files, string $directory): array
    {
        $paths = [];

        foreach ($files as $file) {
            if ($file instanceof UploadedFile) {
                $paths[] = $this->uploadDocument($file, $directory);
            }
        }

        return $paths;
    }

    /**
     * Delete a file from storage
     *
     * @param string $path
     * @param string $disk
     * @return bool
     */
    public function deleteFile(string $path, string $disk = 'private'): bool
    {
        if (Storage::disk($disk)->exists($path)) {
            return Storage::disk($disk)->delete($path);
        }

        return false;
    }

    /**
     * Get file URL (for private files, generate temporary URL)
     *
     * @param string $path
     * @param string $disk
     * @param int $expirationMinutes
     * @return string
     */
    public function getFileUrl(string $path, string $disk = 'private', int $expirationMinutes = 60): string
    {
        if ($disk === 'private') {
            return Storage::disk($disk)->temporaryUrl(
                $path,
                now()->addMinutes($expirationMinutes)
            );
        }

        return Storage::disk($disk)->url($path);
    }

    /**
     * Validate file before upload
     *
     * @param UploadedFile $file
     * @return array ['valid' => bool, 'error' => string|null]
     */
    public function validateFile(UploadedFile $file): array
    {
        // Check file type
        if (!in_array($file->getMimeType(), self::ALLOWED_MIME_TYPES)) {
            return [
                'valid' => false,
                'error' => 'Invalid file type. Only PDF and image files (JPEG, PNG, WebP) are allowed.'
            ];
        }

        // Check file size
        if ($file->getSize() > self::MAX_FILE_SIZE * 1024) {
            return [
                'valid' => false,
                'error' => 'File size exceeds maximum allowed size of ' . self::MAX_FILE_SIZE . 'KB.'
            ];
        }

        // Check if file is valid
        if (!$file->isValid()) {
            return [
                'valid' => false,
                'error' => 'File upload failed. Please try again.'
            ];
        }

        return ['valid' => true, 'error' => null];
    }
}
