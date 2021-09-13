import React from "react";
import "../App.css";
import { FaHome } from "react-icons/fa";
import { Link, Switch, Route } from "react-router-dom";
import Header from "./Header";


function DeckCreate() {
  return (
    <>
      <Header />
      <div>
        <nav aria-label="breadcrumb">
          <ul class="breadcrumb">
            <Link to="/"><li class="breadcrumb-item"><FaHome />Home</li></Link>
            <li class="breadcrumb-item">Create Deck</li>
          </ul>
        </nav>
      </div>
      <div>
        <div class="card-name">
          <h1>Create Deck</h1>
        </div>

        <div class="card-number">
          <h2>Name</h2>
          <input type="text" id="deckname" name="deckname" placeholder="Deck Name" />
          <h2>Description</h2>
          <textarea id="w3review" name="w3review" rows="4" cols="50" placeholder="Brief description of the deck"></textarea>
        </div>
        <div class="deck-buttons-container">
          <div class="btn-group-left">
            <Link to="/"><button class="button-sm btn-normal" id="cancel">Cancel</button></Link>
            <Link to="/decks/:deckId"><button class="button-sm btn-normal" id="submit">Submit</button></Link>
          </div>
        </div>
      </div>


    </>
  );
}

export default DeckCreate;