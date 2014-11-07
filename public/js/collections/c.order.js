App.Collections.Orders = Backbone.Collection.extend({
    model: App.Models.Order // дефолтные данные, если не будут переданы новые данные
    ,url: '/order'
    
    ,initialize: function () {
//        console.log('collection order init', this);
        
        this.on('orders:resetEditing', function (el) {
//            console.log(this, el);
            this.resetEditing(el);
        });


//       this.on('change', function (a) {console.log(a);} );
    }

    ,resetEditing: function (el) {

        for (var num in this.models) {
            // находим текущую редактируемую модель
            if (this.models[num]['changed']['editing']) {
                // меняем свойство
                this.models[num].set('editing', false);
                // должны изменить вид у найденной модели
                console.log(this, this.models[num], el);
            }
        }

    }

});