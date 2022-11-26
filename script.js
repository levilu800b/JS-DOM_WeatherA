window.addEventListener('load', function () {
	let long;
	let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone');

	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition((position) => {
			long = position.coords.longitude;
			lat = position.coords.latitude;

            // API call from OpenWeatherMap to get weather data
            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=1a6ef8297115d4743cce36a3b48dbc3b`;

            fetch(api)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    console.log(data);
                    const {temperature, summary, icon} = data.currently;
                });
		});
	}
});
