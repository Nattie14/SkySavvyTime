
function updateTime(){


//Harare
let harareElement = document.querySelector("#harare");
let harareDateElement = harareElement.querySelector(".date");
let harareTimeElement = harareElement.querySelector(".time");
let harareTime = moment().tz("Africa/Harare");

harareDateElement.innerHTML = harareTime.format("MMMM Do YYYY");
harareTimeElement.innerHTML = harareTime.format("h:mm:ss [<small>]A[</small>]");


//London
let londonElement = document.querySelector("#london");
let londonDateElement = londonElement.querySelector(".date");
let londonTimeElement = londonElement.querySelector(".time");
let londonTime = moment().tz("Europe/London");

londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
londonTimeElement.innerHTML = londonTime.format("h:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);