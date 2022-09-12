import PropTypes from 'prop-types'
import { Container } from './styles'

export const Button = ({
  title,
  color = 'primary',
  func,
  type = 'button',
  ...rest
}) => {
  return (
    <Container onClick={func} color={color} type={type}>
      {title}
    </Container>
  )
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
  func: PropTypes.func,
  type: PropTypes.string
}
