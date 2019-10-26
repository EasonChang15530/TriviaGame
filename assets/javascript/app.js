$(document).ready(function () {


  var pagetime;
  var countdown30s;
  var correctCount = 0;
  var incorrectCount = 0;
  var unfinishedCount = 0;



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
    },
    {
      q: "which movie won the biggest box office until now?",
      a1: "Star Wars: The Force Awakens",
      a2: "Harry Potter and the Deathly Hallows Part 2",
      a3: "Avatar",
      a4: "Titanic",
      correctAns: "Avatar"
    }];


  // reset game
  function reset() {

    $("#stopwatch").hide();
    $("#multipleChoice").hide();
    $("#scoreboard").hide();
    $("#result").hide();
    $("#start").show();

    $("#start").on("click", function () {
      gamePage();
    });

  };

  // Game page
  function gamePage() {

    $("#start").hide();
    $("#stopwatch").show();
    $("#multipleChoice").show();

    pageCountDown();

    for (var i = 0; i < questions.length; i++) {
      $("#title").text(questions[i].q);
      $("#choice1").text(questions[i].a1);
      $("#choice2").text(questions[i].a2);
      $("#choice3").text(questions[i].a3);
      $("#choice4").text(questions[i].a4);

      console.log(i);

      $(".btn").on("click", function () {
        var userChoice = $(this).text();
        console.log(userChoice);

        if (userChoice === questions[i].correctAns) {
          console.log("right!")
          correctCount++;
          win();
        }
      });

    };



  };

  // thirty seconds countdown
  function pageCountDown() {
    pagetime = 3;
    countdown30s = setInterval(thirtySeconds, 1000);
  };

  function thirtySeconds() {

    pagetime--;
    console.log(pagetime);

    $("#countDown").text(pagetime);

    if (pagetime === 0) {
      clearInterval(countdown30s);

      timeout()

    };
  };


  // result about win
  function win() {
    
    $("#multipleChoice").hide();
    $("#scoreboard").hide();
    $("#result").show();

    console.log("You Win!")
  };


  // result about loss
  function loss() {
    
    $("#multipleChoice").hide();
    $("#scoreboard").hide();
    $("#result").show();

    console.log("You Lose.")

    // TODO: shows the correct answer for this question.
  };


  // result about timeout
  function timeout() {

    $("#multipleChoice").hide();
    $("#scoreboard").hide();
    $("#result").show();

    // TODO: shows the correct answer for this question.
  };


  // displays final page
  function finalpage() {
    
    $("#start").hide();
    $("#stopwatch").hide();
    $("#multipleChoice").hide();
    $("#result").hide();
    $("#scoreboard").show();

    // TODO: puts the correctCount and incorrectCount and unfinishedCount into corresponding position.

    $("#startOver").on("click", function () {
      reset();
    });

  };


  // initializes game
  reset();

  // tests the finalpage
  // finalpage();

});




