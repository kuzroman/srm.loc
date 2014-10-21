<?php

class OrderController extends BaseController {

    public function update($id)
    {
        $orders = Order::getAll();
        return $id; // выведет в виде json

        //return View::make('home')->with('orders', $orders);  // with - говорит как эти данные будут наз-ся в виде (шаблонизаторе)
    }

}
