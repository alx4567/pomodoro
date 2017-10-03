var start_time = 25;
    var seconds = start_time * 60;    

    var countDown = setInterval (function() {
        var minutes = parseInt(seconds / 60);
        var seconds_left = seconds % 60;
        
        if(String(seconds_left).length < 2) {
            seconds_left = "0" + seconds_left;
        }


        var clock = document.getElementById("pom-time");
        clock.textContent = minutes + ':' + seconds_left;

        if (seconds === 0) { 
            var clock = document.getElementById("pom-time");
            clock.textContent = 'break';
            clearInterval(countDown);
          }
        seconds -= 1;
        
        
    }, 1000);


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