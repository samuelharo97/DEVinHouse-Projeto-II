import { Button, ButtonText, WhiteLayer } from '@components'
import PropTypes from 'prop-types'
import { Container } from './styles'

export const UserProfile = ({ user }) => {
  return (
    <WhiteLayer>
      <Container>
        <h3>Meu Perfil</h3>
        <div>
          <img src={user.url} alt="user profile pic" />
          <div>
            <h4>{user.name}</h4>
            <span>{`${user.email} - ${user.phone}`}</span>
          </div>
        </div>

        <div>
          <div>
        <section>Endereço</section>
            <span>{user.zipcode}</span>
            <span>{`${user.address} - ${user.addressNumber} - ${user.district} - ${user.city} - ${user.state}`}</span>
          </div>
        </div>
        <Button title={'EDITAR'} />
        <ButtonText title="Sair" />
      </Container>
    </WhiteLayer>
  )
}

UserProfile.propTypes = {
  user: PropTypes.shape({
    url: PropTypes.string,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string,
    zipcode: PropTypes.string,
    address: PropTypes.string.isRequired,
    district: PropTypes.string.isRequired,
    addressNumber: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired
  })
}
