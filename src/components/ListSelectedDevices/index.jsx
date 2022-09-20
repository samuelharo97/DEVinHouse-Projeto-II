import { Card } from '@components'
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import { Container, List } from './styles'

export const ListSelectedDevices = ({ products }) => {
  const [selectedCardId, setSelectedCardId] = useState([])



  useEffect(() => console.log(selectedCardId), [selectedCardId])

  return (
    <Container>
      <List>
        {products.map(product => (
          <Card
            key={product._id}
            product={product}
            isSelected={product.is_on}
          />
        ))}
      </List>
    </Container>
  )
}

ListSelectedDevices.propTypes = {
  products: PropTypes.array.isRequired
}
