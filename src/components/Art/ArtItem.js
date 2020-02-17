import React from 'react';
import PropTypes from 'prop-types';


//placeholder props

ArtItem.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

function ArtItem(state) {

  return (

    <figure>
      <img src={url} alt={title} style="width:100%" />
      <figcaption>{title}</figcaption>
    </figure>
  );
}

export default ArtItem;
