{{-- шаблонизатор blade в действии // наследуем шаблон template/template.blade.php --}}

@extends('template.template')

{{--  все что напишем между @section('content') и @stop попадет в @yield('content') в шаблон в который мы обращаемся --}}

@section('content')

<script type="text/template" id="tmpl_order_head">
    <thead>
        <th>№</th>
        <th>Начало</th>
        <th>Покупатель</th>
        <th>Описание</th>
        <th>Безнал</th>
        <th>Цена</th>
        <th>Оплатил</th>
        <th>Конец</th>
        <th>Завершено</th>
    </thead>
</script>

<script type="text/template" id="tmpl_order">
    <td><%=id%></td>
    <td><%=created%></td>
    <td><%=buyer%></td>
    <td><%=desc%></td>
    <td><%=cash%></td>
    <td><%=price%></td>
    <td><%=paid%></td>
    <td><%=completion%></td>
    <td><%=finished%></td>
    <td class="j_edit">Редакция</td>
</script>

<script type="text/template" id="tmpl_order_edit">
    <td><%=id%></td>
    <td><%=created%></td>
    <td><input type="text" name="buyer" value="<%=buyer%>"/></td>
    <td><input type="text" name="desc" value="<%=desc%>"/></td>
    <td><%=cash%></td>
    <td><%=price%></td>
    <td><%=paid%></td>
    <td><%=completion%></td>
    <td><%=finished%></td>
    <td class="j_change">Изменить</td>
</script>

<div class="orders" id="orders"></div>

<!--<input type="date"/>-->





@if (isset($orders) && count($orders) )
<script>
    var testData = {{ $orders }};
</script>
@endif

<script type="text/javascript" src="js/models/models.order.js" language="javascript"></script>
<script type="text/javascript" src="js/views/views.order.js" language="javascript"></script>
<script type="text/javascript" src="js/collections/collections.order.js" language="javascript"></script>
<script type="text/javascript" src="js/router/router.order.js" language="javascript"></script>

<script type="text/javascript" src="js/pages/pages.order.js" language="javascript"></script>

@stop