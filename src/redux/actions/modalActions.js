import {
  OPEN_TRAILER,
  GET_ID_TRAILER,
  CLOSE_TRAILER,
  OPEN_BOOKING_TRAILER,
} from "../constant/ModalConstant";

export const openModal = (trailer) => {
  return { type: OPEN_TRAILER, idVideo: trailer };
};
export const getIdModal = (trailer) => {
  return { type: GET_ID_TRAILER, idVideo: trailer };
};
export const openBookingModal = () => {
  return { type: OPEN_BOOKING_TRAILER };
};
export const closeModal = () => {
  return { type: CLOSE_TRAILER };
};
