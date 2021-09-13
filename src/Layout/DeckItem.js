import React from "react";
import "../App.css";
import { FaPlus, FaRegEye, FaRegSave, FaTrashAlt } from "react-icons/fa";
import { Link, Switch, Route } from "react-router-dom";
import DeckMain from "./DeckMain";
// import { deleteDeck } from "./utils/api";

function DeckItem({ deck, deleteHandler }) {
  console.log(`in DeckItem`); // dbg..

  console.log(`deckitem deck :>> `, deck); // dbg..

  //map function here

  // window.open("Thanks")

  return (

    <div class="decks">

      <div class="card-name-number">
        <h2>{deck.name}</h2>
        <p>{deck.cards.length} cards</p>
        {/* <p><span>{deck.cards.length}</span> cards</p> */}
      </div>

      <div class="card-question">
        <p>{deck.description}</p>
      </div>

      <div class="deck-buttons-container">
        <div class="btn-group-left">
          <Link to="/decks/:deckId"><button class="button-sm btn-normal" id="view"><FaRegEye /> View</button></Link>
          <span />
          <Link to="/decks/:deckId/study"><button class="button-sm btn-normal" id="study"><FaRegSave /> Study</button></Link>
        </div>
        <div class="btn-group-right">
          <button class="button-sm btn-delete" id="trash" onClick={event => deleteHandler(deck)}><FaTrashAlt /></button>
        </div>
      </div>
    </div>

  );
}

export default DeckItem;