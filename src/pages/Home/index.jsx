import { WeatherInfo, ListSelectedDevices, WhiteLayer } from '@components'
/* import { axiosGetDevices, axiosGetLocations } from '@services'
 */import { useEffect, useState } from 'react'
import { Container, Filter, Footer, Loading } from './styles'


export const Home = () => {

  const [devices, setDevices] = useState([])
  /* const getDevices = axiosGetDevices().then(res => setDevices(res))
   */

  /* console.log(axiosGetLocations()) */

  return (
    <Container>
      <WeatherInfo />
      <Filter />
      {devices.length > 0 ? (
        <ListSelectedDevices products={devices} />
      ) : (
        <WhiteLayer>
          <Loading>
            <h3> Adicione algum dispositivo </h3>
          </Loading>
        </WhiteLayer>
      )}
      <Footer />
    </Container>
  )
}
