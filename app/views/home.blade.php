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
        <th>Готово</th>
    </thead>
</script>

<script type="text/template" id="tmpl_order">
    <td><%=id%></td>
    <td><%=created_rus%></td>
    <td><%=buyer%></td>
    <td><%=desc%></td>
    <td><% if (cash == 1) { %>нал<% } else { %>безнал<% } %></td>
    <td><%=price%></td>
    <td><% if (paid) { %>оплатил<% } else { %>не платил<% } %></td>
    <td><%=completion_rus%></td>
    <td><% if (finished) { %>готово<% } else { %>в работе<% } %></td>
    <td>
        <button class="j_edit">Редакция</button>
    </td>
</script>

<script type="text/template" id="tmpl_order_edit">
    <td><%=id%></td>

    <td class="edit">
        <input type="date" name="created" value="<%=created%>"/>
    </td>

    <td class="edit"><textarea name="buyer"><%=buyer%></textarea></td>
    <td class="edit"><textarea name="desc"><%=desc%></textarea></td>

    <td>
        <label>
            <input type="radio" name="cash" value="0" <% if (cash == 0) { %> checked <% } %> />б.нал
        </label>
        <label>
            <input type="radio" name="cash" value="1" <% if (cash == 1) { %> checked <% } %> />нал
        </label>
    </td>
    <td><%=price%></td>
    <td>
        <label>
            <input type="radio" name="paid" value="0" <% if (paid == 0) { %> checked <% } %> />нет
        </label>
        <label>
            <input type="radio" name="paid" value="1" <% if (paid == 1) { %> checked <% } %> />да
        </label>
    </td>
    <td class="edit">
        <input type="date" name="completion" value="<%=completion%>"/>
    </td>
    <td>
        <label>
            <input type="radio" name="finished" value="0" <% if (finished == 0) { %> checked <% } %> />нет
        </label>
        <label>
            <input type="radio" name="finished" value="1" <% if (finished == 1) { %> checked <% } %> />да
        </label>
    </td>
    <td>
        <button class="j_change">Изменить</button>
    </td>
</script>

<form class="orders" id="orders"></form>

<!--<input type="date"/>-->


<!--<div class="orders mt18">-->
<!--    <span>1</span>-->
<!--    <span>Начало</span>-->
<!--    <span>Покупатель</span>-->
<!--    <span>Описание</span>-->
<!--    <span>Нал</span>-->
<!--    <span>Цена</span>-->
<!--    <span>Оплатил</span>-->
<!--    <span>Конец</span>-->
<!--    <span>Завершено</span>-->
<!--</div>-->






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