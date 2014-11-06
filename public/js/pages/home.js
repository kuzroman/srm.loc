// Router can be one on page!
new App.Router.Home();
Backbone.history.start(); // после определения роутов обязательно запускаем запоминание истории в браузере HTML5

//////////////////////////////////////////////////////////////////////////////////////

// в коллекцию обычно передается массив данных с сервера
var collectionOrders = new App.Collections.Orders(ordersJSON);
var viewOrders = new App.Views.Orders({collection: collectionOrders});
$('#orders').html(viewOrders.render().el);
var listEditedOrder = []; // хранилка текущего и предыдущего заказа, обращаемся к ней во время закрытия предыдущей редактируемой области

//////////////////////////////////////////////////////////////////////////////////////

//new App.Router.Buyer();
var collectionBuyers = new App.Collections.Buyers(buyersJSON);
var viewBuyers = new App.Views.Buyers({collection: collectionBuyers});
$('#buyers').html(viewBuyers.render().el);
var listEditedBuyer = [];

//////////////////////////////////////////////////////////////////////////////////////