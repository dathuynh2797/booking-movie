import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";

import { CSSTransition, TransitionGroup } from "react-transition-group";
import { HomeTemplate } from "./templates/HomeTemplates/HomeTemplate";

function App() {
  return (
    <BrowserRouter>
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} timeout={500} classNames="page">
              <Switch location={location}>
                <HomeTemplate exact path="/" component={Home} />
                <HomeTemplate
                  exact
                  path="/movie-detail/:maPhim"
                  component={MovieDetail}
                />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </BrowserRouter>
  );
}

export default App;
