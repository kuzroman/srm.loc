App.Collections.Orders = Backbone.Collection.extend({
    model: App.Models.Order // дефолтные данные, если не будут переданы новые данные
    ,url: '/order'
    
    ,initialize: function () {

    }

    ,resetEditing: function (el) {

//        for (var num in this.models) {
//            // находим текущую редактируемую модель
//            if (this.models[num]['changed']['editing']) {
//                // меняем свойство
//                this.models[num].set('editing', false);
//                // должны изменить вид у найденной модели
//                console.log(this, this.models[num], el);
//            }
//        }

    }

});