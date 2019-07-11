// timer js 

$(document).ready(function () {
    var number = 60;
    var intervalID;

    $('#finished-quiz').hide();
    $('#sim-quiz').hide();


    $('#start-button').on('click', function () {
        $('#start-button').hide();
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
                $('#finished-quiz').html('<p> Correct Answers: ' + score);
            }





            $('#timer').append(number);
            $('#timer').html('<p> Time Remaining: ' + number + '</p>');

        }, 1000);

        // $('#submit-button').on('click', function () {
        //     $('#sim-quiz').hide();
        //     $('#finished-quiz').show();
        //     $('#finished-quiz').html('<p> Correct Answers: ' + score);
    
        // })

    })

  

    var answers = ["B", "D", "B", "E", "C", "C", "E", "A", "D"];

    total = answers.length;

    function checkAnswer(radioName) {
        var radios = document.getElementById(radioName);
        for (var y = 0; y < radios.length; y++)
            if (radios[y].checked) return radios[y].value;
    }

    function getScore() {
        var score = 0;
        for (var i = 0; i < total; i++)
            if (checkAnswer("question" + i) === answers[i]) score += 1;
        return score;
    }
})


    // });
