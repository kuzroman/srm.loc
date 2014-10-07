{{-- шаблонизатор blade в действии // наследуем шаблон template/template.blade.php --}}

@extends('template.template')

{{--  все что напишем между @section('content') и @stop попадет в @yield('content') в шаблон в который мы обращаемся --}}

@section('content')


<script type="text/template" id="tmpl_order">
<%= buyer %> (<%= desc %>)
</script>

<script type="text/javascript" src="js/models/models.order.js" language="javascript"></script>
<script type="text/javascript" src="js/views/views.order.js" language="javascript"></script>

<script type="text/javascript" src="js/pages/pages.order.js" language="javascript"></script>

{{--
{{ Form::open() }}
<ul>
    <li>
        <input name="title" type="text" placeholder="Заголовок" autocomplete="off"  />
    </li>
    <li>
        <textarea name="body" id="" cols="30" rows="10" placeholder="Текст  статьи"></textarea>
    </li>
    <li>
        <input type="submit" value="Добавить" />
    </li>
</ul>
{{ Form::close() }}


@if (isset($orders) && count($orders) )

<table class="order">
    @foreach ($orders as $order)
    <tr>
        <td>{{$order->id}}</td>
        <td>{{$order->created}}</td>
        <td>{{$order->buyer}}</td>
        <td>{{$order->desc}}</td>
        <td>{{$order->cash}}</td>
        <td>{{$order->price}}</td>
        <td>{{$order->paid}}</td>
        <td>{{$order->completion}}</td>
        <td>{{$order->finished}}</td>
    </tr>
    @endforeach
</table>

@else
<p class="">Нет заказов</p>
@endif

--}}

@stop