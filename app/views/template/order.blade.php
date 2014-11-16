<script type="text/template" id="tmplOrderHead">
<div class="head">
    <div class="num">#</div>
    <div class="date">Начало</div>
    <div class="buyer">Покупатель</div>
    <div class="desc">Описание</div>
    <div class="cash">Нал</div>
    <div class="price">Цена</div>
    <div class="paid">Оплатил</div>
    <div class="completed">Конец</div>
    <div class="finished">Готово</div>
</div>
</script>

<script type="text/template" id="tmplOrder">
    <div class="num"><%=id%></div>
    <div class="date"><%=created_rus%></div>
    <div class="buyer" title="<%=b_name%>"><%=b_name%></div>
    <div class="desc" title="<%=desc%>"><%=desc%></div>
    <div class="cash"><% if (cash == 1) { %>нал<% } else { %>безнал<% } %></div>
    <div class="price"><%=price%></div>
    <div class="paid"><% if (paid) { %>оплатил<% } else { %>не оплачено<% } %></div>
    <div class="completed"><%=completed_rus%></div>
    <div class="finished"><% if (finished) { %>готово<% } else { %>не готово<% } %></div>
    <% if (edit) { %><div class="btn"><button class="jEdit">Редакция</button></div><% } %>
</script>


<div class="" id="ordersBox"></div>


<script type="text/template" id="tmplOrderEditor">
<table>
    <tr>
        <td class="vtop"># <%=id%></td>
        <td>
            <div class="jClose close">X</div>
        </td>
    </tr>
    <tr><td colspan="2" height="5"></td></tr>
    <tr>
        <td class="vtop">Начало</td>
        <td><input type="ui_date" name="created_rus" value="<%=created_rus%>"/></td>
    </tr>
    <tr><td colspan="2" height="10"></td></tr>
    <tr>
        <td class="vtop">Покупатель</td>
        <td>
            <div><%=b_name%> <button class="jChoiceBuyer">Выбрать</button> </div>
<!--            <textarea name="id_buyer">--><%//=id_buyer%><!--</textarea>-->
        </td>
    </tr>
    <tr><td colspan="2" height="10"></td></tr>
    <tr>
        <td class="vtop">Описание</td>
        <td><textarea name="desc"><%=desc%></textarea></td>
    </tr>
    <tr><td colspan="2" height="10"></td></tr>
    <tr>
        <td class="vtop">Нал</td>
        <td>
            <label>
                <input type="radio" name="cash" value="0" <% if (cash == 0) { %> checked <% } %> />б.нал
            </label>
            <label>
                <input type="radio" name="cash" value="1" <% if (cash == 1) { %> checked <% } %> />нал
            </label>
        </td>
    </tr>
    <tr><td colspan="2" height="10"></td></tr>
    <tr>
        <td class="vtop">Цена</td>
        <td><input name="price" value="<%=price%>"/></td>
    </tr>
    <tr><td colspan="2" height="10"></td></tr>
    <tr>
        <td class="vtop">Оплатил</td>
        <td>
            <label>
                <input type="radio" name="paid" value="0" <% if (paid == 0) { %> checked <% } %> />нет
            </label>
            <label>
                <input type="radio" name="paid" value="1" <% if (paid == 1) { %> checked <% } %> />да
            </label>
        </td>
    </tr>
    <tr><td colspan="2" height="10"></td></tr>
    <tr>
        <td class="vtop">Конец</td>
        <td>
            <input type="ui_date" name="completed_rus" value="<%=completed_rus%>"/>
        </td>
    </tr>
    <tr><td colspan="2" height="10"></td></tr>
    <tr>
        <td class="vtop">Готово</td>
        <td>
            <label>
                <input type="radio" name="finished" value="0" <% if (finished == 0) { %> checked <% } %> />нет
            </label>
            <label>
                <input type="radio" name="finished" value="1" <% if (finished == 1) { %> checked <% } %> />да
            </label>
        </td>
    </tr>
    <tr><td colspan="2" height="10"></td></tr>
    <tr>
        <td></td>
        <td><button class="jChange">Изменить</button></td>
    </tr>
</table>
</script>

<!--edit cntr в date-->


@if (isset($data['orders']) && count($data['orders']) )
<script>
    var ordersJSON = {{ $data['orders'] }};
    console.log(ordersJSON);
</script>
@endif

<script type="text/javascript" src="js/models/m.order.js" language="javascript"></script>
<script type="text/javascript" src="js/views/v.order.js" language="javascript"></script>
<script type="text/javascript" src="js/collections/c.order.js" language="javascript"></script>