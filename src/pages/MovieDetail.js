import React, { useState, useEffect } from "react";
import { movieService } from "../services/MovieService";
import { Rate } from "antd";
import moment from "moment";
import DefaultImage from "../assets/img/defaut-img.jpg";
import Tab from "../components/Tab/Tab";
import { useDispatch } from "react-redux";
import { openBookingModal } from "../redux/actions/modalActions";

const MovieDetail = ({ match }) => {
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

  const dispatch = useDispatch();

  return (
    <div className="movie-detail">
      <div className="bg-movie">
        <img
          src={movieInfor.hinhAnh}
          alt=""
          onError={(e) => {
            e.target.src = DefaultImage;
          }}
        />
      </div>
      <div className="layer-content">
        <div className="movie-content">
          <div
            className="movie-img"
            onClick={() => {
              dispatch(openBookingModal());
            }}
          >
            <img
              src={movieInfor.hinhAnh}
              alt=""
              onError={(e) => {
                e.target.src = DefaultImage;
                e.target.style = "height: 350px; width: 235px";
              }}
            />
            <div className="play" />
          </div>

          <div className="movie-des">
            <h3>{movieInfor.tenPhim}</h3>
            <p>{movieInfor.moTa}</p>
            {movieInfor.ngayKhoiChieu && (
              <div>
                {moment(movieInfor.ngayKhoiChieu).format("DD/MM hh:mm A")}
              </div>
            )}
            {movieInfor.danhGia && (
              <div>
                <Rate
                  allowHalf
                  disabled
                  defaultValue={movieInfor.danhGia / 2}
                />{" "}
                <span>{movieInfor.danhGia + "/10"}</span>
              </div>
            )}
          </div>
        </div>
        <div className="showing-content">
          <div className="title-section">
            <span>Showing Time</span>
          </div>
          <Tab />
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
