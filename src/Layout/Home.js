import React from "react";
import DeckMain from "./DeckMain";
import Header from "./Header";
import NotFound from "./NotFound";
import { Switch } from "react-router-dom";
// import DeckCreate from "../Layout/DeckCreate";


function Home() {
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Switch>
          <DeckMain />

          {/* <Route exact path="/decks/new">
            <DeckCreate />
          </Route> */}
          <NotFound />


        </Switch>
      </div>
    </ React.Fragment>
  );
}

export default Home;
