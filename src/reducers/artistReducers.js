import { FETCH_ARTIST, FETCH_ARTIST_LOADING } from '../actions/artistActions';

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_ARTIST_LOADING:
      return { ...state, loading: true };
    case FETCH_ARTIST:
      return { ...state, loading: false, artist: action.payload };
    default:
      return state;
  }
}
