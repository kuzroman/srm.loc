<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    {{ HTML::style('css/main.css') }} {{-- используем встроенный helper --}}

    <script type="text/javascript" src="js/jquery.js" language="javascript"></script>
    <script type="text/javascript" src="js/underscore.js" language="javascript"></script>
    <script type="text/javascript" src="js/backbone.js" language="javascript"></script>

    <script type="text/javascript" src="js/helpers.js" language="javascript"></script>
    <script type="text/javascript" src="js/core.js" language="javascript"></script>
</head>
<body>
<!--    <h1 class="main_title">SRM</h1>-->
<!---->
<!--    <div class="authorisation">-->
<!--        @if (Auth::check())-->
<!--            Привет {{Auth::user()->email}}. > <a href="/logout">выйти</a>-->
<!--        @else-->
<!--            {{-- используем Хелпер Form --}}-->
<!--            {{ Form::open(['url'=>'/login']) }}-->
<!--                {{ Form::text('email',null, ['placeholder'=>'E-mail']) }}-->
<!--                {{ Form::password('password', ['placeholder'=>'Пароль']) }}-->
<!--                {{ Form::submit('Войти') }}-->
<!--            или <a href="/reg">Зарегистрироваться</a>-->
<!--            {{ Form::close() }}-->
<!--        @endif-->
<!--    </div>-->