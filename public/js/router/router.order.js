// для того чтобы роуты работали нужно после создания экземпляра роутов запустить
// Backbone.history.start();
// я запускаю его в footer.blade.php
App.Router.Order = Backbone.Router.extend({

    routes: {
        ''                        : 'index'
        ,'read'                   : 'read'
        ,'page/:id/*arg'          : 'page'// arg - может быть любой текс, не играет роли, но должен быть хотя бы символ
        ,'search/:query'          : 'search'
//        ,'specialTask/:id'        : 'showSpecialTask'
        ,'*other'                 : 'default' // other - тоже любой текст
    },

    index: function() {
        console.log('роут Order!');
    },

    read: function() {
        console.log('страница read');
    },

    page: function(id, simbo) {
        console.log(id, simbo);
    },

    search: function(query) {
        console.log('роут search с запросом ' + query);
    },

//    showSpecialTask: function (id) {
//        console.log('роут showSpecialOrder с id = ' + id);
//        //new App.Views.SpecialTask({ collection: tasksCollection }); // специальная задача //
//        vent.trigger('specialOrder:show', id); // файрим событие specialTask:show которое отлавливается в View
//    },

    default: function(other) {
        console.log('например 404 ошибка' + other);
    }

});
