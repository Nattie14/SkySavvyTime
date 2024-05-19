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

let cityInterval;

function updateCity(event) {
    clearInterval(cityInterval); // Clear previous interval if any
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess();
    }

    const cityDetails = {
        "Africa/Harare": { name: "Harare", flag: "🇿🇼" },
        "Europe/London": { name: "London", flag: "🇬🇧" },
        "America/Toronto": { name: "Toronto", flag: "🇨🇦" },
        "Asia/Tokyo": { name: "Tokyo", flag: "🇯🇵" },
        "Europe/Paris": { name: "Paris", flag: "🇫🇷" },
        "Asia/Dubai": { name: "Dubai", flag: "🇦🇪" },
        "America/Mexico_City": { name: "Mexico City", flag: "🇲🇽" },
    };

    let cityName, cityFlag;

    if (cityTimeZone === moment.tz.guess()) {
        let guessedCity = Object.keys(cityDetails).find(zone => zone === cityTimeZone);
        if (guessedCity) {
            cityName = cityDetails[guessedCity].name;
            cityFlag = cityDetails[guessedCity].flag;
        } else {
            cityName = "Current Location";
            cityFlag = "";
        }
    } else {
        cityName = cityDetails[cityTimeZone]?.name || cityTimeZone.replace("_", " ").split("/")[1];
        cityFlag = cityDetails[cityTimeZone]?.flag || "";
    }

    let citiesElement = document.querySelector("#cities");

    function updateSelectedCityTime() {
        let cityTime = moment().tz(cityTimeZone);
        citiesElement.innerHTML = `
        <div class="city">
            <div>
                <h2>${cityName} ${cityFlag}</h2>
                <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
            </div>
            <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div>
        </div>
        `;

        // Show the button when a city is selected
        let backButton = document.getElementById("backToMain");
        backButton.style.display = "block";
        backButton.addEventListener("click", function() {
            window.location.href = "index.html"; // Replace with your home page URL
        });
    }

    updateSelectedCityTime();
    cityInterval = setInterval(updateSelectedCityTime, 1000);
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
