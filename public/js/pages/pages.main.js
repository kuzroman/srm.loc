// task

// Создаем все необходимые экземпляры.
var tasksCollection = new App.Collections.Tasks();
    tasksCollection.fetch();


var tasksView = new App.Views.Tasks({collection: tasksCollection});
$('.j_tasks').html(tasksView.render().el);

new App.Views.AddTasks({collection: tasksCollection});

new App.Router.Task();
Backbone.history.start();


/* пример получения json данных, модель строится автоматом */
//var task = new App.Models.Task({id:1}); // http://backbone.rus/ajax/task/1   - вернет по id
//var task = new App.Models.Task(); // http://backbone.rus/ajax/task/ - вернет весь список
//task.fetch();

//task.set({title: 'other_task'});
//console.log(task);

//task.save();
//task.destroy();

// _.each([1, 2, 3], function() {console.log(arguments); } );
// [1, 2, 3].forEach( function() {console.log(arguments)} );

//=============================================================
// contact

//new App.Router.Contact();
App.contacts = new App.Collections.Contacts();
App.contacts.fetch().then(function () {
    new App.Views.App({collection: App.contacts});

    var contacts = new App.Views.Contacts({collection: App.contacts});
    $('.j_contacts').html(contacts.render().el);
});