import React, { Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";

import { CSSTransition, TransitionGroup } from "react-transition-group";
import Header from "./components/Header/Header";
import { Login } from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <Header />
            <CSSTransition key={location.key} timeout={500} classNames="page">
              <Fragment>
                <Switch location={location}>
                  <Route exact path="/" component={Home} />
                  <Route
                    exact
                    path="/movie-detail/:maPhim"
                    component={MovieDetail}
                  />
                  <Route exact path="/login" component={Login} />
                </Switch>
              </Fragment>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </BrowserRouter>
  );
}

export default App;
