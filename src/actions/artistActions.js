import { getQuery } from '../services/rijksMuseumAPI';
export const FETCH_ARTIST_LOADING = 'FETCH_ARTIST_LOADING';
export const FETCH_ARTIST = 'FETCH_ARTIST';
export const GET_ARTIST = 'GET_ARTIST';
export const SET_ARTIST = 'SET_ARTIST';

export const fetchArtist = artist => dispatch => {
  dispatch({ type: FETCH_ARTIST_LOADING });
  return getQuery(artist)
    .then(post => {
      dispatch({
        type: FETCH_ARTIST,
        payload: post
      });
    });
};

export const getArtist = artist => dispatch => {
  dispatch({ type: FETCH_ARTIST_LOADING });
  return getQuery(artist)
    .then(post => {
      dispatch({
        type: FETCH_ARTIST,
        payload: post
      });
    });
};
export const setArtist = artist => dispatch => {
  dispatch({ type: FETCH_ARTIST_LOADING });
  return getQuery(artist)
    .then(post => {
      dispatch({
        type: FETCH_ARTIST,
        payload: post
      });
    });
};
