// вид одного заказа
App.Views.Order = Backbone.View.extend({
    tagName: 'div'
    ,className: 'vOrder'
    ,template: hp.tmpl('tmplOrder')

    ,events: {
        'click .j_edit': 'clickEdit'
    }

    ,initialize: function () {

    }

    ,clickEdit: function () {
        vent.trigger('vOrder:drawOrderEditor', this);
    }

    ,render: function () {
        var format = '{dd}.{MM}.{yyyy}';
        this.model.set('created_rus', Date.create(this.model.get('created')).format(format));
        this.model.set('completed_rus', Date.create(this.model.get('completed')).format(format));

        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }

});

// редактор заказа (лучше OrderEditor)
App.Views.OrderEditor = Backbone.View.extend({
    tagName: 'form'
    ,className: 'vOrderEditor'
    ,template: hp.tmpl('tmplOrderEditor')

    ,events: {
        'click .j_change': 'clickChange'
    }

    ,initialize: function () {

    }

    ,render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        this.$el.find('[type="ui_date"]').datepicker({dateFormat: "dd.mm.yy", language: "ru"});
        return this;
    }

    ,clickChange: function () {
        this.updateModel();
        this.model.save();
        this.remove();
        vent.trigger('vOrderEditor:reDrawOrder', this);
        return false;
    }

    ,updateModel: function () {
        var formData = this.$el.serializeArray();

        for (var num in formData) {
            if (formData.hasOwnProperty(num)) {
                var obj = formData[num];
                this.model.set(obj['name'], obj['value'] );
            }
        }

        // меняем формат даты обратно
        var format = '{yyyy}-{MM}-{dd}';
        this.model.set('created', Date.create(this.model.get('created_rus'), 'ru').format(format) );
        this.model.set('completed', Date.create(this.model.get('completed_rus'), 'ru').format(format));
    }

});

// список заказов
// родительский элемент управляет видами, слушает их события отрисовывает их
App.Views.Orders = Backbone.View.extend({
    tagName: 'div'
    ,id: 'vOrders'

    ,template: hp.tmpl('tmplOrderHead')

    ,param: {
        currentEditingOrder: {} // текущий редактируемый заказ
    }

    ,initialize: function () {
        var self = this;
        vent.on('vOrder:drawOrderEditor', function (view) { self.drawOrderEditor(view) } );
        vent.on('vOrderEditor:reDrawOrder', function (view) { self.reDrawOrder(view) } );
    }

    ,render: function () {
        this.collection.each( this.addOne, this); // this - передает контекст
        this.addHead();
        return this;
    }
    ,addOne: function (modelOrder) {
        var viewOrder = new App.Views.Order({model: modelOrder});
        this.$el.append( viewOrder.render().el );
    }
    ,addHead: function () {
        this.$el.prepend( this.template() );
    }

    ,drawOrderEditor: function (view) {
        this.currentEditingOrder = view;
        var vOrderEditor = new App.Views.OrderEditor({model: view['model']});
        var top = view.$el.offset().top + view.$el.height();
        vOrderEditor.$el.css('top',top);
        home.html.body.append(vOrderEditor.render().el);
    }

    ,reDrawOrder: function (view) {
        var order = new App.Views.Order({model:view['model']});

        //console.log(view, this.currentEditingOrder.$el, order );

        this.currentEditingOrder.$el.after( order.render().$el );
        this.currentEditingOrder.remove();
    }

});