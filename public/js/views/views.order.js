// вид одного заказа
App.Views.Order = Backbone.View.extend({
    tagName: 'tr'
    ,className: 'order'

    ,template: hp.tmpl('tmpl_order')
    ,templateEdit: hp.tmpl('tmpl_order_edit')

    ,events: {
        'click .j_edit': 'drawInput',
        'click .j_change': 'change'
    }

    ,initialize: function () {}

    // наполнение нашего вида кодом
    ,render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
    
    ,drawInput: function () {
        this.$el.html(this.templateEdit(this.model.toJSON()));
        return this;
    }

    ,change: function () {
        var self = this;
        // обход модели и смена значений
        this.$el.find('input').each(function () {
            self.model.set($(this).attr('name'), $(this).val() );
        });
        this.render();

        this.model.save({});
    }

});

// список заказов
App.Views.Orders = Backbone.View.extend({
    tagName: 'table'
    ,className: 'order_table'

    ,template: hp.tmpl('tmpl_order_head')

    ,initialize: function () {
        //console.log('create orderS', this);
    }

    ,render: function () {
        this.collection.each( this.addOne, this); // this - передает контекст
        this.addHead();
        return this;
    }

    // 1 -пройтись по всему списку и срендерить каждый заказ
    // 2 -вставить в главный тег
    ,addOne: function (modelOrder) {
        var viewOrder = new App.Views.Order({model: modelOrder});
        this.$el.append( viewOrder.render().el );
    }

    ,addHead: function () {
        this.$el.prepend( this.template() );
    }
});