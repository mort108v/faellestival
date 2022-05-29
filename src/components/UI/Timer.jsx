import React from 'react'


function Timer() {
    // Set the date we're counting down to
let countDownDate = new Date("Jul 26, 2022 15:37:25").getTime();

// Update the count down every 1 second
let x = setInterval(function() {

  let now = new Date().getTime();
  let distance = countDownDate - now;
    
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    if (distance < 0) {
      clearInterval(x);
    }
  }, 1000);
    

    return (
        <div>
        <div>
            <p>{x}</p>
            <p>Days</p>
        </div>
            {/* •
            <div>
            <p>{hours}</p>
            <p>Hours</p>
        </div>
            •
            <div>
            <p>{minutes}</p>
            <p>Minutes</p>
        </div>
            •
            <div>
            <p>{seconds}</p>
            <p>Seconds</p>
        </div> */}
        </div>
    )
}

export default Timer
