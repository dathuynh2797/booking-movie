import React from "react";
import ReactDOM from "react-dom";
import ModalVideo from "react-modal-video";
import "./ModalTrailer.scss";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../../redux/actions/modalActions";

export const ModalTrailer = () => {
  const modalState = useSelector((state) => state.modalState);
  const dispatch = useDispatch();
  return ReactDOM.createPortal(
    <ModalVideo
      videoId={modalState.idVideo}
      isOpen={modalState.isActive}
      onClose={() => {
        dispatch(closeModal());
      }}
    />,
    document.getElementById("trailer-root")
  );
};
