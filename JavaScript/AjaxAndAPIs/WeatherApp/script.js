$(document).ready(function(){
    $('.textfield').focus();

    $('.button').click(function(){
        $('.bottombox').html('');
        var citySearch = $('.textfield').val();
        $.get('http://api.openweathermap.org/data/2.5/weather?q=' + citySearch + '&APPID=9fc29215b9258b98c07811c3c8899b20', function(data){
            console.log(Math.floor((data.main.temp * (9/5)-459.67)))
            console.log(data)
            var html_string = '';
            html_string += '<h1>' + citySearch + ', ' + data.sys.country + '</h1>';
            html_string += '<h3> Current temp: ' + Math.floor((data.main.temp * (9/5)-459.67)) + '</h3>';
            html_string += '<p>Today\'s High: ' + Math.floor((data.main.temp_max * (9/5)-459.67)) + '</p>';
            html_string += '<p> Today\'s Low: ' + Math.floor((data.main.temp_min * (9/5)-459.67)) + '</p>';
            html_string += '<p>' + data.weather[0].description + '</p>';
            $('.bottombox').append(html_string);
            
        }, 'json');
        $('.textfield').val('');
        return false;
    })
});




// API key = 9fc29215b9258b98c07811c3c8899b20
