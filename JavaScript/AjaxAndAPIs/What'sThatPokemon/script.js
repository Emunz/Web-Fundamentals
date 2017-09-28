$(document).ready(function(){

    var proxyurl = "https://cors-anywhere.herokuapp.com/";
    var url = "http://pokeapi.co/api/v2/pokemon/";


    
    $('.pokepics img').click(function(){
        $('.pokedex').html('');
            $.get(proxyurl+(url + $(this).attr('id')), function(res) {
                $('.pokedex').append('<h1>' + res.name + '</h1>')
                $('.pokedex').append('<img src="' + res.sprites.front_default + '">')
                $('.pokedex').append('<h3>Types</h3>')
                for(var i = 0; i < res.types.length; i++){
                    $('.pokedex').append('<p>' + res.types[i].type.name + '</p>')
                }
                $('.pokedex').append('<h3>Height</h3><p>' + res.height + '</p>')
                $('.pokedex').append('<h3>Weight</h3><p>' + res.weight + '</p>')
            }, "json");
    });
           
        
});