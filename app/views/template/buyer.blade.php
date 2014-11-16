<script type="text/template" id="tmplBuyerHead">
<div class="head">
    <div class="num">#</div>
    <div class="name">Название</div>
    <div class="kind">Вид</div>
    <div class="email">E-mail</div>
    <div class="">
        <div class="jClose close">X</div>
    </div>
</div>
</script>

<script type="text/template" id="tmplBuyer">
    <div class="num"><%=id%></div>
    <div class="name"><%=name%></div>
    <div class="kind"><%=kind%></div>
    <div class="email"><%=email%></div>
    <% if (edit) { %><div class="btn"><button class="jEdit">Редакция</button></div><% } %>
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