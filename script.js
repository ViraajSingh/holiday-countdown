let targetDate;
let days, hours, minutes, seconds;
let party;

document.addEventListener("DOMContentLoaded", () => {
    party = document.getElementById("help").value; // Define the party variable
});

function trigger(){
    targetDate = new Date(document.getElementById("date").value); 
    console.log(targetDate)   
    updateCountdown()
    creation("div", document.getElementById("box-container"), {id: "one"})
    creation("h2", document.getElementById("one"), {}, `Event: ${party}`)
    creation("p", document.getElementById("one"), {}, `Days: ${days}, Hours: ${hours}, Minutes: ${minutes}, Seconds: ${seconds}`)//add a strign literal to this


    // creation("div", document.getElementById("box-container"), {id: "two"})
    // creation("h2", document.getElementById("two"), {}, `Event: ${party}`)
    // creation("p", document.getElementById("two"), {}, `Days: ${days}, Hours: ${hours}, Minutes: ${minutes}, Seconds: ${seconds}`)//add a strign literal to this  
 

}   
// document.getElementById("triggerButton").addEventListener("click", () => {
//     trigger();
// });

const creation = (tag, parent, attributes = {}, content = "") => {
    const element = document.createElement(tag); 
    Object.keys(attributes).forEach(key => element.setAttribute(key, attributes[key]));
    element.innerHTML = content;
    parent.appendChild(element);
    return element;
}

function updateCountdown(){

    const now = new Date(); // Current Date 
    const timeDifference = targetDate - now; // Difference IN MILLISECONDS between current and target date 
    if(timeDifference <= 0){
        document.getElementById("time").innerHTML = "THE TIME SHALL COME";
        clearInterval(end); // Stop the timer when the target date is reached 
        return;
    }
    if (timeDifference === 0) {
        alert(`Your "${party}" is done` )
    }

    // Calculate the remaining time components 
     days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
     hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
     seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById("time").innerText = `Days: ${days}, Hours: ${hours}, Minutes: ${minutes}, Seconds: ${seconds}`;


}

const end = setInterval(updateCountdown,1000)

updateCountdown()


