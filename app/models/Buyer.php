<?php

// вся валидация должна проходить в контроллере!
// здесь просто выводим информацию из базы

// Если наша таблица называесть posts то файл, и модель нужно назвать в ед. числе!
class Buyer extends Eloquent {

    // обязательно добавить или метод add не будет работать - незащищенное введение данных
    public static $unguarded = true; // laravel не нравится что мы напрямую добавляем данные.

    public static function getAll() {

        $buyers = Buyer::all();

//        foreach ($buyers as $id => $buyer) {
//            $buyer = json_decode($buyer);
//            foreach ($buyer as $param => $value) {
//                if ($param == 'updated_at' || $param == 'created_at') continue;
//                $all_buyer[$id][$param] = $value;
//            }
//        }
        //var_dump( json_encode($all_buyer) );
        return json_encode($buyers);
    }


//    // добавление новых данных
//    public static function add($data) {
//        try {
//            $post = Buyer::create([
//                // заменить на правильные поля!!!!!
//                'title' => $data['title'],
//                'body' => $data['body'],
//                'author' => Auth::user()->email,
//            ]);
//            return $post;
//        }
//        catch(Exeption $ex) {
//            return $ex;
//        }
//    }
}