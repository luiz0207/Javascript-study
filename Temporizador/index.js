function startTime(duration, display) {

    var time = duration, minutes, seconds;

    setInterval(function() {

        minutes = parseInt(time / 60 , 10);
        seconds = parseInt(time % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if( -- time < 0) {
            time = duration;
        }
    }, 1000)
}

window.onload = function() {
    var duration = 60 * 4; //conversão para segundo
    var display = document.querySelector("#time") // Elemnto para exibir p time

    startTime(duration, display); //inicia a função
}