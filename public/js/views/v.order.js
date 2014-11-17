// вид одного заказа
App.Views.Order = Backbone.View.extend({
    tagName: 'ul'
    ,className: 'vOrder'
    ,template: hp.tmpl('tmplOrder')

    ,events: {
        'click .jEdit': 'clickEdit'
    }

    ,initialize: function () {

    }

    ,render: function () {
        var format = '{dd}.{MM}.{yyyy}';
        this.model.set('created_rus', Date.create(this.model.get('created')).format(format));
        this.model.set('completed_rus', Date.create(this.model.get('completed')).format(format));

        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }

    ,clickEdit: function () {
        vent.trigger('vOrder:drawOrderEditor', this);
    }

});

// редактор заказа (лучше OrderEditor)
App.Views.OrderEditor = Backbone.View.extend({
    tagName: 'form'
    ,className: 'vOrderEditor'
    ,template: hp.tmpl('tmplOrderEditor')

    ,events: {
        'click .jChange': 'clickChange'
        ,'click .jClose': 'clickClose'
        ,'click .jChoiceBuyer': 'clickChoiceBuyer' // работа с моделью buyer
    }

    ,initialize: function () {
        var self = this;
        vent.on('toChangeBuyerInOrder', function(vBuyerEditor) { self.toChangeBuyerInOrder(vBuyerEditor) } );
    }

    ,render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        this.$el.find('[type="ui_date"]').datepicker({dateFormat: "dd.mm.yy", language: "ru"});
        return this;
    }

    ,clickClose: function () {
        this.remove();
        vent.trigger('hideBuyers');
    }

    ,clickChange: function () {
        this.updateModel();
        this.model.save();
        this.remove();
        vent.trigger('vOrderEditor:reDrawOrder', this);
        vent.trigger('hideBuyers');
        return false;
    }

    ,clickChoiceBuyer: function () {
        vent.trigger('vOrderEditor:drawBuyers');
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

    ,toChangeBuyerInOrder: function (vBuyerEditor) {
        //console.log('vBuyerEditor', this, vBuyerEditor);
        this.$el.find('[name="id_buyer"]').val( vBuyerEditor.model.get('id') );
        this.$el.find('[name="b_name"]').val( vBuyerEditor.model.get('name') );
        this.$el.find('.j_b_name').text( vBuyerEditor.model.get('name') );
    }

});

// список заказов
// родительский элемент управляет видами, слушает их события отрисовывает их
App.Views.Orders = Backbone.View.extend({
    tagName: 'div'
    ,className: 'vOrders'

    ,param: {
        currentEditingOrder: false // текущий редактируемый заказ
        ,vOrderEditor: false // вид редактируемого заказа
        ,mOrderHead: false // модель заголовка заказов
    }

    ,initialize: function () {
        var self = this;
        vent.on('vOrder:drawOrderEditor', function (view) { self.drawOrderEditor(view) } );
        vent.on('vOrderEditor:reDrawOrder', function (view) { self.reDrawOrder(view) } );

        this.param.mOrderHead = new App.Models.OrderHead(); // здесь - чтобы события этой модели сработали
    }

    ,render: function () {
        this.collection.each( this.addOne, this); // this - передает контекст
        this.addHead();
        return this;
    }
    ,addOne: function (modelOrder) {
        var vOrder = new App.Views.Order({model: modelOrder});
        this.$el.append( vOrder.render().el );
    }
    ,addHead: function () {
        var vOrderHead = new App.Views.OrderHead({model:this.param.mOrderHead});
        this.$el.prepend( vOrderHead.render().el );
    }

    ,drawOrderEditor: function (view) {
        vent.off('toChangeBuyerInOrder'); // удалим чтобы не множились

        this.param.currentEditingOrder = view;
        var vOrderEditor = new App.Views.OrderEditor({model: view['model']});
        var top = view.$el.offset().top + view.$el.height();
//        var left = view.$el.offset().left;
//        vOrderEditor.$el.css({top:top, left:left});
        home.html.editorBox.css({top:top}).append(vOrderEditor.render().el);
    }

    ,reDrawOrder: function (view) {
        console.log(view);
        var order = new App.Views.Order({model:view['model']});
        this.param.currentEditingOrder.$el.after( order.render().$el );
        this.param.currentEditingOrder.remove();
    }

});

App.Views.OrderHead = Backbone.View.extend({
    tagName:'ul'
    ,className:'vHead'
    ,template: hp.tmpl('tmplOrderHead')

    ,events: {
        'click .jAdd' : 'addOrder'
    }

    ,initialize: function () {
        
    }

    ,render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }

    ,addOrder: function () {
        // считаю что превиксы перед методом типа vOrderHead: могут сбить с толку
        // если мы переместим кнопку в другую область (вид)
        vent.trigger('addOrder');
    }

});