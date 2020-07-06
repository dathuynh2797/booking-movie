import React, { Fragment, useState, useEffect } from "react";

import Card from "../components/Card/Card";
import Slider from "react-slick";
import { settingSlider } from "../settings/config";
import { movieService } from "../services/MovieService";

const Home = () => {
  const [listMovie, setListMovie] = useState();

  useEffect(() => {
    movieService
      .getMovie()
      .then((res) => {
        console.log(res.data);
        setListMovie(res.data);
      })
      .catch((err) => console.log(err.response.data));
  }, []);

  const renderMovie = () => {
    return listMovie?.map((movie, index) => <Card key={index} movie={movie} />);
  };

  return (
    <Fragment>
      <Slider {...settingSlider}>{renderMovie()}</Slider>
    </Fragment>
  );
};

export default Home;
