import React from "react";
import ReactDOM from "react-dom";
import ModalVideo from "react-modal-video";
import "./ModalTrailer.scss";
import { useSelector, useDispatch } from "react-redux";

export const ModalTrailer = () => {
  const modalState = useSelector((state) => state.modalState);
  const dispatch = useDispatch();
  console.log(modalState);
  return ReactDOM.createPortal(
    <ModalVideo
      videoId={modalState.idVideo}
      isOpen={modalState.isActive}
      onClose={() => {
        dispatch({ type: "CLOSE_TRAILER" });
      }}
    />,
    document.getElementById("trailer-root")
  );
};
