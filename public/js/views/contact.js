/**
 * Global App View
 */
App.Views.App = Backbone.View.extend({
    initialize: function() {
        vent.on('contact:edit', this.editContact, this);
        new App.Views.AddContact({ collection: App.contacts });
    }
    ,editContact: function (contact) {
        // создаем новый экземпляр вида App.
        // привязываем модель к этому виду
        // добавить форму к dom дереву
        var editContactView = new App.Views.EditContact({model: contact });
        $('.contact_form_block').html(editContactView.el);
    }
});


App.Views.AddContact = Backbone.View.extend({
    el: '#addContact',

    events: {
        'submit' : 'addContact'
    },

    addContact: function(e) {
        e.preventDefault();

        var newContact = this.collection.create({
            first_name: this.$('#first_name').val(),
            last_name: this.$('#last_name').val(),
            email_address: this.$('#email_address').val(),
            description: this.$('#description').val()
        },
            {wait:true} // дождаться ответа от сервера, потом создавай в клиенте
        );

        //console.log(newContact.toJSON());
    }
});


App.Views.EditContact = Backbone.View.extend({

    template: hp.tmpl('editContactTpl')

    ,events: {
        'submit #edit_contact_form': 'submit',
        'click .j_cancel': 'cancel'
    }

    ,initialize: function () {
        this.render();
        // кешируем элементы (this - где искать, без него не будет работать!)
        this.first_name = this.$('#edit_first_name');
        this.last_name = this.$('#edit_last_name');
        this.email_address = this.$('#edit_email_address');
        this.description = this.$('#edit_description');
    }
    ,render: function () {
        var tmpl = this.template(this.model.toJSON() );
        this.$el.html(tmpl);
        return this;
    }
    ,submit: function (e) {
        // взять существующую модель
        // изменить ее
        // синхронизировать с сервером
        e.preventDefault();

        this.model.save({
            first_name:    this.first_name.val(),
            last_name:     this.last_name.val(),
            email_address: this.email_address.val(),
            description:   this.description.val()
        });

        this.remove();
    }
    ,cancel: function () {
        this.remove();
    }
});

/* Вид одного контакта */
App.Views.Contact = Backbone.View.extend({
    tagName : 'tr'
    ,template: hp.tmpl('contactTemplate')

    ,initialize : function () {
        this.model.on('change', this.render, this);
        this.model.on('destroy', this.removeEl, this);
    }
    ,render : function () { // наполнение кодом
        var template = this.template(this.model.toJSON());
        this.$el.html( template );
        return this;
    }
    ,events: {
        'click .j_remove_contact' : 'removeContact',
        'click .j_edit_contact' : 'editContact'
    }
    ,removeContact: function () {
        this.model.destroy();
    }
    ,destroy : function () {
        this.model.destroy();
    }
    ,removeEl : function () {
        this.remove(); // аналогично this.$el.remove();
    }
    ,editContact: function () {
        vent.trigger('contact:edit', this.model);
    }
});

/* Вид списка контактов */
App.Views.Contacts = Backbone.View.extend({
    tagName : 'table'

    ,initialize : function() {
        this.collection.on('add', this.addOne, this);
    }
    ,render : function () {
        this.collection.each(this.addOne, this); // underscore each
        return this;
    }
    ,addOne : function (contact, index, list) {
        //console.log('contact', contact);
        // создать новый дочерний вид
        var contactView = new App.Views.Contact({model: contact});
        // добавлять его в корневой элемент
        this.$el.append( contactView.render().el );
    }
});