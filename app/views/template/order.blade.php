<script type="text/template" id="tmpl_order_head">
    <th class="num">№</th>
    <th class="date">Начало</th>
    <th>Покупатель</th>
    <th>Описание</th>
    <th>Нал</th>
    <th>Цена</th>
    <th>Оплатил</th>
    <th class="date">Конец</th>
    <th>Готово</th>
</script>

<script type="text/template" id="tmpl_order">
    <td class="num"><%=id%></td>
    <td><%=created_rus%></td>
    <td><%=buyer%></td>
    <td><%=desc%></td>
    <td><% if (cash == 1) { %>нал<% } else { %>безнал<% } %></td>
    <td><%=price%></td>
    <td><% if (paid) { %>оплатил<% } else { %>не платил<% } %></td>
    <td><%=completion_rus%></td>
    <td><% if (finished) { %>готово<% } else { %>в работе<% } %></td>
    <% if (edit) { %>
    <td>
        <button class="j_edit">Редакция</button>
    </td>
    <% } %>
</script>

<script type="text/template" id="tmpl_order_edit">
    <td><%=id%></td>

    <td class="edit cntr">
        <input type="ui_date" name="created_rus" value="<%=created_rus%>"/>
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
    <td><input name="price" value="<%=price%>"/></td>
    <td>
        <label>
            <input type="radio" name="paid" value="0" <% if (paid == 0) { %> checked <% } %> />нет
        </label>
        <label>
            <input type="radio" name="paid" value="1" <% if (paid == 1) { %> checked <% } %> />да
        </label>
    </td>
    <td class="edit cntr">
        <input type="ui_date" name="completion_rus" value="<%=completion_rus%>"/>
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

<form class="table_1" id="orders"></form>


@if (isset($data['orders']) && count($data['orders']) )
<script>
    var ordersJSON = {{ $data['orders'] }};
</script>
@endif

<script type="text/javascript" src="js/models/m.order.js" language="javascript"></script>
<script type="text/javascript" src="js/views/v.order.js" language="javascript"></script>
<script type="text/javascript" src="js/collections/c.order.js" language="javascript"></script>