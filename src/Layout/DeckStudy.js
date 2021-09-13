import React from "react";
import "../App.css";
import { FaHome, FaPlus, FaRegEye, FaRegSave, FaTrashAlt } from "react-icons/fa";
import { Link, Switch, Route } from "react-router-dom";

function DeckStudy({ deck }) {
  console.log(`deckstudy deck :>> `, deck); // dbg..


  //map function here

  return (
    <>
      <div>
        <nav aria-label="breadcrumb">
          <ul class="breadcrumb">
            <Link to="/"><li class="breadcrumb-item"><i class="fa fa-plus"></i><FaHome />Home</li></Link>
            <li class="breadcrumb-item"> Rendering In React</li>
            <li class="breadcrumb-item active" aria-current="page">Study</li>
          </ul>
        </nav>
      </div>

      <div class="decks">
        <div class="card-name">
          <h1>Study: Rendering in React</h1>
        </div>

        <div class="card-number">
          <h2>Card 1 of 3</h2>
        </div>

        <div class="card-question">
          <p>Differentiate between the DOM and the virtual DOM</p>
        </div>
        <div class="deck-buttons-container">
          <div class="btn-group-left">
            <button class="button-sm btn-normal" id="flip">Flip</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DeckStudy;