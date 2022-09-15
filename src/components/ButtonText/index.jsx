import PropTypes from 'prop-types'
import { Text } from './styles'
export const ButtonText = ({ title, routeTo }) => {
  return <Text to={routeTo}>{title}</Text>
}

ButtonText.propTypes = {
  title: PropTypes.string.isRequired,
  routeTo: PropTypes.string
}
