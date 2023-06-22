import React, { useState } from "react";
import Card from "./Card";
import _ from 'lodash';

function Cards(props) {

  const [clicked, setClicked] = useState([]);



  const cardClick = (name) => {
    if (clicked.includes(name)) {
      setClicked([]);
      props.endGame();
    } else {
      setClicked((clicked) => [
        ...clicked,
        name,
      ]);
      props.incrScore();
      
    }
  }

  
  
  let cardNames = ["Saturn", "Jupiter", "Neptune", "Earth", "Mars", "Mercury", "Venus", "Uranus"];
  let cards = [];
  cardNames.forEach(element => {
    cards.push(<Card name={element} onClick={() => cardClick(element)}/>);
    cards = _.shuffle(cards);
  });


  return <div id="allCards">{cards}</div>;
}

export default Cards;