// timer js 

$(document).ready(function () {
    var number = 600;
    var intervalID;

    $('#finished-quiz').hide();


    $('#start-button').on('click', function () {
        run();
    });

    function run() {
        clearInterval(intervalID);
        intervalID = setInterval(decrement, 600);


    }


    function decrement() {
        number--;

        

        // $('#timer').append(number);
        $('#timer').html('<p> Time Remaining: ' + number + '</p>');
        if (number === 0) {
            // stop();
            clearInterval(intervalID);
            alert('Timer works!');
    
            $('#sim-quiz').hide();
            $('#finished-quiz').show();
        }
    }

    // function timeConverter(t) {

    //     var minutes = Math.floor(t / 60);
    //     var number = t - (minutes * 60);

    // }

    // if (number === 0) {
    //     // stop();
    //     clearInterval(intervalID);
    //     alert('Timer works!');

    //     $('#sim-quiz').hide();
    //     $('#finished-quiz').show();
    // }

    // function stop() {
    //     clearInterval(intervalID);
    // }

    //run();

})