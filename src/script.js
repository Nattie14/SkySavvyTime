function updateTime() {
    // Harare
    let harareElement = document.querySelector("#harare");
    if (harareElement) {
        let harareDateElement = harareElement.querySelector(".date");
        let harareTimeElement = harareElement.querySelector(".time");
        let harareTime = moment().tz("Africa/Harare");

        harareDateElement.innerHTML = harareTime.format("MMMM Do YYYY");
        harareTimeElement.innerHTML = harareTime.format("h:mm:ss [<small>]A[</small>]");
    }

    // London
    let londonElement = document.querySelector("#london");
    if (londonElement) {
        let londonDateElement = londonElement.querySelector(".date");
        let londonTimeElement = londonElement.querySelector(".time");
        let londonTime = moment().tz("Europe/London");

        londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
        londonTimeElement.innerHTML = londonTime.format("h:mm:ss [<small>]A[</small>]");
    }

    // Mexico City
    let mexicoCityElement = document.querySelector("#Mexico_City");
    if (mexicoCityElement) {
        let mexicoCityDateElement = mexicoCityElement.querySelector(".date");
        let mexicoCityTimeElement = mexicoCityElement.querySelector(".time");
        let mexicoCityTime = moment().tz("America/Mexico_City");
        mexicoCityDateElement.innerHTML = mexicoCityTime.format("MMMM Do YYYY");
        mexicoCityTimeElement.innerHTML = mexicoCityTime.format("h:mm:ss [<small>]A[</small>]");
    }
}

function updateCity(event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess();
    }

    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let flag = getFlagEmoji(cityTimeZone);
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
    <div class="city">
        <div>
            <h2>${cityName} ${flag}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div>
    </div>
    `;

    setInterval(() => {
        cityTime = moment().tz(cityTimeZone);
        citiesElement.querySelector(".date").innerHTML = cityTime.format("MMMM Do YYYY");
        citiesElement.querySelector(".time").innerHTML = cityTime.format("h:mm:ss [<small>]A[</small>]");
    }, 1000);
}

function getFlagEmoji(timezone) {
    const flags = {
        "Africa/Harare": "🇿🇼",
        "Europe/London": "🇬🇧",
        "America/Mexico_City": "🇲🇽",
        "America/Toronto": "🇨🇦",
        "Asia/Tokyo": "🇯🇵",
        "Europe/Paris": "🇫🇷",
        "Asia/Dubai": "🇦🇪"
    };
    return flags[timezone] || "";
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);

// Redirect back to main page
let backButton = document.getElementById("backToMain");
backButton.addEventListener("click", function() {
    window.location.href = "index.html"; // Change 'index.html' to your main page's URL
});
