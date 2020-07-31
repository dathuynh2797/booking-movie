import React from "react";
import { Rate } from "antd";
import { NavLink } from "react-router-dom";
import moment from "moment";
import DefaultImage from "../../assets/img/defaut-img.jpg";
import { useDispatch } from "react-redux";

const Card = ({ movie }) => {
  const rating = movie.danhGia / 2;
  const trailer = movie.trailer.split("/").pop();

  const dispatch = useDispatch();

  return (
    <div className="card">
      <div className="poster">
        <img
          src={movie.hinhAnh}
          alt={movie.tenPhim}
          onError={(e) => {
            e.target.src = DefaultImage;
          }}
        />
      </div>
      <div className="details">
        <div className="title">{movie.tenPhim}</div>
        <div className="rating">
          <Rate allowHalf disabled defaultValue={rating} />
          <span className="rating-nums">{movie.danhGia}/10</span>
        </div>
        <div className="date">
          <p>{moment(movie.ngayKhoiChieu).format("DD/MM hh:mm A")}</p>
        </div>
        <div className="info">
          {movie.moTa.length > 100 ? (
            <p>{movie.moTa.substr(0, 100)} ...</p>
          ) : (
            <p>{movie.moTa}</p>
          )}
        </div>
        <div className="booking">
          <button
            className="btn from-left"
            onClick={() => dispatch({ type: "OPEN_TRAILER", idVideo: trailer })}
            // onClick={() => console.log(movie.trailer)}
          >
            Trailer
          </button>
          <NavLink
            to={`/movie-detail/${movie.maPhim}`}
            className="btn from-right"
            onClick={() => {
              dispatch({ type: "GET_ID_TRAILER", idVideo: trailer });
            }}
          >
            Booking
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Card;
