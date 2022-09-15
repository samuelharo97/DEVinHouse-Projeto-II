import { WeatherInfo, ListSelectedDevices } from '@components'
import { axiosGetDevices } from '@services'
import { useEffect, useState } from 'react'
import { Container, Filter, Footer } from './styles'

export const Home = () => {
  const [devices, setDevices] = useState([])
  /* const getDevices = axiosGetDevices().then(res => setDevices(res))
   */

  return (
    <Container>
      <WeatherInfo />
      <Filter />
      {devices.length > 0 ? (
        <ListSelectedDevices products={devices} />
      ) : (
        'loading'
      )}
      <Footer />
    </Container>
  )
}
