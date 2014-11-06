<script type="text/template" id="tmpl_buyer_head">
    <thead>
    <th class="num">№</th>
    <th>Название</th>
    <th>Вид</th>
    <th>E-mail</th>
    </thead>
</script>

<script type="text/template" id="tmpl_buyer">
    <td class="num"><%=id%></td>
    <td><%=name%></td>
    <td><%=kind%></td>
    <td><%=email%></td>
    <td class="button">
        <button class="j_edit">Редакция</button>
    </td>
</script>

<script type="text/template" id="tmpl_buyer_edit">

</script>

<form class="table_1" id="buyers"></form>

@if (isset($data['buyers']) && count($data['buyers']) )
<script>
    var buyersJSON = {{ $data['buyers'] }};
    
    //console.log(buyersJSON);
</script>
@endif

<script type="text/javascript" src="js/models/buyer.js" language="javascript"></script>
<script type="text/javascript" src="js/views/buyer.js" language="javascript"></script>
<script type="text/javascript" src="js/collections/buyer.js" language="javascript"></script>