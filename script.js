const currentTime = document.querySelectorAll("#current");
const pastTime = document.querySelectorAll("#past");

let data; // Declare a global variable

// Fetch data from the JSON file and assign it to the global variable
fetch("data.json")
    .then(response => response.json())
    .then(value => {
        data = value;
         // Check if the data is correctly assigned
    });

window.addEventListener("load",()=>{
    for (let i = 0; i < currentTime.length; i++) {
        currentTime[i].innerText=data[i].timeframes.daily.current+"hrs";
        pastTime[i].innerText="Last Week - "+data[i].timeframes.daily.previous+"hrs";
    }
    
})

document.querySelector("#Daily").addEventListener("click", () => {
    for (let i = 0; i < currentTime.length; i++) {
        currentTime[i].innerText=data[i].timeframes.daily.current+"hrs";
        pastTime[i].innerText="Last Week - "+data[i].timeframes.daily.previous+"hrs";
    }
    document.querySelector("#Daily").style.color="white";
    document.querySelector("#Weekly").style.color="hsl(236, 100%, 87%)";
    document.querySelector("#Monthly").style.color="hsl(236, 100%, 87%)";
    
    
});
document.querySelector("#Weekly").addEventListener("click", () => {
    for (let i = 0; i < currentTime.length; i++) {
        currentTime[i].innerText=data[i].timeframes.weekly.current+"hrs";
        pastTime[i].innerText="Last Week - "+data[i].timeframes.weekly.previous+"hrs";
    }
    document.querySelector("#Daily").style.color="hsl(236, 100%, 87%)";
    document.querySelector("#Weekly").style.color="white";
    document.querySelector("#Monthly").style.color="hsl(236, 100%, 87%)";
});
document.querySelector("#Monthly").addEventListener("click", () => {
    for (let i = 0; i < currentTime.length; i++) {
        currentTime[i].innerText=data[i].timeframes.monthly.current+"hrs";
        pastTime[i].innerText="Last Week - "+data[i].timeframes.monthly.previous+"hrs";
    }
    document.querySelector("#Daily").style.color="hsl(236, 100%, 87%)";
    document.querySelector("#Weekly").style.color="hsl(236, 100%, 87%)";
    document.querySelector("#Monthly").style.color="white";
});