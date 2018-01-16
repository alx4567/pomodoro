// + Fix bug when following sequence is excecuted: play -> pause -> stop
// + Make it so that pause cant't be marked if clock isn't running
// + when on break state block out time changing + when clock is running block workup and breakup

// + when numbers get smaller chevron moves and buttons are hard to hit and it looks weird
// + after times run out lowest line doesn't change back to blue after stop button is pushed
// + white hover bacground doesn't work on play when on pause and this extends to all buttons after pushing stop
// - original stop button doesn't work whne dispaly is on 0:00.
// - Double run functions when stoping and restarting at 0:00
// - lacks going from stop to play



$(document).ready(function(){
   //Flow-control variables needed for buttons inside and outside startTimer function
   var stopResetOn = true;
   var runningColor = true;
   var timerRunning = false;
   //Jquery objects needed to change colors by adding and removing classes
   var displayAndLine = [$('header'), $('#display'), $('#line')]
   var topText = $('#topText');
   var bottomText = $("#bottomText");
   //Objects for changing button background-color
   var buttonBg = $("nav").find("button");
   var playAndPauseLine = $("#playHover, #pauseHover");
   var playLine = $("#playHover");
   var pauseLine = $("#pauseHover");
   var startButton = $("#start");
   var pauseButton = $("#pause");
   var stopButton = $("#stop");
   var resetButton = $("#refresh");
   //Objects for controlling the different time displays
   var workDisplay = $("#workDisplay");
   var timeDisplay = $("#timeDisplay");
   var breakDisplay = $("#breakDisplay");
   var workDownButton = $("#workDown")
   var workUpButton = $("#workUp");
   var breakDownButton = $("#breakDown");
   var breakUpButton = $("#breakUp");

  function startTimer(setTimeInput) {
      var startTime = setTimeInput;
      var interval = setInterval(countDown, 1000);

      function clearTimer() {
          clearInterval(interval);
      }

      function countDown() {
          if (timerRunning == true) {
            var minute = parseInt(startTime / 60);
            var seconds = startTime % 60;

            if(String(seconds).length < 2) {
                seconds = "0" + seconds;
            }

            timeDisplay.html(minute + ":" + seconds)
            startTime--

            if (startTime < 0) {
                clearTimer();
                startTimer(parseInt( breakDisplay.html() ));
                if (runningColor == true) {
                    runningColor = false;
                    $.each(displayAndLine, function(i, element) {
                      $(element).removeClass("workBlue").addClass("pauseRed");
                    });
                    topText.toggleClass("opacityOn", true);
                    bottomText.toggleClass("opacityOn", false);
                } else {
                    runningColor = true;
                    $.each(displayAndLine, function(i, element) {
                      $(element).removeClass("pauseRed").addClass("workBlue");
                    });
                    topText.toggleClass("opacityOn", false);
                    bottomText.toggleClass("opacityOn", true);
                }
          }

            // Stop button
            stopButton.click(function(){
              clearTimer();
              stopResetOn = true;
              timerRunning = false;

              timeDisplay.html(workDisplay.html() + ':00');
              buttonBg.toggleClass("whiteBackgroundOn", false)
              playAndPauseLine.css("visibility", "hidden");

              if (runningColor == false) {
                $.each(displayAndLine, function(i, element) {
                  $(element).removeClass("pauseRed").addClass("workBlue");
                });
                topText.toggleClass("opacityOn", false)
                bottomText.toggleClass("opacityOn", true)
              }
          });

            // resetButton
            resetButton.click(function(){
              clearTimer();
              stopResetOn = true;
              timerRunning = false;
              timeDisplay.html("25:00");
              workDisplay.html("25")
              breakDisplay.html("5");
              buttonBg.toggleClass("whiteBackgroundOn", false)
              playAndPauseLine.css("visibility", "hidden");

              if (runningColor == false) {
                $.each(displayAndLine, function(i, element) {
                  $(element).removeClass("pauseRed").addClass("workBlue");
                });
                topText.toggleClass("opacityOn", false)
                bottomText.toggleClass("opacityOn", true)
              }
           });
        } //End of flow-control statement
      }; //End of countDown function
      }; //End of startTimer function


      // Start button
      startButton.click(function(){
        startButton.toggleClass("whiteBackgroundOn", true)
        playLine.css("visibility", "visible");
        pauseLine.css("visibility", "hidden");
          if (timerRunning == false && stopResetOn == true) {
              timerRunning = true;
              runningColor = true;

              startTimer( workDisplay.html() * 60 );
          } else {
              pauseButton.toggleClass("whiteBackgroundOn", false)
              timerRunning = true;
          }
      });

      //Pause button
      pauseButton.click(function(){
        if (timerRunning == true) {
          timerRunning = false;
          stopResetOn = false;

          startButton.toggleClass("whiteBackgroundOn", false)
          pauseButton.toggleClass("whiteBackgroundOn", true)
          playLine.css("visibility", "hidden")
          pauseLine.css("visibility", "visible")
        }
      });

      // Session Down Button
      workDownButton.click(function(){
          var setWorkTime = workDisplay.html();
          if (setWorkTime > 0) {
              setWorkTime = parseInt(setWorkTime) - 1;
              workDisplay.html(setWorkTime);
              if (timerRunning == false) {
                timeDisplay.html( setWorkTime + ":00" )
              }
          }
      });

      // Session Up Button
      workUpButton.click(function(){
         var setWorkTime = workDisplay.html();
          if (setWorkTime < 99) {
              setWorkTime = parseInt(setWorkTime) + 1;
              workDisplay.html(setWorkTime);
              if (timerRunning == false) {
                timeDisplay.html( setWorkTime + ":00" )
              }
          }
      });

      // Break Up Button
      breakUpButton.click(function(){
          setBreakTime = breakDisplay.html();
          if (setBreakTime < 99) {
              setBreakTime = parseInt(setBreakTime) + 1;
              breakDisplay.html(setBreakTime);
          }
      });

      // Break Button
      breakDownButton.click(function(){
          setBreakTime = breakDisplay.html();
          if (setBreakTime > 0) {
              setBreakTime = parseInt(setBreakTime) - 1;
              breakDisplay.html(setBreakTime);
          }
      });

});
