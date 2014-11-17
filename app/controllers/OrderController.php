<?php

class OrderController extends BaseController {

    public function get($id)
    {
        return json_encode(Order::find($id));
    }

    // запись
    public function save($id)
    {
        $input = Input::get();

        Order::add(array(
            'created' => $input->created,
            'id_buyer' => $input->id_buyer,
            'desc' => $input->desc,
            'cash' => $input->cash,
            'price' => $input->price,
            'paid' => $input->paid,
            'completed' => $input->completed,
            'finished' => $input->finished
        ));
    }

    public function update($id)
    {
        $order = Order::find($id);
        $input = Input::get();

        $order->created = $input['created'];
        $order->id_buyer = $input['id_buyer'];
        $order->desc = $input['desc'];
        $order->cash = $input['cash'];
        $order->price = $input['price'];
        $order->paid = $input['paid'];
        $order->completed = $input['completed'];
        $order->finished = $input['finished'];

        $order->save();
    }

    public function destroy($id)
    {
        return Order::find($id)->delete();
    }

}
