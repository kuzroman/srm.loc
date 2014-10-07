@extends('template.template')

@section('content')

    <h2>Регистрация</h2>

    {{-- используем Хелпер Form --}}
    {{ Form::open() }}
    <input name="email" type="text" placeholder="E-Mail" /> <br>
    <input name="password" type="password" placeholder="Пароль" /> <br>
    <input name="repeat_password" type="password" placeholder="Повторите пароль" /> <br>
    <input type="submit" value="Зарегиться" />
    {{ Form::close() }}

@stop