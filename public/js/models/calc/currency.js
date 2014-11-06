App.Models.Form = Backbone.Model.extend({
    defaults: {
        size: 10000
        ,percent: 10
        ,month: 12
    }
});

App.Models.Calculate = Backbone.Model.extend({

    defaults: {
        inputParam: new App.Models.Form,
        iR: null // interestRate - процентная ставка в месяц
        ,payMonth: null // ежемесячный платеж
        ,repayPercent: null //  выплаты по процентам
        ,repayDebt: null //  выплаты по кредиту
        ,creditBalance: null // остаток кредита
        ,overpayment: null // пререплата по кредиту
        ,paymentList: [] // список объектов платежей
    }
    ,initialize : function () {

    }
    ,calculate: function () {
        // сбросим атрибуты к дефолтным
        this.clear().set(this.defaults);

        var size = (this.get('inputParam')).get('size')
            ,percent = (this.get('inputParam')).get('percent')
            ,month = (this.get('inputParam')).get('month')
            ,iR = percent / 1200
            ,payMonth = size*(iR+ (iR/ ( Math.pow(1 + iR, month) -1 )))
            ;

        this.set('iR', iR );
        this.set('payMonth', payMonth );
        this.findAllPayMonthly(size, month);

        return this.get('paymentList');
    }

    ,findAllPayMonthly: function (size, month) {
        var self = this, paymentList = [], creditBalance, repayPercent, repayDebt;

        for (var i = 1; i <= month; i++) {
            this.setCreditBalance(size);
            this.set('repayPercent', this.get('creditBalance') * this.get('iR'));
            this.set('repayDebt', this.get('payMonth') - this.get('repayPercent'));

            paymentList.push({
                num: i
                ,creditBalance: Math.floor(self.get('creditBalance'))
                ,repayDebt:    Math.floor(self.get('repayDebt'))
                ,repayPercent: Math.floor(self.get('repayPercent'))
            });
        }
        this.set('paymentList', paymentList);
    }

    ,setCreditBalance: function (size) {
        var creditBalance = this.get('creditBalance')
            ,repayDebt = this.get('repayDebt')
            ;
        if (creditBalance) creditBalance = creditBalance - repayDebt; // сократить запись
        else creditBalance = size;
        this.set('creditBalance', creditBalance);
    }

    ,findOverpayment: function () {
        var size = (this.get('inputParam')).get('size')
            ,month = (this.get('inputParam')).get('month');
        var overpayment = Math.floor(this.get('payMonth') * month - size);
        this.set('overpayment', overpayment);
        return overpayment;
    }
});

/* модель платежей */
App.Models.Payments = Backbone.Model.extend({
    // дефолтные заначения здесь скорей для напоминания из чего состоит модель.
    defaults: {
        num: null
        ,repayPercent: null //  выплаты по процентам
        ,repayDebt: null //  выплаты по кредиту
        ,creditBalance: null // остаток кредита
    }

});