import PropTypes from 'prop-types'
import { Text } from './styles'
export const ButtonText = ({ title }) => {
  return <Text>{title}</Text>
}

ButtonText.propTypes = {
  title: PropTypes.string.isRequired
}
