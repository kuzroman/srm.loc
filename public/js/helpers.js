var hp = {};

/* упощаем доступ к шаблонам */
hp.tmpl = function(id) {
    return _.template( $('#'+ id).html() );
};