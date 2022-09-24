import { Loading, WhiteLayer } from '@components';
import { useAuth } from '@contexts';
import { getWeatherData } from '@services';
import { useEffect, useState } from 'react';
import { Container } from './styles';

export const WeatherInfo = () => {
  const [info, setInfo] = useState({});
  const [isFetched, setIsFetched] = useState(false);
  const { user } = useAuth();

  
  const fetchWeather = () => {
    getWeatherData(user.userAddress.city)
      .then((res) => res.json())
      .then((data) => {
        setInfo(data);
        setIsFetched(true);
      });
  };

  useEffect(() => fetchWeather(), []);

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
