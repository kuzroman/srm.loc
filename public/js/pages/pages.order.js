new App.Router.Order();

//var testData = [
//    {
//        id: 0,
//        created: '22.07.2014'
//        ,buyer: 'Машинмах'
//        ,desc: 'Test company 1'
//        ,cash: 0
//        ,price: 10000
//        ,paid: 1
//        ,completion: false
//        ,finished: false
//    },
//    {
//        id: 1,
//        created: '22.07.2014'
//        ,buyer: 'Инвест груп'
//        ,desc: 'Test company 2'
//        ,cash: 0
//        ,price: 20000
//        ,paid: 1
//        ,completion: false
//        ,finished: false
//    }
//];

// в коллекцию обычно передается массив данных с сервера
var collectionOrders = new App.Collections.Orders(testData);
//collectionOrder.add(modelOrder);

var viewOrders = new App.Views.Orders({collection: collectionOrders});
$('#orders').html(viewOrders.render().el);


