import React, { useState, useEffect } from "react";
import "../App.css";
import { Link, useParams, useHistory } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { createCard, readDeck } from "../utils/api";

function CardAdd() {
  const [front, setFront] = useState("");
  const [back, setBack] = useState("");
  const [card, setCard] = useState({});
  const [deck, setDeck] = useState({});


  const handleFrontChange = (event) => { setFront(event.target.value) }
  const handleBackChange = (event) => { setBack(event.target.value) }

  const params = useParams();
  const deckId = params.deckId;
  const cardId = Number(params.cardId);

  useEffect(() => {
    const abortController = new AbortController();
    readDeck(deckId, abortController.signal).then((deck) => {
      setFront(card.front)
      setBack(card.back)
      setCard(card)
      setDeck(deck)
    })
      .catch(err => {
        console.error(err.stack);
        console.error(err)
        alert(err)
      });

    return () => {
      abortController.abort();
    };
  }, [])

  const history = useHistory();


  const handleSave = async (event) => {
    event.preventDefault();
    const abortController = new AbortController();
    const card = {};
    card.front = front;
    card.back = back;
    await createCard(deckId, card, abortController.signal)

    setFront("");
    setBack("");
  }

  return (
    <>
      <div className="main-container">
        <nav class="breadcrumb-nav">
          <ul class="breadcrumb-list">
            <Link to="/">
              <li class="breadcrumbx-item">
                <FaHome />Home
                <span> / </span>
              </li>
            </Link>
            <li class="breadcrumb-item">{deck.name}</li>
            <li class="breadcrumb-item">Add Card</li>
          </ul>
        </nav>

        <div>
          <div class="card-name">
            <h1>{deck.name}: Add Card</h1>
          </div>

          <form onSubmit={handleSave}>
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
        </div>
      </div>
    </>
  )
}

export default CardAdd;
