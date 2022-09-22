import { Loading, WhiteLayer } from '@components';
import { useAuth } from '@contexts';
import { useEffect, useState } from 'react';
import { Container } from './styles';

const API_ID = import.meta.env.VITE_BASE_WEATHER_API_ID;

/* const DummyData = {
  main: { temp: '08,5', feels_like: '05,6', temp_max: '09,4', temp_min: '04,4', humidity: '98' },
  name: 'São Paulo'
}; */

export const WeatherInfo = () => {
  const [info, setInfo] = useState({});
  const [isFetched, setIsFetched] = useState(false);
  const { user } = useAuth();

  const getWeatherData = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${user.userAddress.city},br&appid=${API_ID}&lang=pt_br&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        setInfo(data);
        console.log(data);
        setIsFetched(true);
      });

    /*    setInfo(DummyData);
    setIsFetched(true); */
  };

  useEffect(() => {
    console.log('rendered weather');
    getWeatherData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isFetched ? (
    <WhiteLayer gridVariant="temperature">
      <Container>
        <h3>
          {info.main.temp.toFixed(0)}
          <span>°C</span>
        </h3>
        <h5>{info.name + `, ${user.userAddress.state}`}</h5>
        <div>
          <p>Sensacão térmica: {info.main.feels_like.toFixed(1)}°C</p>
          <p> Máxima: {info.main.temp_max.toFixed(1)}°C </p>
          <p> Mínima: {info.main.temp_min.toFixed(1)}°C</p> <p> Umidade: {info.main.humidity}% </p>
        </div>
      </Container>
    </WhiteLayer>
  ) : (
    <WhiteLayer>
      <Container>
        <Loading />
      </Container>
    </WhiteLayer>
  );
};

/* temp: data.main.temp,
   feelsLike: data.main.feels_like,
   minTemp: data.main.temp_min,
   maxTemp: data.main.temp_max,
   city: data.name */
