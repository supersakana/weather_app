async function callApi() {
  try {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=virginia+beach&appid=e7775dd9f2432256b7d57eb357896009', { mode: 'cors' });
    const data = await response.json();
    console.log(data);
    document.body.append(`${data.name}, ${data.weather[0].main}, Current: ${data.main.temp}, High: ${data.main.temp_max}, Low: ${data.main.temp_min}`);
  } catch {
    return 'Invalid search';
  }
}

export default callApi;

// e7775dd9f2432256b7d57eb357896009
