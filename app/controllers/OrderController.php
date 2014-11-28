<?php

class OrderController extends BaseController {

    public function get($id)
    {
        return json_encode(Order::find($id));
    }

    // добавление
    public function save()
    {
        $data = Input::all();
        $addedObj = Order::add($data);

        return $addedObj;
    }

    public function update($id)
    {
        $order = Order::find($id);
        $data = Input::get();

        $order->created = $data['created'];
        $order->id_buyer = $data['id_buyer'];
        $order->desc = $data['desc'];
        $order->cash = $data['cash'];
        $order->price = $data['price'];
        $order->paid = $data['paid'];
        $order->completed = $data['completed'];
        $order->finished = $data['finished'];

        $order->save();
    }

    public function destroy($id)
    {
        return Order::find($id)->delete();
    }

}
