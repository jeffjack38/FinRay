import React from 'react'
import "./Card.css"

interface Props {
    companyName: string;
    ticker: string;
    price: number;
}

const Card = ({ companyName, ticker, price }: Props) => {
  return (
    <div className="card">
        <p>Cool Image</p>
    <div className="details">
        <h2>{companyName} ({ticker})</h2>
        <p>${price}</p>
        </div>
        <p className='info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, consequatur?
        </p>
    </div>
  )
}

export default Card