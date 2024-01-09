const key = "dnG9gwgfdAPGccvDewDcCqGa5qa1p9xA";

// weather information

const getWeather = async (id) => {
  const base = "http://dataservice.accuweather.com/currentconditions/v1";
  const query = `${id}?apikey=${key}`;

  const response = await fetch(base + query);
  const data = await response.json();

  return data;
};

// City information
const getCity = async (city) => {
  const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apikey=${key}&q=${city}`;

  const response = await fetch(base + query);
  if (response.status !== 200) {
    throw new Error(response.statusText);
  }
  const data = await response.json();

  return data[0];
};

getCity("accra")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err.message);
  });
