<?php

// вся валидация должна проходить в контроллере!
// здесь просто выводим информацию из базы

// Если наша таблица называесть posts то файл, и модель нужно назвать в ед. числе!
class Order extends Eloquent {

    // обязательно добавить или метод add не будет работать - незащищенное введение данных
    public static $unguarded = true; // laravel не нравится что мы напрямую добавляем данные.

    public static function getAll() {
//        $orders = Order::all();

        $orders = DB::select('select o.*, b.name as b_name from orders o INNER JOIN buyers b ON o.buyer = b.id ');
        //print_r($orders);

//        foreach ($buyers as $buyer) {
//            foreach ($buyer as $k=>$v) {
//
//                print_r($v);
//            }
//        }

//        foreach ($orders as $id => $all_order) {
//            $all_order = json_decode($all_order);
//            foreach ($all_order as $param => $value) {
//                if ($param == 'updated_at' || $param == 'created_at') continue;
//                $order[$id][$param] = $value;
//            }
//        }
        //var_dump( json_encode($order) );
        return json_encode($orders);
    }

//    public static function getOne($id) {
//
//        // обработка исключений, если введут несуществующий id
//        try {
//            $post = Post::where('id',  '=', $id)->firstOrFail(); // методы Eloquent по работе с БД
//        }
//        catch (Exception $ex) {
//            return $ex;
//        }
//
//        return $post;
//    }
//
//    // добавление новых данных
    public static function add($data) {
        try {
            $post = Order::create([
                // заменить на правильные поля!!!!!
                'title' => $data['title'],
                'body' => $data['body'],
                'author' => Auth::user()->email,
            ]);
            return $post;
        }
        catch(Exeption $ex) {
            return $ex;
        }
    }
}