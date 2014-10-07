<?php

class UserController extends BaseController {

    public function login() {
        $data = Input::all();

//        $rules = [
//            'email' => 'required|email|min:5'
//            ,'password' => 'required|min:5'
//        ];
//        $val = Validator::make($data, $rules);
//        // тригерим данные
//        if ($val->fails()) { // если валидация не пройдет
//            //return $val->messages(); // вывести сообщение
//
//            $errors = $val->messages()->toArray();
//            return View::make('errors.validation')->with('errors', $errors);
//        }

        $user = User::login($data);

        if (!$user Instanceof User) {
            return 'Ошибка авторизации';
        }

        return Redirect::to(URL::previous());

    }

    public function register() {
        $data = Input::all();

        $rules = [
            'email' => 'required|email|min:5|unique:users' // unique:users! - взглянуть в док.
            ,'password' => 'required|min:5|same:repeat_password' // должно быть такое же как и repeat_password
            ,'repeat_password' => 'required|min:5'
        ];
        $val = Validator::make($data, $rules);
        // тригерим данные
        if ($val->fails()) { // если валидация не пройдет
            $errors = $val->messages()->toArray();
            return View::make('errors.validation')->with('errors', $errors);
        }

        $user = User::register($data);

        if (!$user Instanceof User) {
            return 'Опаце чейто не то ' . $user;
        }

        Auth::login($user, true);
        return Redirect::to('/');
    }

    public function showReg() {
        return View::make('reg.reg');
    }

}