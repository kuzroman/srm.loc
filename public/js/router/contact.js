App.Router.Contact = Backbone.Router.extend({
    routes: {
        '': 'index'
    },
    index: function() {
        console.log('роут Contact!');
    }
});
