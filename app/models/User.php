<?php

use Illuminate\Auth\UserTrait;
use Illuminate\Auth\UserInterface;
use Illuminate\Auth\Reminders\RemindableTrait;
use Illuminate\Auth\Reminders\RemindableInterface;

class User extends Eloquent implements UserInterface, RemindableInterface {

    use UserTrait, RemindableTrait;

    protected $table = 'users';
    // обязательно добавить или метод add не будет работать - незащищенное введение данных
    public static $unguarded = true; // laravel не нравится что мы напрямую добавляем данные.
	/**
	 * The attributes excluded from the model's JSON form.
	 * @var array
	 */
	protected $hidden = array('password', 'remember_token');

    public static function login($data) {

        // http://laravel.com/docs/security#authenticating-users
        if (Auth::attempt( ['email' => $data['email'], 'password' => $data['password']], true )) // true - наш пользователь будет запомнен
        {
            return Auth::user(); //Redirect::to(URL::previous()) ;//Auth::user(); //Redirect::intended('dashboard');
        }
        else
        {
            return 'login чейто не прошел';
        }

    }


    public static function register($data) {

        try
        {
            // добавляем в базу
            $user = User::create([
                'email'=>$data['email'],
                'password'=> Hash::make($data['password']) // кодируем пароль
            ]);
        }
        catch (Exception $e)
        {
            return $e;
        }

        return $user; // вернуть модель

    }

}
