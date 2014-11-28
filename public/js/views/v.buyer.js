// вид одного покупателя
App.Views.Buyer = Backbone.View.extend({
    tagName: 'ul'
    ,className: 'vBuyer'

    ,template: hp.tmpl('tmplBuyer')

    ,events: {
        'click .jEdit': 'clickEdit',
        'click .jChange': 'change'
    }

    ,initialize: function () {}

    ,render: function () {
        this.drawBuyer(this.$el, this.model);
        return this;
    }
    
    ,drawBuyer: function ($el, model) {
        $el.html(this.template(model.toJSON()));
    }

    ,clickEdit:function () {
        console.log('vBuyer - drawBuyerEditor');
        vent.trigger('vBuyer:drawBuyerEditor', this);
    }

});

// вид одного покупателя - расширенный :) - для выбора в заказах
App.Views.BuyerInOrder = App.Views.Buyer.extend({
    className: 'vBuyer'

    ,events: {
        // поиск в текущем виде
        'click': 'toChangeBuyerInOrder'
    }

    ,toChangeBuyerInOrder: function () {
        vent.trigger('toChangeBuyerInOrder', this);
    }
    
});

App.Views.BuyerEditor = Backbone.View.extend({
    tagName: 'div'
    ,className: 'vBuyerEditor'
    ,template: hp.tmpl('tmplBuyerEdit')

    ,events: {
        'click .jClose': 'clickClose'
    }

    ,render: function () {
        this.$el.html( this.template( this.model.toJSON() ) );
        return this;
    }

    ,clickClose: function () {
        this.remove();
    }

});

// список Покупателей
App.Views.Buyers = Backbone.View.extend({
    tagName: 'div'
    ,className: 'vBuyers silver'
    ,template: hp.tmpl('tmplBuyerHead')

    ,events: {
        'click .jClose': 'hideBuyers'
    }

    ,initialize: function () {
        var self = this;
        vent.on('vBuyer:drawBuyerEditor', function(view) { self.drawBuyerEditor(view) });
        vent.on('showBuyers', function() { self.showBuyers() });
        vent.on('hideBuyers', function() { self.hideBuyers() });
    }

    ,render: function () {
        this.collection.each(this.addOne, this);
        this.addHead();
        return this;
    }

    ,addOne: function (modelBuyer) {
        var viewBuyer = new App.Views.BuyerInOrder({model: modelBuyer});
        this.$el.append( viewBuyer.render().el );
    }

    ,addHead: function () {
        this.$el.prepend( this.template() );
    }

    ,drawBuyerEditor: function (view) {
        var vBuyerEditor = new App.Views.BuyerEditor({model: view['model']});
        var top = view.$el.offset().top + view.$el.height();
        vBuyerEditor.$el.css('top',top);
        home.html.body.append(vBuyerEditor.render().el);
    }

    ,hideBuyers: function () {
        this.$el.hide();
    }

    ,showBuyers: function () {
        this.$el.show();
    }

});