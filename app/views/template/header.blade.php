<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
<!--    {{ HTML::style('css/main.css') }} {{-- используем встроенный helper --}}-->

    <link rel="stylesheet" href="css/jquery-ui.min.css"/>
    <link rel="stylesheet" href="css/main.css"/>
    <link rel="stylesheet" href="css/layout.css"/>


    <script type="text/javascript" src="js/jquery/jquery.js" language="javascript"></script>
    <script type="text/javascript" src="js/jquery/jquery-ui.min.js" language="javascript"></script>

    <script type="text/javascript" src="js/lib/underscore.js" language="javascript"></script>
    <script type="text/javascript" src="js/lib/backbone.js" language="javascript"></script>
    <script type="text/javascript" src="js/lib/sugar.js" language="javascript"></script>


    <script type="text/javascript" src="js/helpers.js" language="javascript"></script>
    <script type="text/javascript" src="js/core.js" language="javascript"></script>
</head>
<body>

<!--<input type="date"/>-->

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