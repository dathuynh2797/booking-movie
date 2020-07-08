import React, { useState, useEffect } from "react";
import { movieService } from "../services/MovieService";

const MovieDetail = ({ match, location }) => {
  const [movieInfor, setMovieInfor] = useState({});
  useEffect(() => {
    movieService
      .getScheduleMoive(match.params.maPhim)
      .then((res) => {
        console.log(res.data);
        setMovieInfor(res.data);
      })
      .catch((err) => {
        console.log(err.repsone.data);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="movie-detail">
      <div className="bg-movie">
        <img src={movieInfor.hinhAnh} alt="" />
      </div>
      <div className="movie-content">
        <div className="movie-img">
          <img src={movieInfor.hinhAnh} alt="" />
          <div
            className="play"
            onClick={() => {
              console.log("click");
            }}
          ></div>
        </div>

        <div className="movie-des">
          <h3>{movieInfor.tenPhim}</h3>
          <p>{movieInfor.moTa}</p>
          <p>{movieInfor.ngayKhoiChieu}</p>
          <p>{movieInfor.danhGia}/10</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
