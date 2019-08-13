$(document).ready(function () {

    var card = $('#container');
    var countStartNumber = 30;

    // $('#start-button').on('click', function () {
    //     console.log('here we go again')
    //     $('#start-button').hide();
    //     game.loadQuestion();
    // });

    $(document).on("click", "#start-button", function () {
        $('#start-button').hide();
        $("#counter").prepend("<h2>Time Remaining: <span id='counter-number'>30</span> Seconds</h2>");
        game.loadQuestion();

    })

    $(document).on('click', '.answer-button', function (e) {
        game.clicked(e);
        //we're passing e, we're passing the event, which is what's being clicked
    })

    $(document).on("click", "#start-over", function () {
        game.reset();
    });
    //Questions

    var questions = [{
        question: "Who is the creator of The Sims franchise?",
        answers: ["Sid Meier", "Will Wright", "Hideo Kojima", "Todd Howard"
        ],
        correctAnswer: "Will Wright"
    }, {
        question: "What was the inspiration behind The Sims?",
        answers: ["The creator of the sims lost their home in a house fire", "Home architecture software", "The creator had a dream about the concept", "A & B", "All"],
        correctAnswer: "A & B"
    }, {
        question: "The first Sims PC game was released on: ",
        answers: ["June 2001", "February 2000", "November 1999", "January 1998"],
        correctAnswer: "February 2000"
    }, {
        question: "Which of these pesonality traits is <b>NOT</b> a trait within The Sims 3?",
        answers: ["Perceptive", "Over- Emotional", "Inappropriate", "Can't Stand Art", "Sports Enthusiasts"],
        correctAnswer: "Sports Enthusiasts"
    }, {
        question: "Which one of these artists have NOT done in original simlish music for the games [Hint: Including PC & Console games]?",
        answers: ["Carly Rae Jepsen", "Black Eyed Peas", "P!nk", "Toni Braxton", "Paramore", "Chris Brown"],
        correctAnswer: "P!nk"
    }, {
        question: "The Sims 2 PC version was released on: ",
        answers: ["June 2006", "March 2005", "September 2004", "May 2003"],
        correctAnswer: "September 2004"
    }, {
        question: "The Urbz: Sims in the City released on all platforms, <b>EXCEPT</b>:",
        answers: ["GameBoy Advance", "Nintendo DS", "Playstation 2", "GameCube", "PC"],
        correctAnswer: "PC"

    }, {
        question: "Which of these is a career track in the Sims 3?",
        answers: ["Criminal", "Natural Scientist", "Artist", "Secret Agent"],
        correctAnswer: "Criminal"

    }, {
        question: "In the Sims 2, what color is your sims' ghost if they die from electrocution?",
        answers: ["Purple", "Orange", "Green", "Yellow"],
        correctAnswer: "Yellow"
    }];

    var game = {
        questions: questions,
        currentQuestion: 0,
        counter: countStartNumber,
        correct: 0,
        incorrect: 0,
        countdown: function () {
            game.counter--;
            $("#counter-number").text(game.counter);
            if (game.counter === 0) {
                console.log("TIME UP");
                game.timeUp();
            }

        },
        loadQuestion: function () {
            //We're going to want to set the timer whenever we load the question. Every 1 second we're going to run this countdown function and posting the counter to the page. Also checking if it's less than 0
            timer = setInterval(game.countdown, 1000)
            $('#subwrapper').html('<h2>' + questions[game.currentQuestion].question + '</h2>');
            //we want to post our answers to the page as well
            for (var i = 0; i < questions[game.currentQuestion].answers.length; i++) {
                $('#subwrapper').append('<button class = "answer-button" id = "button-' + i + '" data-name="' + questions[game.currentQuestion].answers[i] + '">' + questions[game.currentQuestion].answers[i] + '</button>');
            }


        },
        nextQuestion: function () {
            game.counter = 30;
            $('#counter-number').text(game.counter);
            game.currentQuestion++;
            game.loadQuestion();

        },
        timeUp: function () {
            clearInterval(timer);

            $('#counter-number').html(game.counter);

            $('#subwrapper').html('<h2>OUT OF TIME</h2>');
            $('#subwrapper').append('<h3>The correct answer was: ' + questions[game.currentQuestion].correctAnswer + '</h3');
            if (game.currentQuestion === questions.length - 1) {
                setTimeout(game.results, 3 * 1000);
            }
            else {
                setTimeout(game.nextQuestion, 3 * 1000);
            }

        },
        results: function () {
            clearInterval(timer);
            $('#subwrapper').html('<h2>All done, heres how you did!</h2>');
            $("#counter-number").text(game.counter);
            $('#subwrapper').append("<h3>Correct Answers: " + game.correct + "</h3>");
            $('#subwrapper').append("<h3>Incorrect Answers: " + game.incorrect + "</h3>");
            $('#subwrapper').append("<h3>Unanswered: " + (questions.length - (game.incorrect + game.correct)) + "</h3>");
            $('#subwrapper').append("<br><button id='start-over'>Start Over?</button>");

        },
        clicked: function (e) {
            clearInterval(timer);
            if ($(e.target).data("name") == questions[game.currentQuestion].correctAnswer) {
                game.answeredCorrect();
            } else {
                game.answeredIncorrect();
            }
        },
        answeredCorrect: function () {
            clearInterval(timer);
            game.correct++;
            $('#subwrapper').html('<h2>YOU GOT IT CORRECT!</h2>');
            if (game.currentQuestion === questions.length - 1) {
                setTimeout(game.results, 3 * 1000);
            }
            else {
                setTimeout(game.nextQuestion, 3 * 1000);
            }
            console.log("YOU GOT IT!");

        },
        answeredIncorrect: function () {
            clearInterval(timer);
            game.incorrect++;
            $('#subwrapper').html('<h2>YOU GOT IT WRONG!</h2>');
            if (game.currentQuestion === questions.length - 1) {
                setTimeout(game.results, 3 * 1000);
            }
            else {
                setTimeout(game.nextQuestion, 3 * 1000);
            }
            $('#subwrapper').append('<h3>The correct answer was: ' + questions[game.currentQuestion].correctAnswer + '</h3');
            console.log("WRONG");

        },
        reset: function () {
            game.currentQuestion = 0;
            game.counter = 0;
            game.correct = 0;
            game.incorrect = 0;
            game.loadQuestion();

        }


    }

});