// коллекция платежей - пустая
var paymentsCollection = new App.Collections.Payments();


// модель рассчетов
var calcModel = new App.Models.Calculate();
// модель формы
var formModel = calcModel.get('inputParam');

// 1 - Вид платежей, передаем ей аналогичную коллекцию (должна идти перед new App.Views.Form, т.к. подписан на ее события)
new App.Views.Payments({collection: paymentsCollection});

// 2 - Вид формы, передаем ей аналогичную модель
new App.Views.Form({model: formModel});

var overpayment = new App.Views.Overpayment({model: calcModel});
overpayment.draw();

console.log(calcModel.defaults.iR);