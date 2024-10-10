document.getElementById('weatherForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const apiKey = '7221c925d66919a6657f8daf9cff2d44'; 
    const city = document.getElementById('cityInput').value;
    
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        if (data.cod === 200) {
            document.getElementById('weatherCity').textContent = data.name;
            document.getElementById('weatherDescription').textContent = data.weather[0].description;
            document.getElementById('weatherTemp').textContent = data.main.temp;
            document.getElementById('weatherHumidity').textContent = data.main.humidity;
        } else {
            alert('City not found. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        alert('Failed to retrieve weather information.');
    });
});
