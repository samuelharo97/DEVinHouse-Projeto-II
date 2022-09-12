import PropTypes from 'prop-types'

import { Container } from './styles'

export const WhiteLayer = ({ children, top = '50px' }) => {
  return <Container variant={top}>{children}</Container>
}

WhiteLayer.propTypes = {
  children: PropTypes.node,
  top: PropTypes.string.isRequired
}
