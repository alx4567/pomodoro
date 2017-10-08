var break_switch = 0
var pause = 0;
var running = false;

$(document).ready(function(){
    
    function pomodoro(timeSeconds) {
        var timer = document.getElementById("timer");
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
            

            if (seconds_start <= 0) { 
                clearInterval(interval);
                if (break_switch % 2 == 0) {
                    break_switch++
                    pomodoro( parseInt(user_break) * 60 )
                    $('header').removeClass("session").addClass('work');
                    $('#display').removeClass("session").addClass('work');
                    $('#topText').removeClass("current").addClass('next');
                    $('#bottomText').removeClass("next").addClass('current');
                } else {
                    break_switch--
                    pomodoro( parseInt(user_session) * 60 )
                    $('header').removeClass('work').addClass('session');
                    $('#display').removeClass("work").addClass('session');
                    $('#topText').removeClass("next").addClass('current');
                    $('#bottomText').removeClass("current").addClass('next');
                }
                                    
            }

            
            $("#stop").click(function(){
                clearInterval(interval);
                running = false
                break_switch = 0
                timer.innerHTML = $('#userSession').html() + ':00'  
                if (break_switch % 2 == 0) {
                    $('header').removeClass('work').addClass('session');
                    $('#display').removeClass("work").addClass('session');
                    $('#topText').removeClass("next").addClass('current');
                    $('#bottomText').removeClass("current").addClass('next');
                } 
            });

                    //Refresh button
            $("#refresh").click(function(){
                clearInterval(interval);
                running = false
                break_switch = 0
                $('#userSession').html("25");
                $('#userBreak').html("5");
                timer.innerHTML = '25:00' 
                if (break_switch % 2 == 0) {
                    $('header').removeClass('work').addClass('session');
                    $('#display').removeClass("work").addClass('session');
                    $('#topText').removeClass("next").addClass('current');
                    $('#bottomText').removeClass("current").addClass('next');
                } 
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
                pomodoro(5);
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

                $('#timer').html( standart + ":00" )
            }

        });

        // Session Up Button
        $("#sessionUp").click(function(){
            var arrow = document.getElementById("userSession");    
            standart = arrow.innerHTML 
            if (standart < 99) {                
                standart = parseInt(standart) + 1;
                arrow.innerHTML = standart
                $('#timer').html( standart + ":00" )
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