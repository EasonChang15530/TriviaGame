$(document).ready(function () {


  var pagetime;
  var countdown30s;
  var correctCount = 0;
  var incorrectCount = 0;
  var unAnsedCount = 0;
  var questionIndex = 0;
  var userChoice;
  var clockRunning = false;


  var questions = [
    {
      q: "Which team is the Super Bowl LII champion?",
      a1: "Philadelphia Eagles",
      a2: "New England Patriots",
      a3: "Los Angeles Rams",
      a4: "Atlanta Falcons",
      correctAns: "Philadelphia Eagles"
    },
    {
      q: "Which country will host the 2022 FIFA World Cup?",
      a1: "Qatar",
      a2: "Japan",
      a3: "Greece",
      a4: "Russia",
      correctAns: "Qatar"
    },
    {
      q: "which movie won the biggest box office until now?",
      a1: "Star Wars: The Force Awakens",
      a2: "Harry Potter and the Deathly Hallows Part 2",
      a3: "Avatar",
      a4: "Titanic",
      correctAns: "Avatar"
    },
    {
      q: "What is the longest river in the world?",
      a1: "Mississippi River",
      a2: "Amazon River",
      a3: "Nile River",
      a4: "Yangtze River",
      correctAns: "Nile River"
    },
    {
      q: "Which country has the largest population in the world?",
      a1: "the United States",
      a2: "China",
      a3: "Brazil",
      a4: "India",
      correctAns: "China"
    }];


  // reset game
  function reset() {

    $("#stopwatch").hide();
    $("#multipleChoice").hide();
    $("#scoreboard").hide();
    // $("#result").hide();
    $("#correct").hide();
    $("#incorrect").hide();
    $("#outOfTime").hide();
    $("#start").show();

    $("#start").on("click", function () {
      gamePage();
    });

  };

  
  // Game page
  function gamePage() {

    $("#start").hide();
    $("#scoreboard").hide();
    $("#correct").hide();
    $("#incorrect").hide();
    $("#outOfTime").hide();

    $("#stopwatch").show();
    $("#multipleChoice").show();

    if (!clockRunning) {
      pageCountDown();
    };


    // for (var i = 0; i < questions.length; i++) {
    $("#title").text(questions[questionIndex].q);
    $("#choice1").text(questions[questionIndex].a1);
    $("#choice2").text(questions[questionIndex].a2);
    $("#choice3").text(questions[questionIndex].a3);
    $("#choice4").text(questions[questionIndex].a4);


    $(".btn").on("click", function () {
      userChoice = $(this).text();
      console.log(userChoice);

      if (userChoice === questions[questionIndex].correctAns) {
        console.log("correct!");
        correctCount++;
        win();
        clearInterval(countdown30s);

        // shows next question after 3 seconds Automatically.
        setTimeout(function () {
          gamePage();
        }, 3000);
      }
      else {
        console.log("incorrect!");
        incorrectCount++;
        loss();
        clearInterval(countdown30s);

        // shows next question after 3 seconds Automatically.
        setTimeout(function () {
          gamePage();
        }, 3000);
      };

      clockRunning = false;
      // shows next question rather than showing the same one again.
      questionIndex++;
      console.log(questionIndex);
    });

  };


  // thirty seconds countdown
  function pageCountDown() {

    pagetime = 30;
    clockRunning = true;

    countdown30s = setInterval(function () {

      pagetime--;
      console.log(pagetime);

      $("#countDown").text(pagetime);

      if (pagetime === 0) {
        clearInterval(countdown30s);
        unAnsedCount++;
        clockRunning = false;
        timeout()

      };
    }, 1000);

  };


  // result about win
  function win() {

    $("#multipleChoice").hide();
    $("#scoreboard").hide();
    $("#correct").show();

    console.log("You Win!")
  };


  // result about loss
  function loss() {

    $("#multipleChoice").hide();
    $("#scoreboard").hide();
    $("#incorrect").show();

    console.log("You Lose.")

    // shows the correct answer for this question.
    $("#correctAns1").text(questions[questionIndex].correctAns);

  };


  // result about timeout
  function timeout() {

    $("#multipleChoice").hide();
    $("#scoreboard").hide();
    $("#outOfTime").show();

    // shows the correct answer for this question.
    $("#correctAns2").text(questions[questionIndex].correctAns);

  };


  // displays final page
  function finalpage() {

    $("#start").hide();
    $("#stopwatch").hide();
    $("#multipleChoice").hide();
    // $("#result").hide();
    $("#correct").hide();
    $("#incorrect").hide();
    $("#outOfTime").hide();
    $("#scoreboard").show();

    // puts the correctCount and incorrectCount and unAnsedCount into corresponding position.
    $("#correctAnsNum").text(correctCount);
    $("#incorrectAnsNum").text(incorrectCount);
    $("#unAnsedNum").text(unAnsedCount);


    $("#startOver").on("click", function () {
      reset();
    });

  };


  // initializes game
  reset();

  // tests the finalpage
  // finalpage();

});




