import React from "react";
import "../App.css";
import { FaRegEye, FaTrashAlt } from "react-icons/fa";
// import { FaPlus, FaRegEye, FaRegSave, FaTrashAlt } from "react-icons/fa";
import { Link, useHistory } from "react-router-dom";

function CardForm({ handleSubmit, handleFrontChange, front, handleBackChange, back, deck }) {

  const history = useHistory();
  return (
    <>

      <form onSubmit={handleSubmit}>
        <div class="card-number">
          <h2>Front</h2>
          <textarea id="w3review" name="w3review" rows="4" cols="50" placeholder="Front side of card" onChange={handleFrontChange} value={front}></textarea>
          <h2>Back</h2>
          <textarea id="w3review" name="w3review" rows="4" cols="50" placeholder="Back side of card" onChange={handleBackChange} value={back}></textarea>
        </div>

        <div class="deck-buttons-container">
          <div class="btn-group-left">
            <button class="button-sm btn-done" onClick={() => history.push(`/decks/${deck.id}`)}>Done</button>
            <button class="button-sm btn-save">Save</button>
          </div>
        </div>
      </form>



    </>
  )
}

export default CardForm;