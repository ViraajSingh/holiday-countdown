let targetDate;
let days, hours, minutes, seconds;
let party;
let end;
let timers = [];
let mySound = new Audio('./sound/party-blower-sounds-19825.mp3')


function trigger() {
    const name = document.getElementById("party").value;
    if (!name) {
        alert("Put in a valid Name");
        return;
    }

    let targetDate = new Date(document.getElementById("date").value);
    if (document.getElementById('date').value === "") {
        alert("Put a valid time please");
        return;
    }

    const timerElement = document.createElement('div');
    document.getElementById("timer-container").appendChild(timerElement);

    const newT = {
        name: name,
        targetDate: document.getElementById("date").value,
        timerElement: timerElement,
        interval: setInterval(() => updateCountdown(newT), 1000)
    };
    timers.push(newT);
    updateCountdown(newT);
    if (new Date(newT.targetDate) <= new Date()) {
        alert(`${newT.name} has arrived!`);
    }
}

function updateCountdown(current) {
    const now = new Date();
    const timeDifference = new Date(current.targetDate) - now;

    if (timeDifference <= 0) {
        clearInterval(current.interval);
        current.timerElement.innerHTML = `<div id='event-data'><h2 id='title'>${current.name}</h2><p id='content'>Event has arrived!</p></div>`;
        setTimeout(() => {
            current.timerElement.remove();
            alert(`${current.name} IS HAPPING RIGHT NOW`)
            mySound.play()
        },); // this uses setTimeout to enact the remove on the elemnt AFTER it is doen with the countdown, and it has no delay since it shoudl be immediently after the time is done 
        return;
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    current.timerElement.innerHTML = `<div class='event-data'><h2 id='title'>${current.name}</h2><p id='content'>Days: ${days}, Hours: ${hours}, Minutes: ${minutes}, Seconds: ${seconds}</p></div>`;
}