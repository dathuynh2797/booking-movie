import React, { useState, useEffect } from "react";
import { movieService } from "../services/MovieService";

const MovieDetail = ({ match, location }) => {
  const [movieInfor, setMovieInfor] = useState({});
  useEffect(() => {
    movieService
      .getScheduleMoive(match.params.maPhim)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.repsone.data);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const IMGBG =
    "http://movie0706.cybersoft.edu.vn/hinhanh/avengers-infinity-war.jpg";

  return (
    <div className="movie-detail">
      <div className="bg-movie">
        <img src={IMGBG} alt="" />
      </div>
      <div className="movie-content">
        <div className="movie-img">
          <img src={IMGBG} alt="" />
        </div>
        <div className="play">
          <img src="../assets/img/play-video.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
