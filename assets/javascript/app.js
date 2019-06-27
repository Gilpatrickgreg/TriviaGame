$(document).ready(function(){

  //Global variables to be used.
  //$("input[type=radio]").click() = function(event) {
   // var userAnswer = event.click()
  //};
    var numCorrect = 0;
    var numIncorrect = 0;
    var numUnanswered = 0;
    var timeleft = 10;
    
    //Sets timer in action once the page loads and when timer hits 0. Two functions are called to score and show results.

    var downloadTimer = setInterval(function(){
      $("#timer").text( "Time Remaining: " + timeleft);
      timeleft -= 1;
      if(timeleft <= 0){
        clearInterval(downloadTimer);
      $("#timer").text("Time Remaining: 0");
      submit();
      showEndPage(numCorrect, numIncorrect, numUnanswered);
      }
    }, 1000);

    //Array of questions and answers and correct answer in each question.
    var questionBank =
[
  {
    question: "Where were burgers first created?",
    answers: ["New Haven, Connecticut", "Hamburg, Germany", "New York , USA"],
    correct: "New Haven, Connecticut"
  },

  {
    question: "Where was Pizza invented?",
    answers: ["Rome, Italy", "Venice, Italy", "Naples, Italy"],
    correct: "Naples, Italy?"
  },
  {
    question: "What animals milk is used to make authentic Italian mozzarella cheese?",
    answers: ["Buffalo", "Cow", "Sheep"],
    correct: "Buffalo"
  },
  {
    question: "What is the most expensive spice in the world?",
    answers: ["Cinnamon", "Vanilla", "Saffron"],
    correct: "Saffron"
  },
  {
    question: "Which fruit is made from an herb?",
    answers: ["Lilikoi", "Bananas", "Strawberry"],
    correct: "Bananas"
  }
];
        //This submits users guesses at end of timer.
        function submit() {
    
     var userAnswer= $('form input[type=radio]:checked').val();

     
     console.log( $('form input[type=radio]:checked'))
     //$("input[type='radio'][name='question']:checked").val();
     //$(".questions input[type='radio']:checked");
     
//var selected = $("input[type='radio'][name='question']:checked").val();
//if (selected.length > 0) {
    //userAnswer = selected.val();
//}
     
         numCorrect = 0;
         numIncorrect = 0;
         numUnanswered = 0;
        console.log(userAnswer);
        
        //Loops the questions and answers and increments correct/incorrect/unanswered.
        numCorrect =  $('form input[type=radio][name=answer]:checked').length
         numIncorrect = $('form input[type=radio][name=incorrect]:checked').length 
         numUnanswered =  5 - numCorrect - numIncorrect;     
            console.log(numCorrect, numIncorrect, numUnanswered)

       /* for (var i = 0; i < questionBank.length; i++) {
            var correct = questionBank[i].correct;
            console.log(answeredChecked[i])

          //var radioIndex = i + 1;
          console.log(correct);
    
          if (userAnswer === correct) {
            numCorrect++;
            $("#correct-answers").text('Correct answers: ' + numCorrect)

          } else if (userAnswer === "") {
            numUnanswered++;
            $("#incorrect-answers").text('Incorrect answers: ' + numIncorrect)

          } else if (userAnswer !== correct) {
            numIncorrect++;
            $("#unanswered").text('Skipped questions: ' + numUnanswered)

            }
          }*/
        
        
        };


        
        //shows results of quiz at the end of timer.

      function showEndPage(numCorrect, numIncorrect, numUnanswered) {
        $("#end-page").show();
        $("#questions-box").empty();
        $("#correct-answers").text("Correct answers: " + numCorrect);
        $("#incorrect-answers").text("Incorrect answers: " + numIncorrect);
        $("#unanswered").text("Skipped questions: " + numUnanswered);
         playAgain();
        };

       //Play again button to reset game and timer.

     function playAgain() {
     $("#buttonReset").click(function() {
     $("input[type='radio']").empty();
     
     numCorrect = 0;
     numIncorrect = 0;
     numUnanswered = 0;
     timeleft = 10;
    
      }

    )};         
            

     
   
});
