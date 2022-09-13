import PropTypes from 'prop-types'

import { Container } from './styles'

export const WhiteLayer = ({
  children,
  width = 'fit-content',
  variant = 'content'
}) => {
  return (
    <Container variant={variant} width={width}>
      {children}
    </Container>
  )
}

WhiteLayer.propTypes = {
  children: PropTypes.node,
  width: PropTypes.string,
  variant: PropTypes.string
}
