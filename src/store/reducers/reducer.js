import * as actionTypes from "../actions/action";
const initialState = {
  favSongs: [],
  // ordered_items : {},
  song_id: 0,
  // token : "",
  // localId : "",
  // singleBuy : null,
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

    // case (actionTypes.ADD_LOCALID):
    //     return{
    //         ...state,
    //         localId:state.localId,
    //     };
    // case (actionTypes.ADD_TO_CART):
    //         console.log(action.item);
    //         let boolme = true ;
    //         console.log(state.purchasedItems);
    //         if(boolme){
    //         return{
    //             ...state,
    //         purchasedItems : [...state.purchasedItems , action.item-1],
    //         };
    //     }
    //     break;
    // case (actionTypes.REMOVE_FROM_CART):
    //     console.log(state.purchasedItems);
    //             return{
    //                 ...state,
    //                 purchasedItems : state.purchasedItems.filter(item=>item+1!== action.item)

    //                 // purchasedItems : state.purchasedItems.filter(item=>{
    //                 //    if(item+1!== action.item){
    //                 //         return item;
    //                 //    }

    //             };
    // case (actionTypes.PLACE_ORDER):
    //  return {
    //           ...state,
    //           ordered_items : state.purchasedItems.map(item=>{
    //               return item
    //           })
    //     };
    // case (actionTypes.SINGLE_BUY):
    //  return {
    //              ...state,
    //             singleBuy : action.item,
    //        };
    // case (actionTypes.LOGIN_START):
    //        return {
    //                    ...state,
    //                   token : action.token,
    //                   localId : action.userId,
    //              };
    // case (actionTypes.LOGOUT):
    //         return {
    //               ...state,
    //               token : "",
    //             localId : ""
    //                    };

    default:
      return state;
  }
};
export default reducer;
