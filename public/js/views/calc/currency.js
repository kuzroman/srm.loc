/* вид формы калькулятора */
App.Views.Form = Backbone.View.extend({
    el: '#currency_credit_form'

    ,events : {
        'submit' : 'submit'
    }
    ,initialize: function () {
        this.changeParam();
    }
    ,submit : function (e) {
        e.preventDefault();
        this.changeParam();
    }
    // смена параметров в модели по данным из DOM
    ,changeParam: function () {
        var size =     parseInt(this.$('#size').val(), 10)
            ,percent = parseInt(this.$('#percent').val(), 10)
            ,month =   parseInt(this.$('#month').val(), 10)
            ,param = {size: size,percent: percent,month: month}
            ;
        this.model.set(param);
        vent.trigger('changeModel:Form'); // файрим событие о смене модели
    }
});

/* выплаты один блок */
App.Views.Payment = Backbone.View.extend({
    className: 'payment'
    ,tagName: 'tr'
    ,template: hp.tmpl('currencyPay')

    ,render : function () { // наполнение кодом
        var template = this.template(this.model.toJSON());
        this.$el.html( template );
        return this;
    }
});
/* выплаты список */
App.Views.Payments = Backbone.View.extend({
    tagName: 'table'
    ,className: 'table table-striped'
    ,template: hp.tmpl('currencyPayTh')

    ,initialize: function () {
        this.collection.on('reset', this.drawPayments, this); // 2- отрисуем новую коллекцию
        vent.on('changeModel:Form', this.resetPaymentsCollection, this); // 1 - узнали о смене модели формы - меняем коллекцию
    }
    ,addOne : function (payment, index, list) {
        // создать новый дочерний вид
        var paymentView = new App.Views.Payment({model: payment});
        // добавлять его в корневой элемент
        this.$el.append( paymentView.render().el );
    }
    ,render : function () {
        this.$el.html(this.template);
        this.collection.each(this.addOne, this); // underscore each
        return this;
    }
    ,drawPayments: function () {
        $('.j_payments').html(this.render().el);
    }
    ,resetPaymentsCollection: function () {
        var paymentsModel, paymentListForCollection = [], paymentList;

        // произвести расчеты
        paymentList = calcModel.calculate();

        // обновить коллекцию
        for (var i= 0, l= paymentList.length; i < l; i++) {
            paymentsModel = (new App.Models.Payments()).set(paymentList[i]);
            paymentListForCollection.push(paymentsModel);
        }
        //console.log(paymentListForCollection);
        this.collection.reset(paymentListForCollection);
    }
});

/* переплата */
App.Views.Overpayment = Backbone.View.extend({
    template: hp.tmpl('overPay')

    ,initialize: function () {
        vent.on('changeModel:Form', this.draw, this);
    }
    ,draw: function () {
        this.model.findOverpayment();
        $('.j_overpayment').html( this.template(this.model.toJSON() ));
    }
});