import PropTypes from 'prop-types'

import { Container } from './styles'

export const WhiteLayer = ({
  children,
  width = 'fit-content',
  gridVariant = 'content',
  pad = '48px',
  ...rest
}) => {
  return (
    <Container pad={pad} variant={gridVariant} width={width}>
      {children}
    </Container>
  )
}

WhiteLayer.propTypes = {
  children: PropTypes.node,
  width: PropTypes.string,
  pad: PropTypes.string,
  gridVariant: PropTypes.string
}
