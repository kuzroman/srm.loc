{{-- шаблонизатор blade в действии // наследуем шаблон template/template.blade.php --}}

@extends('template.template')



{{--  все что напишем между @section('content') и @stop попадет в @yield('content') в шаблон в который мы обращаемся --}}

@section('content') {{-- здесь можно разместить контент --}}

    @include('template.order')
    @include('template.buyer')

<script type="text/javascript" src="js/router/home.js"></script>
<script type="text/javascript" src="js/pages/home.js"></script>


@stop