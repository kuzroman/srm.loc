App.Collections.Buyers = Backbone.Collection.extend({
    model: App.Models.Buyer // дефолтные данные, елси не будут переданы новые данные
    ,url: '/buyer'

    ,initialize: function () {
//        this.on('sync', function (cBuyers, objList) { console.log('sync', cBuyers, objList ) }); // сработает после fetch
    }


});