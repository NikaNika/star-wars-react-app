import React from "react";
import Card from "../card/card";
import './cards.css'

function Cards({ cards }) {
  return (
    <div className="cards">
      {
        Array.isArray(cards) ? cards.map((el) => {
          return <Card hero={el} />
        }) : null
      }      
    </div>
  )
}

export default Cards;
