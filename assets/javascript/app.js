// timer js 

var number= 600;

$('#start-button').on('click', run){

    function run() {
        clearInterval(intervalID);
        intervalID = setInterval(decrement, 600);
    }
}

function decrement () {
    number --;

    $('#timer').append(number);
}

if (number === 0) {
    stop ();

    $('#sim-quiz').hide();
    $('#finished-quiz').show();
}

function stop (){
    clearInterval(IntervalID);
}

run();