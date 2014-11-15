// вид одного заказа
App.Views.Buyer = Backbone.View.extend({
    tagName: 'div'
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
        vent.trigger('vBuyer:drawBuyerEditor', this);
    }

});

App.Views.BuyerEditor = Backbone.View.extend({
    tagName: 'div'
    ,className: 'vBuyerEditor'
    ,template: hp.tmpl('tmplBuyerEdit')

    ,event: {
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

// список заказов
App.Views.Buyers = Backbone.View.extend({
    tagName: 'div'
    ,template: hp.tmpl('tmplBuyerHead')

    ,initialize: function () {
        var self = this;
        vent.on('vBuyer:drawBuyerEditor', function(view) { self.drawBuyerEditor(view) });
    }

    ,render: function () {
        this.collection.each(this.addOne, this);
        this.addHead();
        return this;
    }

    ,addOne: function (modelBuyer) {
        var viewBuyer = new App.Views.Buyer({model: modelBuyer});
        this.$el.append( viewBuyer.render().el );
    }

    ,addHead: function () {
        this.$el.prepend( this.template() );
    }

    ,drawBuyerEditor: function (view) {
        this.currentEditingBuyer = view;
        var vBuyerEditor = new App.Views.BuyerEditor({model: view['model']});
        var top = view.$el.offset().top + view.$el.height();
        vBuyerEditor.$el.css('top',top);
        home.html.body.append(vBuyerEditor.render().el);
    }

});