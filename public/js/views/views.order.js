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

    ,initialize: function () {
        this.form = $('#orders')
    }

    // наполнение нашего вида кодом
    ,render: function () {
        this.drawOrder(this.$el, this.model);
        return this;
    }
    
    ,drawOrder: function ($el, model) {
        var format = '{dd}.{MM}.{yyyy}';
        this.model.set('created_rus', Date.create(this.model.get('created')).format(format) );
        this.model.set('completion_rus', Date.create(this.model.get('completion')).format(format) );
        $el.html(this.template(model.toJSON()));
    }
    
    ,drawInput: function () {
        this.$el.html(this.templateEdit(this.model.toJSON()));

        this.$el.find('[type="date"]').datepicker({dateFormat: "yy-mm-dd"});

        this.addEditModel();
        if (1 < listEditedOrder.length && this.isEditedOrderNotEqual() ) {
            var model = this.getSecondLastEditedModel();
            this.drawOrder( model.el, model.model );
        }

        return this;
    }

    // каждый раз при нажатии на редактировать мы обращаемся к текущему виду и текущей модели для нее
    // поэтому чтобы закрыть предыдущий открытый вид, мы должны хранить где то данные о нем
    // для этого и реализованы эти методы
    ,addEditModel: function () {
        listEditedOrder.push({model: this.model, el: this.el, id:this.model.id});
        // чтобы не накапливать множество моделей в массиве, своевременно чистим его
        if (2 < listEditedOrder.length) {
            listEditedOrder.shift();
        }
    }
    ,getSecondLastEditedModel: function () {
        var num = listEditedOrder.length-2
            ,el = listEditedOrder[num]['el']
            ,model = listEditedOrder[num]['model']
            ,id = listEditedOrder[num]['id']
        ;
        return {el:$(el), model:model};
    }
    ,isEditedOrderNotEqual: function () {
        return listEditedOrder[0]['id'] != listEditedOrder[1]['id'];
    }

    ,change: function () {
        var formElementsList = this.form.serializeArray();
        // обновляем данные модели
        for (var num in formElementsList) {
            if (formElementsList.hasOwnProperty(num)) {
                var obj = formElementsList[num];
                this.model.set(obj['name'], obj['value'] );
            }
        }
        this.render();
        this.model.save();
    }

});

// список заказов
App.Views.Orders = Backbone.View.extend({
    tagName: 'table'
    //,className: 'order_table'

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