/* Вид одной задачи */
App.Views.Task = Backbone.View.extend({
    tagName : 'li'
    ,template: hp.tmpl('taskTemplate')

    ,initialize : function () {
        this.model.on('change', this.render, this);
        this.model.on('destroy', this.remove, this);
    }
    ,render : function () { // наполнение кодом
        var template = this.template(this.model.toJSON());
        this.$el.html( template );
        return this;
    }
    ,events: {
        'click .j_edit' : 'editTask'
        ,'click .j_remove' : 'destroy'
    }
    ,editTask : function () {
        var newTitle = prompt('Название задачи', this.model.get('title') );
        var newPriority = prompt('Приоритет', this.model.get('priority') );
        this.model.set({'title': newTitle, 'priority': newPriority}, {validate: true});
        this.model.save();
    }
    ,destroy : function () {
        this.model.destroy();
    }
    ,remove : function () {
        this.$el.remove();
    }
});

/* Вид списка задач */
App.Views.Tasks = Backbone.View.extend({
    tagName : 'ul'

    ,initialize : function() {
        this.collection.on('add', this.addOne, this);
    }
    ,render : function () {
        this.collection.each(this.addOne, this); // underscore each

        console.log('Tasks',this.el);
        return this;
    }
    ,addOne : function (task, index, list) {
        // создать новый дочерний вид
        var taskView = new App.Views.Task({model: task});
        // добавлять его в корневой элемент
        this.$el.append( taskView.render().el );
    }
});

/* вид добавления задачи */
App.Views.AddTasks = Backbone.View.extend({
    el: '#newTaskForm'

    ,events : {
        'submit' : 'submit'
    }

    ,submit : function (event) {
        event.preventDefault();
        
        var newTaskText = $(this.el).find('.newTaskInput').val().replace('/<\/?[^>]+>/g')
            ,newTaskPriority = $(this.el).find('.newPriority').val().replace('/<\/?[^>]+>/g')
            ,newTask = new App.Models.Task({title: newTaskText, priority: newTaskPriority});
        // console.log(newTask);
        
            if (newTask.isValid()) {
            this.collection.add(newTask);
            newTask.save();
        }
    }
});

/* здесь отлавливается событие SpecialTask:show
    http://backbone.rus/index.html#specialTask/12
    стработает событие specialTaskShow
*/
App.Views.SpecialTask = Backbone.View.extend({

    template: hp.tmpl('tplSpecialTask')

    ,initialize: function () {
        // на этом шаге нам известно id
        vent.on('specialTask:show', this.sync, this); // подписываемся на событие из роута
    }
    ,sync: function () {
        // на этом шаге заполнена(синхронизирована) коллекция
        this.collection.on('sync', this.show, this); // модель на этом этапе еще не создана! А коллекция готова!
    }
    ,show: function () {
        var id = location.hash.replace( /(\D)*/ , ''); // #specialTask/1 - удалить все кроме цифр
        
        var specialTask = this.collection.get(id);
        var specialTaskView = new App.Views.SpecialTask({model:specialTask});
//        console.log( specialTaskView.render().el );

        $('body').append( specialTaskView.render().el );
//        console.log(specialTask );
    }
    ,render: function () {
//        console.log(this.model.toJSON());
        var template = this.template(this.model.toJSON());
        this.$el.html(template);
        return this;
    }
});
