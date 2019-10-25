$(document).ready(function () {


  var pagetime;
  var countdown30s;
  var correctAnsArray = ["Philadelphia Eagles", "Qatar", "Nile River", "China", "Avatar"]


  // start page
  function starGame() {

    $("#stopwatch").hide();
    $("#title1").hide();
    $("#title2").hide();
    $("#title3").hide();
    $("#title4").hide();
    $("#title5").hide();
    $(".result").children().hide();
    $(".scoreboard").hide();

    $("#start").on("click", function () {
      gamePage();
    });

  };

  function gamePage() {

    $("#start").hide();

    $("#stopwatch").show();
    $("#title1").show();

    pageCountDown();

    $("#btn1").on("click", function () {
      // cannot get #btn1 val
      if (this.val === correctAnsArray[0]) {
        win();
      }
    });
  };

  // thirty seconds countdown
  function pageCountDown() {
    pagetime = 30;
    countdown30s = setInterval(thirtySeconds, 1000);
  };

  function thirtySeconds() {

    pagetime--;
    console.log(pagetime);

    $("#countDown").text(pagetime);

    if (pagetime === 0) {
      clearInterval(countdown30s);
      
      $("#title1").hide();
      $("#outOfTime").show();
      $("#correctAns").text(correctAnsArray[0])
      // can not show the correctAns
      console.log(correctAnsArray[0])
    };
  };

  function win() {
    $("#title1").hide();
    $("#correct").show();
  };








  starGame();

});




