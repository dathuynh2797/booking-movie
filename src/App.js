import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Login } from "./pages/Login";
import { HomeTemplate } from "./templates/HomeTemplates/HomeTemplate";
import { ModalTrailer } from "./components/ModalTrailer/ModalTrailer";

function App() {
  return (
    <>
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
                  <Route exact path="/login" component={Login} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </BrowserRouter>
      <ModalTrailer />
    </>
  );
}

export default App;
