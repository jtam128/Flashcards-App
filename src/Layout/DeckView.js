import React from "react";
import "../App.css";
import { FaHome, FaTrashAlt } from "react-icons/fa";
import { Link, Switch, Route } from "react-router-dom";
import Header from "./Header";


function DeckView() {
  return (
    <>
      <Header />
      {/* show the deck from the array */}
      <div>
        <nav aria-label="breadcrumb">
          <ul class="breadcrumb">
            <Link to="/"><li class="breadcrumb-item"><FaHome />Home</li></Link>
            <li class="breadcrumb-item">React Router</li>
          </ul>
        </nav>
      </div>
      <div>
        <div class="card-name">
          <h1>React Router</h1>
        </div>

        <div class="card-question">
          <p>React's component structure allows for quickly build a complex web application that relies on DOM
            manipulation</p>
        </div>
        <div class="deck-buttons-container">
          <div class="btn-group-left">
            <Link to="/deks/:deckId/edit"><button class="button-sm btn-normal" id="edit">Edit</button></Link>
            <Link to="/decks/:deckId/study"><button class="button-sm btn-normal" id="study">Study</button></Link>
            <Link to="/decks/:deckId/cards/new"><button class="button-sm btn-normal" id="cards">Add Cards</button></Link>

          </div>
          <div class="btn-group-right">
            <button class="button-sm btn-delete" id="trash"><FaTrashAlt /></button>
          </div>
        </div>
      </div>

      {/* show the cards from the deck */}
      <h1>Cards</h1>
      <div class="decks">
        <div class="row justify-content-center">
          <div class="column">
            <p>What path will match the follow Route?</p>
          </div>
          <div class="column">
            <p>All paths. A route with no path matches all URLs</p>
          </div>
        </div>
        <div class="deck-buttons-container">

          <div class="btn-group-right-view">
            <button class="button-sm btn-delete" id="edit">Edit</button>
            <button class="button-sm btn-delete" id="trash">Delete</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DeckView;