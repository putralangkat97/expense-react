<?php

namespace App\Enums;

enum FrequencyEnum: string
{
    case DAILY = "daily";
    case WEEKLY = "weekly";
    case MONTHLY = "monthly";
    case YEARLY = "yearly";

    public static function optionToIndonesia()
    {
        return [
            ['key' => self::DAILY->value, 'value' => 'Harian'],
            ['key' => self::WEEKLY->value, 'value' => 'Mingguan'],
            ['key' => self::MONTHLY->value, 'value' => 'Bulanan'],
            ['key' => self::YEARLY->value, 'value' => 'Tahunan'],
        ];
    }

    public static function setToIndonesia($value)
    {
        return match ($value) {
           self::DAILY->value => 'Harian',
           self::WEEKLY->value => 'Mingguan',
           self::MONTHLY->value => 'Bulanan',
           self::YEARLY->value => 'Tahunan',
        };
    }
}
