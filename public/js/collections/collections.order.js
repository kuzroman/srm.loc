App.Collections.Orders = Backbone.Collection.extend({
    model: App.Models.Order // дефолтные данные, елси не будут переданы новые данные
    ,url: '/order'
});