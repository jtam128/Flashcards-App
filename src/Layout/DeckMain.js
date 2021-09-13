import React, { useEffect, useState } from "react";
// import "../App.css";
import { FaPlus, FaRegEye, FaRegSave, FaTrashAlt } from "react-icons/fa";
import { Link, Switch, Route } from "react-router-dom";
import DeckItem from "./DeckItem";
import DeckView from "./DeckView";
import { deleteDeck, listDecks } from "../utils/api";

function DeckMain() {
  const [decks, setDecks] = useState([]);
  const [cards, setCards] = useState({});
  console.log(`in DeckMain`); // dbg..

  //??? not sure how the flow is
  useEffect(() => {
    const abortController = new AbortController();
    listDecks(abortController.signal).then((decks) => {
      console.log(`useEffect decks :>> `, decks); // dbg..

      setDecks(decks)
    })
    return () => {
      abortController.abort();
    };
  }, [])


  async function processDelete(deck) {
    console.log(`option1`); // dbg..
    const abortController = new AbortController();
    console.log(`abortController :>> `, abortController); // dbg..


    await deleteDeck(deck.id, abortController.signal);

    await listDecks(abortController.signal).then((decks) => {
      console.log(`before listDecks decks :>> `, decks); // dbg..

      setDecks(decks)
      console.log(`after listDecks decks :>> `, decks); // dbg..


    })
  }

  const deleteHandler = (deck) => {
    console.log(`in deleteHandler`); // dbg..
    console.log(`deleteHandler deck :>> `, deck); // dbg..

    if (window.confirm('Are you sure you wish to delete this item?'))
    {
      processDelete(deck);
    }
  }

  const deckElement = decks.map((deck, index) => (
    < DeckItem deck={deck} deleteHandler={deleteHandler} key={index} />

  ))


  return (
    <>
      <div>
        {console.log("todolist")}
      </div>

      <div className="create-deck">
        {/* ??? should i use push() here */}
        <Link to="/decks/new"><button className="button-sm btn-normal" id="create"><FaPlus />
          Create Deck</button></Link>
      </div>
      {/* map function
use bracket notation to just get the decks
 */}
      {deckElement}

    </>
  );
}



export default DeckMain;