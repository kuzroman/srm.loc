<?php

class HomeController extends BaseController {

	/*
	|--------------------------------------------------------------------------
	| Default Home Controller
	|--------------------------------------------------------------------------
	|
	| You may wish to use controllers instead of, or in addition to, Closure
	| based routes. That's great! Here is an example controller method to
	| get you started. To route to this controller, just add the route:
	|
	|	Route::get('/', 'HomeController@showWelcome');
	|
	*/

//	public function showWelcome()
//	{
//		return View::make('hello');
//	}

    public function index()
    {
        $orders = Order::getAll();
        //return $orders; // выведет в виде json

        // home можно указывать без расширения blade.php // blade - шаблонизатор ralavel
        return View::make('home')->with('orders', $orders);  // with - говорит как эти данные будут наз-ся в виде (шаблонизаторе)
    }

}
