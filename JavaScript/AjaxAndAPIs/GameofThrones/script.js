$(document).ready(function(){

    $('img').click(function(){
        $('fieldset p, fieldset h3').html('');
        console.log('click')


        var id = $(this).attr('id');

        $.get('https://anapioficeandfire.com/api/houses/' + id, function(data){
            var html_string = '';
            html_string += '<h3> House Name: </h3><p>' + data.name + '</p>'
            html_string += '<h3> Region: </h3><p>' + data.region + '</p>'
            html_string += '<h3> Coat of Arms: </h3><p>' + data.coatOfArms + '</p>'
            html_string += '<h3> House Words: </h3><p>' + data.words + '</p>'
            html_string += '<h3> House Titles: </h3>'
            for(var i = 0; i < data.titles.length; i++) {
                html_string += '<p>' + data.titles[i] + '</p>'
            }
    
            $('fieldset').append(html_string);
        }, 'json')

    })

});





// https://anapioficeandfire.com/api/houses?name=house+stark+of+winterfell