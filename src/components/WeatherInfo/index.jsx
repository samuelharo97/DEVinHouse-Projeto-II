import { WhiteLayer } from '@components'
import { useEffect, useState } from 'react'
import { Container } from './styles'

const API_ID = import.meta.env.VITE_BASE_WEATHER_API_ID

export const WeatherInfo = () => {
  const [info, setInfo] = useState({})
  const [isFetched, setIsFetched] = useState(false)

  const getWeatherData = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=sao paulo,br&appid=${API_ID}&lang=pt_br&units=metric`
    )
      .then(res => res.json())
      .then(data => {
        setInfo(data)
        setIsFetched(true)
      })
  }

  useEffect(() => getWeatherData(), [])

  return isFetched ? (
    <WhiteLayer gridVariant="temperature" width="80%">
      <Container>
        <h3>
          {info.main.temp}
          <span>°C</span>
        </h3>
        <h5>{info.name + ', SP'}</h5>
        <p>{` Sensacão térmica: ${info.main.feels_like} - Máxima: ${info.main.temp_max} °C - Mínima: ${info.main.temp_min} °C - Umidade: ${info.main.humidity}%`}</p>
      </Container>
    </WhiteLayer>
  ) : (
    <WhiteLayer>
      <h1>Loading..</h1>
    </WhiteLayer>
  )
}

/* temp: data.main.temp,
   feelsLike: data.main.feels_like,
   minTemp: data.main.temp_min,
   maxTemp: data.main.temp_max,
   city: data.name */
