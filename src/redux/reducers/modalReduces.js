const initialState = {
  isActive: false,
  idVideo: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "OPEN_TRAILER": {
      console.log(action);
      return { ...state, isActive: true, idVideo: action.idVideo };
    }
    case "OPEN_BOOKING_TRAILER": {
      console.log("OPEN_BOOKING_TRAILER", action);
      return { ...state, isActive: true };
    }
    case "GET_ID_TRAILER": {
      console.log("GET_ACTION", action);
      return { ...state, idVideo: action.idVideo };
    }
    case "CLOSE_TRAILER": {
      return { ...state, isActive: false };
    }
    default:
      return state;
  }
};
