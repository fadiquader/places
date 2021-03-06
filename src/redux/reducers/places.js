import { ADD_PLACE, DELETE_PLACE, FETCH_PLACES, ADD_PLACE_LOADING } from '../actionsTypes';

const initialState = {
  data: [],
  loading: true,
  addPlaceLoading: false,
};

const placesReducer = (state=initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        data: [...state.data, {
          name: action.payload.name,
          location: action.payload.location,
          image: action.payload.image,
          key: action.payload.key,
          // image: 'https://multco.us/sites/default/files/styles/small/public/APFY_tem_webbanner.png',
        }]
      };
    case DELETE_PLACE:
      return {
        ...state,
        data: state.data.filter(place => place.key !== action.payload.key)
      };
    case FETCH_PLACES:
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    case ADD_PLACE_LOADING:
      return {
        ...state,
        addPlaceLoading: action.payload,
      };
    default:
      return state
  }
};

export default placesReducer;