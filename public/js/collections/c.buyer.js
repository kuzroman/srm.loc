App.Collections.Buyers = Backbone.Collection.extend({
    model: App.Models.Buyer // дефолтные данные, елси не будут переданы новые данные
    ,url: '/buyer'
});