import React, { useState } from "react";
import "../App.css";
import { FaHome } from "react-icons/fa";
import { Link, Switch, Route } from "react-router-dom";
import Header from "./Header";
import { createDeck } from "../utils/api";
import { useHistory } from "react-router-dom";

function DeckCreate() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const handleNameChange = (event) => setName(event.target.value);
  const handleDescriptionChange = (event) => setDescription(event.target.value);
  //add submit handler here and inside of it, get the name and description. From that description, figure our what the id would be. put that in the deck object and call createDeck. Once you create it, you 
  //add 
  console.log(`current value of name :>> `, name); // dbg..
  console.log(`current value of description :>> `, description); // dbg..


  const history = useHistory();
  const handleSubmit = (event) => {
    console.log(`event :>> `, event); // dbg..

    event.preventDefault();
    console.log(`submitted name, description :>> `, name, description); // dbg..
    const abortController = new AbortController();
    const deck = {};
    deck.name = name;
    deck.description = description;
    // ???should i use await here 
    createDeck(deck, abortController.signal).then((deck) => {

      console.log(`createDeck deck :>> `, deck); // dbg..
    })
    setName("");
    setDescription("");
    history.push("/");
  }


  return (
    <>
      <Header />

      <div className="container">
        <nav aria-label="breadcrumb">
          <ul class="breadcrumb">
            <Link to="/">
              <li class="breadcrumb-item">
                <FaHome />Home
              </li>
            </Link>
            <li class="breadcrumb-item">Create Deck</li>
          </ul>
        </nav>

        <div class="card-name">
          <h1>Create Deck</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div class="card-number">
            <h2>Name</h2>
            <input type="text" id="deckname" name="deckname" placeholder="Deck Name" onChange={handleNameChange} value={name} />
            <h2>Description</h2>
            <textarea id="description" name="deckdescription" rows="4" cols="50" placeholder="Brief description of the deck" onChange={handleDescriptionChange} value={description}></textarea>
          </div>

          <div class="deck-buttons-container">
            <div class="btn-group-left">

              <button class="button-sm btn-normal" id="cancel" type="cancel">Cancel</button>
              <button class="button-sm btn-normal" id="submit" type="submit">Submit</button>

            </div>
          </div>

        </form>
      </div>


    </>
  );
}

export default DeckCreate;