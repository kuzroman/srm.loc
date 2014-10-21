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
        <th>Нал</th>
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
    <td><% if (cash) { %>нал<% } else { %>безнал<% } %></td>
    <td><%=price%></td>
    <td><% if (paid) { %>оплачено<% } else { %>не оплачено<% } %></td>
    <td><%=completion%></td>
    <td><% if (finished) { %>завершено<% } else { %>в работе<% } %></td>
    <td class="j_edit">Редакция</td>
</script>

<script type="text/template" id="tmpl_order_edit">
    <td><%=id%></td>
    <td><%=created%></td>
    <td><input type="text" name="buyer" value="<%=buyer%>"/></td>
    <td><input type="text" name="desc" value="<%=desc%>"/></td>
    <td>
        <label for="cash_1">
            <input type="radio" name="cash_<%=id%>" value="0" id="cash_1" <% if (!cash) { %> checked <% } %> />нет
        </label>
        <label for="cash_2">
            <input type="radio" name="cash_<%=id%>" value="1" id="cash_2" <% if (cash) { %> checked <% } %> />да
        </label>
    </td>
    <td><%=price%></td>
    <td>
        <label for="paid_1">
            <input type="radio" name="paid_<%=id%>" value="0" id="paid_1" <% if (!paid) { %> checked <% } %> />нет
        </label>
        <label for="paid_2">
            <input type="radio" name="paid_<%=id%>" value="1" id="paid_2" <% if (paid) { %> checked <% } %> />да
        </label>
    </td>
    <td><%=completion%></td>
    <td>
        <label for="finished_1">
            <input type="radio" name="finished_<%=id%>" value="0" id="finished_1" <% if (!finished) { %> checked <% } %> />нет
        </label>
        <label for="finished_2">
            <input type="radio" name="finished_<%=id%>" value="1" id="finished_2" <% if (finished) { %> checked <% } %> />да
        </label>
    </td>
    <td class="j_change">Изменить</td>
</script>

<div class="orders" id="orders"></div>

<!--<input type="date"/>-->





@if (isset($orders) && count($orders) )
<script>
    var ordersJSON = {{ $orders }};
</script>
@endif

<script type="text/javascript" src="js/models/models.order.js" language="javascript"></script>
<script type="text/javascript" src="js/views/views.order.js" language="javascript"></script>
<script type="text/javascript" src="js/collections/collections.order.js" language="javascript"></script>
<script type="text/javascript" src="js/router/router.order.js" language="javascript"></script>

<script type="text/javascript" src="js/pages/pages.order.js" language="javascript"></script>

@stop