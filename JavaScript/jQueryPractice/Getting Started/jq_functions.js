$(document).ready(function(){
    
    $('.click button').click(function(){
        alert('YOU CLICKED THE BUTTON!!!')
    });

    $('.hide button').click(function(){
        $('.hide p').hide();
    });

    $('.show button').click(function(){
        $('.hide p').show();
    });

    $('.toggle button').click(function(){
        $('p').toggle("slow");
    });

    $('.slide-down button').click(function(){
        if ($('.slide-down img').is(':hidden')) {
            $('.slide-down img').slideDown('slow');
        } else {
            $('.slide-down img').hide();
        }
    });

    $('.slide-up button').click(function(){
        if ($('.slide-up img').is(':hidden')) {
            $('.slide-up img').show('slow');
        } else {
            $('.slide-up img').slideUp('slow');
        }
    });

    $('.slide-toggle button').click(function(){
        $('img').slideToggle('slow');
    });

    $('.fade-in button').click(function(){
        if ($('.fade-out').is(':hidden')){
            $('.fade-out').fadeIn(2500);
        } else {
            $('.fade-out').hide();
        }
    })

    $('.fade-out button').click(function(){
        if($('.fade-out p').is(':hidden')){
            $('.fade-out p').show();
        } else {
            $('.fade-out p').fadeOut(2000);
        }
    })

    $('.add-class button').click(function(){
        $('.add-class p').addClass('red');
    });

    $('.before button').click(function(){
        $('.before button').before('<h6>YOU CLICKED</h6>')
    });

    $('.after button').click(function(){
        $('.after button').after('<h6>YOU CLICKED</h6>')
    });

    $('.append button').click(function(){
        $('.append p').append('&nbsp;Radiohead')
    });

    $('.html button').click(function(){
        $('.html p').html('<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHAOQy_d41NsNoNXPxV2QVSXcM-3hJ37_h_d99Qxz7XECaN080">')
    });

    $('.attribute button').click(function(){
        $('.attribute img').attr('width', '200px');
    });


    $('.val button').click(function(){
        var text = $(this).text();
        $('.val input').val(text);
    });

    $('.text').click(function(){
        var name;
        name=prompt('What is your first name?');
        $('.text p').text(name + "...is the greatest coder of all");
    });

    $('.data button').click(function(){
        $('.data p').data('color',{first: 'blue', last: 'red'});
        $('.data p span:first').text($('.data p').data('color').first);
        $('.data p span:last').text($('.data p').data('color').last);

        $('.data button').click(function(){
            $('.data p').data('landTypes',{first: 'mountains', last: 'ocean'});
            $('.data p span:first').text($('.data p').data('landTypes').first);
            $('.data p span:last').text($('.data p').data('landTypes').last);

            $('.data button').click(function(){
                $('.data p').data('music',{first: 'rock', last: 'hip-hop'});
                $('.data p span:first').text($('.data p').data('music').first);
                $('.data p span:last').text($('.data p').data('music').last);
    
            });
        });
    });

   
});