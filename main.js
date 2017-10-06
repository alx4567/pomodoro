var break_switch = 0
var pause = 0;
var running = false;

$(document).ready(function(){
    
    function pomodoro(timeSeconds) {
        var timer = document.getElementById("timer");
        var header = document.getElementById("header");
        var seconds_start = timeSeconds
        var user_session = $('#userSession').html();
        var user_break = $('#userBreak').html();

    function countDown() {
        if (pause == 0) {
            seconds_start-- // 0
            var minute = parseInt(seconds_start / 60);
            var seconds = seconds_start % 60; // 1

            if(String(seconds).length < 2) {
                seconds = "0" + seconds;
            }
            
            timer.innerHTML = minute + ":" + seconds; //1
            

            if (seconds_start <= -1) { 
                clearInterval(interval);
                if (break_switch % 2 == 0) {
                    break_switch++
                    header.innerHTML = 'Break';  		
                    pomodoro( parseInt(user_break) * 60 )
                } else {
                    break_switch--
                    header.innerHTML = 'Session'
                    pomodoro( parseInt(user_session) * 60 )
                }
                                    
            }

            
            $("#stop").click(function(){
                clearInterval(interval);
                running = false
                break_switch = 0
                header.innerHTML = 'Session'
                timer.innerHTML = $('#userSession').html() + ':00'   
                    });

                    //Refresh button
            $("#refresh").click(function(){
                clearInterval(interval);
                running = false
                break_switch = 0
                header.innerHTML = 'Session'
                $('#userSession').html("25");
                $('#userBreak').html("5");
                timer.innerHTML = '25:00' 
            });

        }
    
    };

    var interval = setInterval(countDown, 1000);
    };

    // Start button
    $(document).ready(function(){
        $("#start").click(function(){
            if (running === false && pause === 0) {
                running = true
                var break_switch = 1
                pomodoro( parseInt($('#userSession').html()) * 60 );
            } else {
                pause = 0;
                running = true
            }
        });

        //Pause button
        $("#pause").click(function(){
            pause = 1
            running = false
        });

        // Session Down Button
        $("#sessionDown").click(function(){
            var arrow = document.getElementById("userSession");
            standart = arrow.innerHTML 
            if (standart > 0) {  
                standart = parseInt(standart) - 1;
                arrow.innerHTML = standart

                $('#minutes').html( standart )
            }

        });

        // Session Up Button
        $("#sessionUp").click(function(){
            var arrow = document.getElementById("userSession");    
            standart = arrow.innerHTML 
            if (standart < 99) {                
                standart = parseInt(standart) + 1;
                arrow.innerHTML = standart
                $('#minutes').html( standart )
            }
        });

        // Break Up Button
        $("#breakUp").click(function(){
            var arrow = document.getElementById("userBreak");    
            standart = arrow.innerHTML 
            if (standart < 99) {
                standart = parseInt(standart) + 1;
                arrow.innerHTML = standart
            }
        });

        // Break Button
        $("#breakDown").click(function(){
            var arrow = document.getElementById("userBreak");    
            standart = arrow.innerHTML 
            if (standart > 0) {
                standart = parseInt(standart) - 1;
                arrow.innerHTML = standart
            }
        });
    });
});