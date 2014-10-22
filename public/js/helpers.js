var hp = {};

/* упощаем доступ к шаблонам */
hp.tmpl = function(id) {
    return _.template( $('#'+ id).html() );
};

/* события */
hp.event = function (event, $el, model) {
    console.log(event, $el, model);
    vent.trigger(event, $el, model);
};