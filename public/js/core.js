window.App = {
    Models: {}
    ,Views: {}
    ,Collections: {}
    ,Router: {}
};

var vent = _.extend({}, Backbone.Events); // глобальный объект, кастомных событий, наследует события // backbone версия паттерна наблюдатель