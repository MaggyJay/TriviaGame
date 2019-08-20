# TriviaGame

Link to Quiz: https://maggyjay.github.io/TriviaGame/

I wanted to create a fun quiz and what better topic than one of my all-time favorite video game series- The Sims. 

The quiz is built using HTML, CSS, Javascript, and jQuery. jQuery was essential in creating the quiz as this uses several click events and deals heavily with html elements. 

When I first created the quiz I had it as a form within the html document. My JavaScript was just the count down timer, a function to count the correct answers [which were held in an array]. I wanted a more simpler stylistic approach so went for questions showing one at a time on the div that once held the form quiz. This provided better design and with this I was also able to have a timer for each question vs a timer to complete the entire form/quiz in one-go. 

Step processes to this were:
1.) Choosing a topic to do the quiz on
2.) Creating questions and the overall trivia that would be present on the quiz. 
3.) Creating an object that would hold the answers.
4.) With later approach, creating an object that would hold the questions, answers, and correct answer.
5.) Creating an object to hold the triva game
6.) Multiple method functions including ones for countdown, loading the question, going to the next question in the game object, reset game, etc
