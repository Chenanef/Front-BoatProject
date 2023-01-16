import React, { useState, useEffect } from 'react'

const CardCarousel = () => {
  const [currentCard, setCurrentCard] = useState(0)
  const cards = [
    {
      title: 'Card 1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.'
    },
    {
      title: 'Card 2',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.'
    },
    {
      title: 'Card 3',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.'
    }
  ]

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentCard((currentCard + 1) % cards.length)
    }, 6000)
    return () => clearInterval(intervalId)
  }, [currentCard])

  return (
    <div>
      <h2>{cards[currentCard].title}</h2>
      <p>{cards[currentCard].content}</p>
    </div>
  )
}

export default CardCarousel
