$(document).ready(function(){
    var userChoice;
    var computerChoice;

    $('button').click(function(){
        $('body p').html ('');
        userChoice = $(this).attr('class')
        var arrChoices = ['rock', 'paper', 'scissors']
        computerChoice = arrChoices[Math.floor(Math.random() * 3)]

        $('.wrapper').append('<p>You played: ' + userChoice);
        $('.wrapper').append('<p>Computer played: ' + computerChoice)

        if (userChoice === computerChoice){
            $('.wrapper').append('<p>You tied!</p>')
        } else if (userChoice === 'rock' && computerChoice === 'scissors'){
            $('.wrapper').append('<p>Rock breaks scissors</p><p>You Win!</p>')
        } else if (userChoice === 'rock' && computerChoice === 'paper'){
            $('.wrapper').append('<p>Paper covers rock</p><p>You Lose!</p>')
        } else if (userChoice === 'paper' && computerChoice === 'rock'){
            $('.wrapper').append('<p>Paper covers rock</p><p>You Win!</p>')
        } else if (userChoice === 'paper' && computerChoice === 'scissors'){
            $('.wrapper').append('<p>Scissors cuts paper</p><p>You Lose!</p>')
        } else if (userChoice === 'scissors' && computerChoice === 'paper'){
            $('.wrapper').append('<p>Scissors cuts paper</p><p>You Win!</p>')
        } else if (userChoice === 'scissors' && computerChoice === 'rock'){
            $('.wrapper').append('<p>Rock breaks scissors</p><p>You Lose!</p>')
        } else {
            $('.wrapper').append('Something went wrong!')
        }


    })

});

