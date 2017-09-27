$(document).ready(function(){

    var proxyurl = "https://cors-anywhere.herokuapp.com/";
    var url = "http://pokeapi.co/api/v2/pokemon/";

    for(var i = 1; i <= 151; i++){
    $.get(proxyurl+(url + i), function(res) {
        console.log(res.sprites.front_default)
        $('.wrapper').append('<img src="' + res.sprites.front_default + '">')
    }, "json");
    }

});

