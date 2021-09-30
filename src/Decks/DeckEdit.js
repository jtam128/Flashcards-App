import React, { useState, useEffect } from "react";
import "../App.css";
import { Link, useParams, useHistory } from "react-router-dom";
import { updateDeck, readDeck } from "../utils/api";
import { FaHome } from "react-icons/fa";

function DeckEdit() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [deck, setDeck] = useState({});

  const handleNameChange = (event) => { setName(event.target.value) }

  const handleDescriptionChange = (event) => { setDescription(event.target.value) }

  const params = useParams();
  const deckId = params.deckId;

  useEffect(() => {
    const abortController = new AbortController();
    readDeck(deckId, abortController.signal).then((deck) => {
      setName(deck.name)
      setDescription(deck.description)
      setDeck(deck)
    })
      .catch(err => {
        alert(err)
      });

    return () => {
      abortController.abort();
    };
  }, [deckId])

  const history = useHistory();

  const handleSubmit = async (event) => {

    event.preventDefault();

    const abortController = new AbortController();

    const updatedDeck = await updateDeck({ ...deck, name: name, description: description }, abortController.signal)

    setName("");
    setDescription("");
    history.push(`/decks/${deck.id}`);
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
            <li className="breadcrumb-item">{deck.name}</li>
            <li className="breadcrumb-item">Edit Deck</li>
          </ul>
        </nav>

        <div>
          <div className="card-name">
            <h1>Edit Deck</h1>
          </div>


          <form onSubmit={handleSubmit}>
            <div className="card-number">
              <h2>Name</h2>
              <input type="text" id="deckname" name="deckname" placeholder="Deck Name" onChange={handleNameChange} value={name} />
              <h2>Description</h2>
              <textarea id="description" name="deckdescription" rows="4" cols="50" placeholder="Brief description of the deck" onChange={handleDescriptionChange} value={description}></textarea>
            </div>
            <div className="deck-buttons-container">
              <div className="btn-group-left">
                <button class="button-sm btn-cancel" onClick={() => history.push(`/decks/${deck.id}`)}>Cancel</button>
                <button className="button-sm btn-submit">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default DeckEdit;