import { AddDeviceCard, WhiteLayer } from '@components'
import { useAxios } from '@hooks'
import { useEffect, useState } from 'react'
import { Container, List } from './styles'

export const DeviceList = () => {
  const [devices, setDevices] = useState([])
  const { axiosGetDevices } = useAxios()

  useEffect(() => {
    axiosGetDevices().then(res => setDevices(res))
  })

  return (
    <Container>
      {devices ? (
        <List>
          {devices.map(device => (
            <AddDeviceCard key={device._id} device={device} />
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
