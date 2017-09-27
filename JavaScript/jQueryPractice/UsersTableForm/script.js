$(document).ready(function(){

    $('button').click(function(){
        var firstName = $('#firstName').val()
        var lastName = $('#lastName').val()
        var email = $('#email').val()
        var phoneNumber = $('#phoneNumber').val()

        $('table').append('<tr><td>' + firstName + '</td><td>' + lastName + '</td><td>' + email + '</td><td>' + phoneNumber + '</td>')
    })
});