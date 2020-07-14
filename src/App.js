import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";

import { CSSTransition, TransitionGroup } from "react-transition-group";
// import { HomeTemplate } from "./templates/HomeTemplates/HomeTemplate";
import Test from "./pages/Test";
import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} timeout={500} classNames="page">
              <Switch location={location}>
                <Route exact path="/" component={Home} />
                <Route
                  exact
                  path="/movie-detail/:maPhim"
                  component={MovieDetail}
                />
                <Route exact path="/test" component={Test} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </BrowserRouter>
  );
}

export default App;
