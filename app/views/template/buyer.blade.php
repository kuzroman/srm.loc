<script type="text/template" id="tmplBuyerHead">
<ul class="head">
    <li class="num">#
    <li class="name">Название
    <li class="kind">Вид
    <li class="email">E-mail<div class="jClose close">X</div>
</ul>
</script>

<script type="text/template" id="tmplBuyer">
    <li class="num"><%=id%>
    <li class="name"><%=name%>
    <li class="kind"><%=kind%>
    <li class="email"><%=email%>
    <% if (edit) { %>
        <li class="btn"><span class="jEdit">Редакция</span>
    <% } %>
</script>

<script type="text/template" id="tmplBuyerEdit">
    <table>
        <tr>
            <td class="vtop"># <%=id%></td>
            <td>
                <div class="jClose close">X</div>
            </td>
        </tr>
        <tr><td colspan="2" height="5"></td></tr>
        <tr>
            <td class="vtop">Название</td>
            <td><input name="name" value="<%=name%>"/></td>
        </tr>
        <tr><td colspan="2" height="10"></td></tr>
        <tr>
            <td class="vtop">Вид</td>
            <td><input name="kind" value="<%=kind%>"></td>
        </tr>
        <tr><td colspan="2" height="10"></td></tr>
        <tr>
            <td class="vtop">E-mail</td>
            <td><input name="email" value="<%=email%>"></td>
        </tr>
        <tr><td colspan="2" height="10"></td></tr>
        <tr>
            <td></td>
            <td><button class="jChange">Изменить</button></td>
        </tr>
    </table>
</script>

<div class="" id="buyersBox"></div>

@if (isset($data['buyers']) && count($data['buyers']) )
<script>
    var buyersJSON = {{ $data['buyers'] }};
//    console.log(buyersJSON);
</script>
@endif

<link type="text/css" rel="stylesheet" href="css/buyer.css">

<script type="text/javascript" src="js/models/m.buyer.js" language="javascript"></script>
<script type="text/javascript" src="js/views/v.buyer.js" language="javascript"></script>
<script type="text/javascript" src="js/collections/c.buyer.js" language="javascript"></script>