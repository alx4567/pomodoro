var break_switch = 1
var pause = 0

$(document).ready(function(){

    function pomodoro(timeSeconds) {
        var timer = document.getElementById("timer");
        var header = document.getElementById("header");
        var seconds_start = timeSeconds



    function countDown() {
        if (pause == 0) {
            var minute = parseInt(seconds_start / 60);
            var seconds = seconds_start % 60; // 1
            console.log(pause);

            if(String(seconds).length < 2) {
                seconds = "0" + seconds;
            }
            
            timer.innerHTML = minute + ":" + seconds; //1
            seconds_start-- // 0

            if (seconds_start <= -1) { 
                clearInterval(interval);
                if (break_switch % 2 == 0) {
                    break_switch++
                    header.innerHTML = 'Break'	  		
                    pomodoro(10)
                } else {
                    break_switch--
                    header.innerHTML = 'Session'
                    pomodoro(3)
                }
                                    
            }
            
            $("#stop").click(function(){
                clearInterval(interval);
                timer.innerHTML = '25:00'   
                    });

        }
    };

    var interval = setInterval(countDown, 1000);
    };






    $(document).ready(function(){
        $("#start").click(function(){
            if (pause === 0) {
                pomodoro(2);
            } else {
                pause = 0;
            }
        });

        $("#pause").click(function(){
            pause = 1
        });

        $("#sessionDown").click(function(){
            var arrow = document.getElementById("userSession");    
            standart = arrow.innerHTML 
                console.log(standart)
                standart = standart - 1;
                arrow.innerHTML = standart
        });
    });
});



/*
    var break_time = 1;
    seconds = 10
    var breakCountDown = setInterval (function() {
        var minutes = parseInt(seconds / 60);
        var seconds_left = seconds % 60;
        
        if(String(seconds_left).length < 2) {
            seconds_left = "0" + seconds_left;
        }


        var clock = document.getElementById("pom-time");
        clock.textContent = minutes + ':' + seconds_left;

        if (seconds === 0) { 
            clearInterval()
          }
        seconds -= 1;
        ;
        
    }, 1000)
    */

    