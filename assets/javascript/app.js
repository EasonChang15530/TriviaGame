




// thirty seconds countdown
var pagetime = 5;
var countdown30s = setInterval(thirtySeconds, 1000);

function thirtySeconds() {
  
  pagetime --;
  console.log(pagetime);

  $("#countDown").text(pagetime);

  if(pagetime === 0){
    clearInterval(countdown30s);
    // TODO: shows the outOfTime image.
  }
}


