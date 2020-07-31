import {
  OPEN_TRAILER,
  OPEN_BOOKING_TRAILER,
  GET_ID_TRAILER,
  CLOSE_TRAILER,
} from "../constant/ModalConstant";

const initialState = {
  isActive: false,
  idVideo: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case OPEN_TRAILER: {
      return { ...state, isActive: true, idVideo: action.idVideo };
    }
    case OPEN_BOOKING_TRAILER: {
      return { ...state, isActive: true };
    }
    case GET_ID_TRAILER: {
      return { ...state, idVideo: action.idVideo };
    }
    case CLOSE_TRAILER: {
      return { ...state, isActive: false };
    }
    default:
      return state;
  }
};
