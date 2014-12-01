// редактор заказа - родитель
App.Views.OrderEditParent = Backbone.View.extend({
    tagName: 'form'
    ,className: 'orderEditor'

    ,events: {
        'click .jClose': 'clickClose'
        ,'click .jChoiceBuyer': 'clickChoiceBuyer' // работа с моделью buyer
    }

    ,initialize: function () {
        var self = this;
        //console.log('initialize');
        vent.on('closeView', function() { self.clickClose() } );
//        vent.on('closeView',  this.clickClose );
    }

    ,render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        this.$el.find('[type="ui_date"]').datepicker({dateFormat: "dd.mm.yy", language: "ru"});
        return this;
    }

    ,clickClose: function () {
        console.log('clickClose', this);
        this.remove();
        vent.trigger('hideBuyers');
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
        this.model.setDateForBackend();
    }
});

// редактор заказа
App.Views.OrderEditor = App.Views.OrderEditParent.extend({
    template: hp.tmpl('tmplOrderEditor')

    ,events: {
        'click .jChange': 'clickChange'
    }

    ,initialize: function () {
        _.extend(this.events, App.Views.OrderEditParent.prototype.events);  // чтобы не затереть родительские события наследуем их вновь.
        var self = this;
        vent.on('toChangeBuyerInOrder', function(vBuyerEditor) { self.toChangeBuyerInOrder(vBuyerEditor) } );

        //console.log(this);
        App.Views.OrderEditParent.prototype.initialize.call(this); // вызов родительского init с текущим объектом
    }
    
    ,clickChange: function () {
        this.updateModel();
        this.model.save();
        this.remove();
        vent.trigger('vOrderEditor:reDrawOrder', this);
        vent.trigger('hideBuyers');
        return false;
    }

    ,toChangeBuyerInOrder: function (vBuyerEditor) {
        console.log('vBuyerEditor', this, vBuyerEditor);
        this.$el.find('[name="id_buyer"]').val( vBuyerEditor.model.get('id') );
        this.$el.find('[name="b_name"]').val( vBuyerEditor.model.get('name') );
        this.$el.find('.j_b_name').text( vBuyerEditor.model.get('name') );
    }
});


// Добавление заказа
App.Views.OrderAdder = App.Views.OrderEditParent.extend({
    template: hp.tmpl('tmplOrderAdd')

    ,events: function(){
        return _.extend({}, App.Views.OrderEditParent.prototype.events,{
            'click .jAdd': 'clickAdd'
        });
    }

    ,initialize: function () {
        var self = this;
        vent.on('mOrder:errorAdding', function(errors) {
            self.hideError();
            self.showError(errors);
        });
    }
    
    ,clickAdd: function () {

        this.updateModel();
        //console.log(this.model);
        vent.trigger('vOderEdit:addModel', this);


        //if (!this.model.validationError) this.addModelDom();
        return false;
    }

//    ,addModelDom: function () {
//        console.log(this);
//        var viewOrder = new App.Views.Order({model: this.model});
//        home.html.ordersBox.prepend(viewOrder.render().el);
//    }
    
    ,showError: function (errors) {
        for (var param in errors) {
            var div = $('<div class="validator error">'+errors[param]+'</div>').show();
            this.$el.find('[name="'+param+'"]').after(div);
        }
    }
    ,hideError: function () {
        this.$el.find('.validator.error').hide();
    }

});