$(document).ready(function(){

    $('img').click(function(event){
        $(this).css('visibility', 'hidden')
    })

    $('button').click(function(){
        $('img').css('visibility', 'visible');
    })
});
