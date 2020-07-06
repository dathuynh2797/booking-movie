import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { HomeTemplate } from "./templates/HomeTemplates/HomeTemplate";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <HomeTemplate path="/" component={Home} exact />
        <HomeTemplate
          path="/movie-detail/:maPhim"
          component={MovieDetail}
          exact
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
