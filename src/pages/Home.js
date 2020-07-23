import React, { useState, useEffect } from "react";

import Card from "../components/Card/Card";
import Slider from "react-slick";
import { settingSlider } from "../settings/config";
import { movieService } from "../services/MovieService";
import ModalVideo from "react-modal-video";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  const [listMovie, setListMovie] = useState();
  const modalState = useSelector((state) => state.modalState);
  // const [toggle, setToggle] = useState(false);
  // const [trailerId, setTrailerId] = useState("");
  useEffect(() => {
    movieService
      .getMovie()
      .then((res) => {
        console.log(res.data);
        setListMovie(res.data);
      })
      .catch((err) => console.log(err.response.data));
  }, []);

  const dispatch = useDispatch();
  // console.log(modalState);

  const renderMovie = () => {
    return listMovie?.map((movie, index) => <Card key={index} movie={movie} />);
  };

  return (
    <div className="content">
      <div className="title-section">
        <span>Showing Movie</span>
      </div>
      <Slider {...settingSlider}>{renderMovie()}</Slider>
      <ModalVideo
        videoId={modalState.idVideo}
        isOpen={modalState.isActive}
        onClose={() => {
          dispatch({ type: "CLOSE_TRAILER" });
        }}
      />
    </div>
  );
};

export default Home;
