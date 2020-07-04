import React from "react";
import { Rate } from "antd";
import { NavLink } from "react-router-dom";

const Card = () => {
  return (
    <div className="card">
      <div className="poster">
        <img src="http://placekitten.com/g/350/450" alt="img" />
      </div>
      <div className="details">
        <h4>Cute Cat</h4>
        <div className="rating">
          <Rate allowHalf disabled defaultValue={2.5} />
          <span className="rating-nums">5/10</span>
        </div>
        <div className="date">
          <p>01/07/2020</p>
        </div>
        <div className="info">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            libero necessitatibus dignissimos iste voluptate explicabo assumenda
            quibusdam commodi...
          </p>
        </div>
        <div className="booking">
          <button className="btn from-left">Trailer</button>
          <NavLink to="/" className="btn from-right">
            Booking
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Card;
