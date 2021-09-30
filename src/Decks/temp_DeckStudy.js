import React from "react";
import "../App.css";
import { FaHome } from "react-icons/fa";
import { Link, useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { readDeck } from "../utils/api";

function DeckStudy() {

  return (
    <>
      <p>Mock Study Deck 13</p>
      <p>Not enough cards</p>

    </>
  )
}

export default DeckStudy;