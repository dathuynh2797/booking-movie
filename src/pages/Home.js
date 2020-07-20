import React, { useState, useEffect } from "react";

import Card from "../components/Card/Card";
import Slider from "react-slick";
import { settingSlider } from "../settings/config";
import { movieService } from "../services/MovieService";
import ModalVideo from "react-modal-video";

/// New Mac Here
const Home = () => {
  const [listMovie, setListMovie] = useState();
  const [toggle, setToggle] = useState(false);
  const [trailerId, setTrailerId] = useState("");
  useEffect(() => {
    movieService
      .getMovie()
      .then((res) => {
        console.log(res.data);
        setListMovie(res.data);
      })
      .catch((err) => console.log(err.response.data));
  }, []);

  const callBack = (click, trailer) => {
    setToggle(click);
    setTrailerId(trailer);
  };
  const renderMovie = () => {
    return listMovie?.map((movie, index) => (
      <Card key={index} movie={movie} callBack={callBack} />
    ));
  };

  return (
    <div className="content">
      <div className="title-section">
        <span>Showing Movie</span>
      </div>
      <Slider {...settingSlider}>{renderMovie()}</Slider>
      <ModalVideo
        videoId={trailerId}
        isOpen={toggle}
        onClose={() => setToggle(false)}
      />
    </div>
  );
};

export default Home;
