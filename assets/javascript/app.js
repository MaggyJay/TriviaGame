// timer js 

$(document).ready(function () {
    var number = 60;
    var intervalID;

    $('#finished-quiz').hide();
    $('#sim-quiz').hide();


    $('#start-button').on('click', function () {
        $('#sim-quiz').show();

        //timer();

        var timer = setInterval(function () {

            number -= 1;
            clearInterval(intervalID);
    
            if (number <= 0) {
    
                clearInterval(timer);
                alert('Timer works!');
    
                $('#sim-quiz').hide();
                $('#finished-quiz').show();
            }
    
    
    
    
    
            $('#timer').append(number);
            $('#timer').html('<p> Time Remaining: ' + number + '</p>');
    
        }, 1000);
    
    })
    });



   