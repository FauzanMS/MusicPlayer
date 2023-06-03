import * as actionTypes from "../actions/action";
const initialState = {
  favSongs: [],
  song_id: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CURRENT_SONG:
      return {
        ...state,
        song_id: action.id,
      };
    case actionTypes.NEXT_SONG:
      return {
        ...state,
        song_id: state.song_id + action.id ,
      };
    case actionTypes.PREV_SONG:
      return {
        ...state,
        song_id: state.song_id - action.id ,
      };
      
    default:
      return state;
  }
};
export default reducer;
