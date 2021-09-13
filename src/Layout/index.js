import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import DeckCreate from "./DeckCreate";
import DeckView from "./DeckView";
import DeckStudy from "./DeckStudy";
import NotFound from "./NotFound";

// import "./App.css";

/**
 * App is a wrapper for <Layout>, you should not need to change this file.
 */
// put the route tag in your parent component
function Layout() {
  return (
    <div className="app-routes">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/decks/new">
          <DeckCreate />
        </Route>

        <Route exact path="/decks/:deckId">
          <DeckView />
        </Route>

        <Route path="/decks/:deckId/study">
          <DeckStudy />
        </Route>

        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default Layout;
