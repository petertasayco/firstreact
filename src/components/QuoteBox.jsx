import React from 'react'
import Button from './Button'


const QuoteBox = ({randomElement, randomColor,getRandomAll}) => {

  const colorObj= {
    color: randomColor

  }
  

  return (
    <article style={colorObj} className='quote'>
        <p className='card_quote'>{randomElement.quote}</p>
        <h1 className='card_author'>{randomElement.author}</h1>
        <Button
          getRandomAll={getRandomAll}
        />
    </article>
  )
}

export default QuoteBox