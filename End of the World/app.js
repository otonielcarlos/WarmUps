var seconds = 20;


function decreaseTime() {
    seconds -= 1;
    document.getElementById('timer').innerHTML = '00:' + '00:' + seconds;
    if (seconds < 10) {
        document.getElementById('timer').innerHTML = '00:' + '00:' + '0' + seconds;

    }
    if (seconds === 0) {
        stopTime();
    }
}

function stopTime() {
    clearInterval(countDown);
    alert('End of the World!')
}

var countDown = setInterval(decreaseTime, 1000);
