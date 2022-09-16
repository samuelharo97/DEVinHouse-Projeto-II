import { AddDeviceCard } from '@components'
/* import { axiosGetDevices } from '@services'
 */import { useEffect, useState } from 'react'
import { Container, List } from './styles'

export const DeviceList = () => {
  const [devices, setDevices] = useState([])

 /*  useEffect(() => {
    const getDevices = axiosGetDevices().then(res => setDevices(res))
  }, []) */

  return (
    <Container>
      <List>
        {devices.map(device => (
          <AddDeviceCard key={device._id} device={device} />
        ))}
      </List>
    </Container>
  )
}
