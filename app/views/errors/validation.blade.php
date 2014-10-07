@extends('template.template')

@section('content')
    @if (isset($errors))


    @foreach ($errors as $error)
        <b>{{ $error[0] }}</b><br>
    @endforeach

    @else
    <h3>Нет ошибок</h3>
    @endif

    <a href="{{ URL::previous() }}">Назад</a>

@stop