import React from "react";
import "../App.css";
import { FaHome } from "react-icons/fa";
import { Link, useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { readDeck } from "../utils/api";

function DeckStudy() {
  const [card, setCard] = useState({});
  const [deck, setDeck] = useState({});
  const [cardId, setCardId] = useState(0);
  const [fliped, setFliped] = useState(false);
  const [notEnoughCards, setNotEnoughCards] = useState(false);

  const params = useParams();
  const deckId = params.deckId;
  console.log(1); // dbg..

  useEffect(() => {
    console.log(2)

    const abortController = new AbortController();
    readDeck(deckId, abortController.signal).then((deck) => {
      console.log(3)
      setCard(card)
      setDeck(deck)
      if (deck.cards.length <= 2)
        setNotEnoughCards(true)
    })
      // cur..

      .catch(err => {
        // console.log(`err :>> `, err); // dbg..
        alert("DeckStudy " + err)
      });

    return () => {
      abortController.abort();
    };
  }, [card, deckId])

  // if (!deck) return null;

  // shows current deck title
  function Line1() {
    if (fliped)
      return <h1 className="line1">{deck.name}: Study</h1>
    else
      return <h1 className="line1">Study: {deck.name}</h1>
  }

  //shows current card
  function Line2() {
    if (notEnoughCards)
      return <p className="line2 not-enough-card">Not enough cards.</p>
    else
      return <h2 className="line2">Card {cardId + 1} of {deck.cards.length}</h2>
  }

  function Content() {
    if (notEnoughCards)
      return <p className="content-not-enough-card">You need at least 3 cards to study. There are 2 cards in this deck.</p>
    if (fliped)
      return (
        <>
          <div>
            {console.log(`content fliped :>> `, fliped)}
          </div>
          <p className="content-normal">{deck.cards[cardId].back}</p>
        </>
      )
    else
      return (
        <>
          <div>
            {console.log(`content fliped :>> `, fliped)}
          </div>
          <p className="content-normal">{deck.cards[cardId]?.front}</p>
        </>
      )
  }

  const handleNextButton = (event) => {
    setFliped(false);

    if (deck.cards.length - 1 === cardId)
    {
      if (window.confirm('Restart cards?'))
      {
        setCardId(0)
        return
      } else
      {
        history.push("/");
        // return
      }
    }
    setCardId(cardId + 1)
  }

  function Buttons() {
    if (notEnoughCards)
      return <button className="button-sm btn-add" onClick={() => history.push(`/decks/${deck.id}/cards/new`)}>Add Cards</button>
    else
      if (fliped)
        return (
          <>
            <button className="button-sm btn-flip" onClick={() => setFliped(!fliped)}> Flip</button>
            <button className="button-sm btn-flip" onClick={handleNextButton}>Next</button>
          </>
        )
      else
        return <button className="button-sm btn-flip" onClick={() => setFliped(!fliped)}> Flip</button>

  }

  const history = useHistory();

  if (Object.keys(deck).length === 0)
    return null;
  else
  {
    return (
      <>
        <div>
          {console.log('in render')}
        </div>
        <div className="main-container">
          <nav className="breadcrumb-nav">
            <ul className="breadcrumb-list">
              <Link to="/">
                <li className="breadcrumbx-item">
                  <FaHome />Home
                  <span> / </span>
                </li>
              </Link>
              <li className="breadcrumbx-item">{deck.name}<span> / </span></li>
              <li className="breadcrumbx-item active" aria-current="page">Study</li>
            </ul>
          </nav>

          <div className="decks">
            <div className="card-name">
              <Line1 />
            </div>

            <div className="card-number">
              <Line2 />
            </div>

            <div className="card-question">
              <Content />
            </div>

            <div className="deck-buttons-container">
              <div className="btn-group-left">
                <Buttons />
              </div>
            </div>

          </div>
        </div>
      </>
    )
  }
}

export default DeckStudy;