import React, { useState, useEffect } from "react";
import { movieService } from "../services/MovieService";
import ModalVideo from "react-modal-video";
import { Rate } from "antd";
import moment from "moment";
import DefaultImage from "../assets/img/defaut-img.jpg";
import Tab from "../components/Tab/Tab";

const MovieDetail = ({ match }) => {
  const [movieInfor, setMovieInfor] = useState({});
  const [toggle, setToggle] = useState(false);
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

  const getVideoId = (videoId) => {
    if (videoId) {
      videoId = videoId.split("/").pop();
      return videoId;
    }
  };

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
          <div className="movie-img">
            <img
              src={movieInfor.hinhAnh}
              alt=""
              onError={(e) => {
                e.target.src = DefaultImage;
                e.target.style = "height: 400px; width: 300px";
              }}
            />
            <div
              className="play"
              onClick={() => {
                setToggle(true);
              }}
            ></div>
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

        <Tab />
      </div>

      <ModalVideo
        isOpen={toggle}
        videoId={getVideoId(movieInfor.trailer)}
        onClose={() => {
          setToggle(false);
        }}
      />
    </div>
  );
};

export default MovieDetail;
