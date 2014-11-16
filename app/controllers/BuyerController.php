<?php

class BuyerController extends BaseController {

    public function get($id)
    {
        return json_encode( Buyer::find($id) );
    }

    public function getAll()
    {

        $fetchBuyers = Buyer::all();

        $fetchedModels = array();
        foreach ($fetchBuyers as $model) {
            $fetchedModels[] = $model->attributes;
        }


        return json_encode($fetchBuyers);

//        return json_encode( Buyer::getAll() );
    }

    // запись
    public function save($id)
    {
//        $input = Input::get();
//
//        Order::add(array(
//            'created' => $input->created,
//            'buyer' => $input->buyer,
//            'desc' => $input->desc,
//            'cash' => $input->cash,
//            'price' => $input->price,
//            'paid' => $input->paid,
//            'completion' => $input->completion,
//            'finished' => $input->finished
//        ));
    }

    public function update($id)
    {
//        $order = Order::find($id);
//        $input = Input::get();
//
//        $order->created = $input['created'];
//        $order->buyer = $input['buyer'];
//        $order->desc = $input['desc'];
//        $order->cash = $input['cash'];
//        $order->price = $input['price'];
//        $order->paid = $input['paid'];
//        $order->completion = $input['completion'];
//        $order->finished = $input['finished'];
//
//        $order->save();
    }

    public function destroy($id)
    {
        return Order::find($id)->delete();
    }

}
