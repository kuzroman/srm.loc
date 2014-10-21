<?php

// вся валидация должна проходить в контроллере!
// здесь просто выводим информацию из базы

// Если наша таблица называесть posts то файл, и модель нужно назвать в ед. числе!
class Order extends Eloquent {

    // обязательно добавить или метод add не будет работать - незащищенное введение данных
    public static $unguarded = true; // laravel не нравится что мы напрямую добавляем данные.

    public static function getAll() {
        $orders = Order::all();
        return $orders;
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