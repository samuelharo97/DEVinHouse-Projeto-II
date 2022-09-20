import { AddDeviceCard, WhiteLayer } from '@components'
import { yupResolver } from '@hookform/resolvers/yup'
import { useAxios } from '@hooks'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Container, List } from './styles'



export const DeviceList = () => {
  const [devices, setDevices] = useState([])
  const [locations, setLocations] = useState([])
  const { axiosGetDevices, axiosGetLocations } = useAxios()

  useEffect(() => {
    axiosGetDevices().then(res => setDevices(res))
    axiosGetLocations().then(res => setLocations(res))
  }, [])


  return (
    <Container>
      {devices ? (
        <List>
          {devices.map(device => (
            <AddDeviceCard
              key={device._id}
              device={device}
              locations={locations}
            />
          ))}
        </List>
      ) : (
        <WhiteLayer>
          <h3>LOADING...</h3>
        </WhiteLayer>
      )}
    </Container>
  )
}
