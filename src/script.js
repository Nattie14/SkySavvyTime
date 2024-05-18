
function updateTime(){


//Harare
let harareElement = document.querySelector("#harare");
if (harareElement){
let harareDateElement = harareElement.querySelector(".date");
let harareTimeElement = harareElement.querySelector(".time");
let harareTime = moment().tz("Africa/Harare");

harareDateElement.innerHTML = harareTime.format("MMMM Do YYYY");
harareTimeElement.innerHTML = harareTime.format("h:mm:ss [<small>]A[</small>]");
}

//London
let londonElement = document.querySelector("#london");
if (londonElement){
let londonDateElement = londonElement.querySelector(".date");
let londonTimeElement = londonElement.querySelector(".time");
let londonTime = moment().tz("Europe/London");

londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
londonTimeElement.innerHTML = londonTime.format("h:mm:ss [<small>]A[</small>]");
}
}

function updateCity(event){
    let cityTimeZone = event.target.value;
    let cityName = cityTimeZone.replace("_"," ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone)
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
  <div>
      <h2>${cityName}</h2>
      <div class="date"> ${cityTime.format("MMMM Do YYYY")}</div>
  </div> 
  <div class="time"> ${cityTime.format("h:mm:ss")} <small> ${cityTime.format("A")}</small> </div>
</div>
  
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);

