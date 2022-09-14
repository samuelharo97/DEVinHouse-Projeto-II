import { Card } from '@components'
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import { Container, List } from './styles'

export const ListSelectedDevices = ({ products }) => {
  const [selectedCardId, setSelectedCardId] = useState([])

  const handleSelected = clickedId => {
    if (selectedCardId.includes(clickedId)) {
      setSelectedCardId(selectedCardId.filter(id => id !== clickedId))
    } else {
      setSelectedCardId([...selectedCardId, clickedId])
    }
  }

  useEffect(() => console.log(selectedCardId), [selectedCardId])

  return (
    <Container>
      <List>
        {products.map(product => (
          <Card
            key={product._id}
            device={product}
            isSelected={selectedCardId.includes(product._id)}
            onSelect={() => handleSelected(product._id)}
          />
        ))}
      </List>
    </Container>
  )
}

ListSelectedDevices.propTypes = {
  products: PropTypes.array.isRequired
}
