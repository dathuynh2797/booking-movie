import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { HomeTemplate } from "./templates/HomeTemplates/HomeTemplate";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import Header from "./components/Header/Header";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const routes = [
  { path: "/", name: "Home", Component: Home },
  {
    path: "/movie-detail/:maPhim",
    name: "MovieDetail",
    Component: MovieDetail,
  },
];

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
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </BrowserRouter>
  );
}

export default App;
