import React, { useState, useEffect } from "react";
import "../App.css";
import { Link, useParams, useHistory } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { updateCard, readDeck } from "../utils/api";

function CardEdit() {
  const [front, setFront] = useState("");
  const [back, setBack] = useState("");
  const [card, setCard] = useState({});
  const [deck, setDeck] = useState({});

  const handleFrontChange = (event) => {
    const front = event.target.value;
    setFront(front)
  }

  const handleBackChange = (event) => { setBack(event.target.value) }


  const params = useParams();
  const deckId = params.deckId;
  const cardId = Number(params.cardId);

  useEffect(() => {

    const abortController = new AbortController();
    readDeck(deckId, abortController.signal).then((deck) => {
      const card = deck.cards.find(card => card.id === cardId);
      setFront(card.front)
      setBack(card.back)
      setCard(card)
      setDeck(deck)
    })
      .catch(err => {
        alert(err)
      });

    return () => {
      abortController.abort();
    };
  }, [])


  const history = useHistory();

  const handleSubmit = async (event) => {

    event.preventDefault();
    const abortController = new AbortController();

    const updatedCard = await updateCard({ ...card, front: front, back: back }, abortController.signal)

    setFront("");
    setBack("");
    history.push(`/decks/${deck.id}`);

  }

  return (
    <>
      <div>
        {console.log(`inside render jsx`)}
      </div>
      <div className="main-container">
        <nav class="breadcrumb-nav">
          <ul class="breadcrumb-list">
            <Link to="/">
              <li class="breadcrumbx-item">
                <FaHome />Home
                <span> / </span>
              </li>
            </Link>
            <li class="breadcrumbx-item">Deck {deck.name}<span> / </span></li>

            <li class="breadcrumbx-item">Edit Card {card.id}</li>
          </ul>
        </nav>

        <div>
          <div class="card-name">
            <h1>Edit Card</h1>
          </div>

          <form onSubmit={handleSubmit}>
            <div class="card-number">

              <h2>Front</h2>
              <textarea id="w3review" name="w3review" rows="4" cols="50"
                placeholder="Enter card Front information" onChange={handleFrontChange} value={front}></textarea>

              <h2>Back</h2>
              <textarea id="w3review" name="w3review" rows="4" cols="50" placeholder="Enter card Back information" onChange={handleBackChange} value={back}></textarea>
            </div>

            <div class="deck-buttons-container">
              <div class="btn-group-left">

                <button class="button-sm btn-cancel" onClick={() => history.push(`/decks/${deck.id}`)}>Cancel</button>
                <button class="button-sm btn-submit">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
export default CardEdit;