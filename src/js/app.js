var $ = require('jquery');
var Handlebars = require("handlebars");

$(document).ready(function() {

    // verifico se esiste un attributo 'data-is-ajax' impostato a 1
    // questo corrisponde al contenitore delle card nella versione ajax
    if($('#lista-dischi').attr('data-is-ajax') == '1') {

        // faccio la prima chiamata ajax per recuperare tutti i dischi
        $.ajax({
            'url': '../database/dischi.php',
            'method': 'GET',
            'success': function(dischi) {
                var template = Handlebars.compile($('#card-template').html());
                for (var i = 0; i < dischi.length; i++) {
                    var disco = dischi[i];
                    var dati_disco = {
                        'copertina': disco.poster,
                        'titolo': disco.title,
                        'autore': disco.author,
                        'anno': disco.year
                    };
                    var html_card = template(dati_disco);
                    $('#lista-dischi').append(html_card);
                }
            },
            'error': function() {
                console.log('si è verificato un errore');
            }
        });
    }

    // il resto di istruzioni vengono eseguite in entrambe le versioni
    // infatti, per gestire il bonus del filtro per artista,
    // il codice è lo stesso sia per la versione php che per la versione ajax!
    console.log('test js');

});
