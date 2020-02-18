export const FETCH_ARTIST_LOADING = 'FETCH_ARTIST_LOADING';
export const FETCH_ARTIST = 'FETCH_ARTIST';

export const fetchArtist = artist => dispatch => {
  dispatch({ type: FETCH_ARTIST_LOADING });
  return getArtist(artist)
    .then(post => {
      dispatch({
        type: FETCH_ARTIST,
        payload: post
      });
    });
};
