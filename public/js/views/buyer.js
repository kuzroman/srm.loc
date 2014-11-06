// вид одного заказа
App.Views.Buyer = Backbone.View.extend({
    tagName: 'tr'

    ,template: hp.tmpl('tmpl_buyer')
    ,templateEdit: hp.tmpl('tmpl_buyer_edit')

    ,events: {
        'click .j_edit': 'drawInput',
        'click .j_change': 'change'
    }

    ,initialize: function () {}

    // наполнение нашего вида кодом
    ,render: function () {
        this.drawBuyer(this.$el, this.model);
        return this;
    }
    
    ,drawBuyer: function ($el, model) {
        $el.html(this.template(model.toJSON()));
    }
    
    ,drawInput: function () {
        this.$el.html(this.templateEdit(this.model.toJSON()));

        this.addEditModel();
        if (1 < listEditedBuyer.length && this.isEditedDataNotEqual() ) {
            var model = this.getSecondLastEditedModel();
            this.drawBuyer( model.el, model.model );
        }

        return this;
    }

    // каждый раз при нажатии на редактировать мы обращаемся к текущему виду и текущей модели для нее
    // поэтому чтобы закрыть предыдущий открытый вид, мы должны хранить где то данные о нем
    // для этого и реализованы эти методы
    ,addEditModel: function () {
        listEditedBuyer.push({model: this.model, el: this.el, id:this.model.id});
        // чтобы не накапливать множество моделей в массиве, своевременно чистим его
        if (2 < listEditedBuyer.length) {
            listEditedBuyer.shift();
        }
    }
    ,getSecondLastEditedModel: function () {
        var num = listEditedBuyer.length-2
            ,el = listEditedBuyer[num]['el']
            ,model = listEditedBuyer[num]['model']
            ,id = listEditedBuyer[num]['id']
        ;
        return {el:$(el), model:model};
    }
    ,isEditedDataNotEqual: function () {
        return listEditedBuyer[0]['id'] != listEditedBuyer[1]['id'];
    }

    ,change: function () {

        // пока незнаю где лучше делать поиск $('#'), пока здесь
        var formElementsList = $('#buyers').serializeArray();

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
App.Views.Buyers = Backbone.View.extend({
    tagName: 'table'

    ,template: hp.tmpl('tmpl_buyer_head')

    ,initialize: function () {}

    ,render: function () {
        this.collection.each( this.addOne, this); // this - передает контекст
        this.addHead();
        return this;
    }

    // 1 -пройтись по всему списку и срендерить каждый заказ
    // 2 -вставить в главный тег
    ,addOne: function (modelBuyer) {
        var viewBuyer = new App.Views.Buyer({model: modelBuyer});
        this.$el.append( viewBuyer.render().el );
    }

    ,addHead: function () {
        this.$el.prepend( this.template() );
    }
});