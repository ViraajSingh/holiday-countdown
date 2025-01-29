
    let targetDate;
    let days, hours, minutes, seconds;
    let party;
    let end;
    let timers = [];

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
    }

    function updateCountdown(current) {
        const now = new Date();
        const timeDifference = new Date(current.targetDate) - now;

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        current.timerElement.innerHTML = `<div class='event-data'><h2 id='title'>${current.name}</h2><p id='content'>Days: ${days}, Hours: ${hours}, Minutes: ${minutes}, Seconds: ${seconds}</p></div>`;
    }