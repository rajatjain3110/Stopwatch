const timer = document.getElementById("stopwatch");



//variable declaration and initialixzation
var hr = 0;
var min = 0;
var sec = 0;

//stoptime variable to monitor start and stop button
var stoptime = true;


// on click start event

function startTimer() {
  if (stoptime == true) {
    stoptime = false;
    timerCycle();
  }
}


// on click stop event
function stopTimer() {
  if (stoptime == false) {
    stoptime = true;
  }
}


//Stopwatch logic function
function timerCycle() {
  if (stoptime == false) {
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);

    sec = sec + 1;

    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }


//digit correction for seconds
    if (sec < 10 ) {
      sec = "0" + sec;
    }


    //digit correction for min
    if (min < 10 ) {
      min = "0" + min;
    }


    //digit correction for hour
    if (hr < 10 ) {
      hr = "0" + hr;
    }

    timer.innerHTML = hr + ":" + min + ":" + sec;

    setTimeout("timerCycle()", 1000);
  }
}

// on click reset event
function resetTimer() {
  timer.innerHTML = "00:00:00";
  stoptime = true;
  hr = 0;
  sec = 0;
  min = 0;
}
