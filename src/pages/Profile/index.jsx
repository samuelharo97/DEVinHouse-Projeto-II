import { UserProfile } from '@components'
import { Container } from './styles'

const testObject = {
  name: 'Samuel Haro',
  url: 'https://github.com/samuelharo97.png',
  phone: '(64)99801-3934',
  email: 'samuel.hm@hotmail.com',
  zipcode: '16516-000',
  address: 'Rua da minha casa',
  addressNumber: '250',
  city: 'Cidade',
  state: 'SP',
  district: 'Centro'
}

export const MyProfile = () => {
  return (
    <Container>
      <UserProfile user={testObject} />
    </Container>
  )
}
