async function callApi(city) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e7775dd9f2432256b7d57eb357896009`, { mode: 'cors' });
    const data = await response.json();
    return data;
  } catch {
    return 'Invalid search';
  }
}

export default callApi;

// e7775dd9f2432256b7d57eb357896009
