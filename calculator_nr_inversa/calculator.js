    let countdownInterval;

    function calculate() {

        const input=document.getElementById("countdown-date").value;
        let now= new Date(Date.now());

        //console.log(input);

        const inputDate = new Date(input);
        //console.log(inputDate);
        //console.log(now);
        let diff=0;
        if( inputDate < now) {
            diff = now - inputDate;

        }
        else {
            diff = inputDate-now;
        }
        if (countdownInterval) {
            clearInterval(countdownInterval);
        }
let seconds = Math.floor(diff / 1000);
        function updateCountdown() {
        
        
    
        

        
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
        let days = Math.floor(hours / 24);
        let weeks = Math.floor(days / 7);
        let months = Math.floor(days / 30);
        let years = Math.floor(days / 365);
            let second = seconds;

            
        let output_seconds= document.getElementById("result_seconds").innerHTML = `Seconds: ${second}`;
    
        let output_minutes = document.getElementById("result_minutes").innerHTML = `Minutes: ${minutes}`;
        let output_hours = document.getElementById("result_hours").innerHTML = `Hours: ${hours}`;
        let output_days = document.getElementById("result_days").innerHTML = `Days: ${days}`;
        let output_weeks = document.getElementById("result_weeks").innerHTML = `Weeks: ${weeks}`;
        let output_months = document.getElementById("result_months").innerHTML = `Months: ${months}`;
        let output_years = document.getElementById("result_years").innerHTML = `Years: ${years}`; 

        seconds--;
    }
    
        updateCountdown();
            countdownInterval = setInterval(updateCountdown, 1000);
        }
