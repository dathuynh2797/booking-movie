import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { HomeTemplate } from "./templates/HomeTemplates/HomeTemplate";
import { ModalTrailer } from "./components/ModalTrailer/ModalTrailer";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import { Login } from "./pages/Login";
import { Booking } from "./pages/Booking";

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
                  <HomeTemplate
                    exact
                    path="/booking/:maLichChieu"
                    component={Booking}
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
