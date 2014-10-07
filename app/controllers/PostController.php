<?php

class PostController extends BaseController {

    public function getPost($id)
    {
        $id = (int)$id; // приведение к числу
        $post = Post::getOne($id);

        if ($post instanceof Exception) { // если пришла ошибка
            return 'Error - can`t show one post';
        }
        else {
            return View::make('post.showPost')->with('post', $post); // post/showPost
        }
    }

    public function addPost ()
    {

        $data = Input::all(); // получить все данные

        // валидация http://laravel.com/docs/validation
        $rules = [
            'title' => 'required|min:5'
            ,'body' => 'required|min:5'
        ];
        $val = Validator::make($data, $rules);
        // тригерим данные
        if ($val->fails()) { // если валидация не пройдет
            //return $val->messages(); // вывести сообщение
            $errors = $val->messages()->toArray();
            return View::make('errors.validation')->with('errors', $errors);
        }

        $post = Post::add($data);

        if ($post instanceof Exception) {
            return 'Error - data post not added';
        }

        return Redirect::to('/'); // возврать на главную страницу
    }
}
