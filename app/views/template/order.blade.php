<!--li не закрываем чтобы небыло пробелов между inline-block элементами-->
<script type="text/template" id="tmplOrderHead">
    <li class="num">#
    <li class="date">Начало
    <li class="buyer">Покупатель
    <li class="desc">Описание
    <li class="cash">Нал
    <li class="price">Цена
    <li class="paid">Оплатил
    <li class="completed">Конец
    <li class="finished">Готово
    <% if (adding) { %>
        <li class="btn"><span class="jAdd">Добавить</span>
    <% } %>
</script>

<script type="text/template" id="tmplOrder">
    <li class="num"><%=id%>
    <li class="date"><%=created_rus%>
    <li class="buyer" title="<%=b_name%>"><%=b_name%>
    <li class="desc" title="<%=desc%>"><%=desc%>
    <li class="cash"><% if (cash == 1) { %>нал<% } else { %>безнал<% } %>
    <li class="price"><%=price%>
    <li class="paid"><% if (paid ==  1) { %>оплатил<% } else { %>не оплачено<% } %>
    <li class="completed"><%=completed_rus%>
    <li class="finished"><% if (finished) { %>готово<% } else { %>не готово<% } %>
    <% if (editing) { %>
        <li class="btn"><span class="edit jEdit">Редакция</span>
    <% } %>
</script>


<div class="center" id="ordersBox"></div>
<div class="" id="editorBox"></div>


<script type="text/template" id="tmplOrderEditor">
<table>
    <tr>
        <td class="vtop"></td>
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
        <td class="vtop">Партнер</td>
        <td>
            <input type="hidden" name="id_buyer" value="<%=id_buyer%>"/>
            <input type="hidden" name="b_name" value="<%=b_name%>"/>
            <span class="j_b_name"><%=b_name%></span>
            <button class="jChoiceBuyer">Выбрать</button>
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

<!--проверка валидности не пройдена-->
<!--<script type="text/template" id="tmpValidator">-->
<!--    <div class="error"></div>-->
<!--</script>-->

<script type="text/template" id="tmplOrderAdd">
    <table>
        <tr>
            <td class="vtop"></td>
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
            <td class="vtop">Партнер</td>
            <td>
                <input type="hidden" name="id_buyer" value="<%=id_buyer%>"/>
                <input type="hidden" name="b_name" value="<%=b_name%>"/>
                <span class="j_b_name"><%=b_name%></span>
                <button class="jChoiceBuyer">Выбрать</button>
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
            <td><button class="jAdd">Добавить</button></td>
        </tr>
    </table>
</script>


@if (isset($data['orders']) && count($data['orders']) )
<script>
    var ordersJSON = {{ $data['orders'] }};
    console.log(ordersJSON);
</script>
@endif

<script type="text/javascript" src="js/models/m.order.js" language="javascript"></script>
<script type="text/javascript" src="js/views/v.order.js" language="javascript"></script>
<script type="text/javascript" src="js/views/v.orderEdit.js" language="javascript"></script>
<script type="text/javascript" src="js/collections/c.order.js" language="javascript"></script>