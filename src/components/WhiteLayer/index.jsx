import PropTypes from 'prop-types'

import { Container } from './styles'

export const WhiteLayer = ({ children }) => {
  return <Container>{children}</Container>
}

WhiteLayer.propTypes = {
  children: PropTypes.node
}
