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
    case "CLOSE_TRAILER": {
      return { ...state, isActive: false };
    }
    default:
      return state;
  }
};
