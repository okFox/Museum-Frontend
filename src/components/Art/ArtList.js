import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ArtItem from './ArtItem';


ArtList.propTypes = {
  goyaArray: PropTypes.array.isRequired
};
//get artArray from state and put in real references
const goyaArray = {
  'elapsedMilliseconds': 0,
  'count': 329,
  'countFacets': {
    'hasimage': 226,
    'ondisplay': 1
  },
  'artObjects': [
    {
      'links': {
        'self': 'http://www.rijksmuseum.nl/api/en/collection/SK-A-2963',
        'web': 'http://www.rijksmuseum.nl/en/collection/SK-A-2963'
      },
      'id': 'en-SK-A-2963',
      'objectNumber': 'SK-A-2963',
      'title': 'Portrait of Don Ramón Satué',
      'hasImage': true,
      'principalOrFirstMaker': 'Francisco de Goya',
      'longTitle': 'Portrait of Don Ramón Satué, Francisco de Goya, 1823',
      'showImage': true,
      'permitDownload': true,
      'webImage': {
        'guid': 'b7e78388-9d9f-4d74-9090-e6529fa572c9',
        'offsetPercentageX': 0,
        'offsetPercentageY': 0,
        'width': 2131,
        'height': 2708,
        'url': 'https://lh3.googleusercontent.com/SwwiVAxnwFE_s-k7-bPOZ6jnGfcuVDJoZ-ofLb0Zispb-mJdsfasrE1nTPRcGDPwyEqY0txKpjPcAWaIIltYvvPtDA8=s0'
      },
      'headerImage': {
        'guid': 'ddb422b2-6ff0-48dc-92b1-107eccd444cb',
        'offsetPercentageX': 0,
        'offsetPercentageY': 0,
        'width': 1920,
        'height': 460,
        'url': 'https://lh3.googleusercontent.com/og1iXSLmAw1SrhMtE_EHWLB46KA5nZWOeTXF_JFltq5tYO7fce59M0tB3kyLDtYez6UX5_Vy2XFdk4vBuD0BKeKnAI0=s0'
      },
      'productionPlaces': [
        
      ]
    },
    {
      'links': {
        'self': 'http://www.rijksmuseum.nl/api/en/collection/RP-P-1921-2022',
        'web': 'http://www.rijksmuseum.nl/en/collection/RP-P-1921-2022'
      },
      'id': 'en-RP-P-1921-2022',
      'objectNumber': 'RP-P-1921-2022',
      'title': 'Zelfportret van Francisco Goya',
      'hasImage': true,
      'principalOrFirstMaker': 'Francisco de Goya',
      'longTitle': 'Zelfportret van Francisco Goya, Francisco de Goya, 1797 - 1799',
      'showImage': true,
      'permitDownload': true,
      'webImage': {
        'guid': '36aa6434-7f25-4c8a-9dc5-09b46eee6f53',
        'offsetPercentageX': 0,
        'offsetPercentageY': 0,
        'width': 1930,
        'height': 2886,
        'url': 'https://lh6.ggpht.com/lL-A1OkBdIyV8VIePIMFABLokJYRsyAyCdxp08s23W0YikrrlHLOoDWscksUSuem2mmBywdx2bwfokgUf8h_rLfI7XLK=s0'
      },
      'headerImage': {
        'guid': '8c6356e5-af98-4cdc-88e4-070ef082a8bf',
        'offsetPercentageX': 0,
        'offsetPercentageY': 0,
        'width': 1920,
        'height': 460,
        'url': 'https://lh6.ggpht.com/BNFSg2Sep2Jyo0lEW4SdZWDbNhAbDOhy2eWMYV-hXhjhpsiPNjAOEBr8jV1ojWBkt7gJyxv5fFeOh9k-sarPpWBGg2w=s0'
      },
      'productionPlaces': [
        'Spain'
      ]
    },
    {
      'links': {
        'self': 'http://www.rijksmuseum.nl/api/en/collection/RP-P-2010-329-38',
        'web': 'http://www.rijksmuseum.nl/en/collection/RP-P-2010-329-38'
      },
      'id': 'en-RP-P-2010-329-38',
      'objectNumber': 'RP-P-2010-329-38',
      'title': 'Portret van Francisco Goya',
      'hasImage': true,
      'principalOrFirstMaker': 'Félix Augustin Milius',
      'longTitle': 'Portret van Francisco Goya, Félix Augustin Milius, 1853 - 1894',
      'showImage': true,
      'permitDownload': true,
      'webImage': {
        'guid': '39a9b230-a34e-4437-a94b-3c1ca4615721',
        'offsetPercentageX': 0,
        'offsetPercentageY': 0,
        'width': 1962,
        'height': 3000,
        'url': 'https://lh5.ggpht.com/snftfcCHamUdo62_N3xzsIr8ufkIvDwXE9soGgd2Sf0mMFkJCw1aVf-_tHnhGoR4w-NAheMZfX6JJJ51Mv3N4w0jebc=s0'
      },
      'headerImage': {
        'guid': '0916f4c9-8a33-4bd7-8f7c-005e7aff1a71',
        'offsetPercentageX': 0,
        'offsetPercentageY': 0,
        'width': 1920,
        'height': 460,
        'url': 'https://lh6.ggpht.com/8P_EMbC-ZZlkTmyo9Y23HYmKXoaMsO0CMTRIZlI0SoIYg6aGuC0BB_MkqkSorz-ESpLQbagPlzFXVDRbhK6469WahYE=s0'
      },
      'productionPlaces': [
        'Paris'
      ]
    },
    {
      'links': {
        'self': 'http://www.rijksmuseum.nl/api/en/collection/RP-P-1993-167',
        'web': 'http://www.rijksmuseum.nl/en/collection/RP-P-1993-167'
      },
      'id': 'en-RP-P-1993-167',
      'objectNumber': 'RP-P-1993-167',
      'title': 'Niemand kent zichzelf',
      'hasImage': true,
      'principalOrFirstMaker': 'Francisco de Goya',
      'longTitle': 'Niemand kent zichzelf, Francisco de Goya, 1797 - 1799',
      'showImage': true,
      'permitDownload': true,
      'webImage': {
        'guid': '2882cb86-0d21-4c20-a9fc-eb0175cb4d95',
        'offsetPercentageX': 0,
        'offsetPercentageY': 0,
        'width': 1976,
        'height': 2934,
        'url': 'https://lh3.ggpht.com/6clCOsyJcjcvc0mVX5xEYwFrfZvKD9rYe1ZlYC3XiCSSY1vhsno0MSLsouFvsGZqHCBhjEi7F5G9zQHqC90bzLVcRg=s0'
      },
      'headerImage': {
        'guid': '1a462891-dc4e-43b4-9d29-913d3c881432',
        'offsetPercentageX': 0,
        'offsetPercentageY': 0,
        'width': 1920,
        'height': 460,
        'url': 'https://lh4.ggpht.com/XWFVOL27zMdDUxwuaehKRF1Fouw18t-XQ5FzTM3y_fJGJg6pEWHLE1BCmSTtO65zQvjRDtMhe671IWp5_17xn3cXuagH=s0'
      },
      'productionPlaces': [
        'Spain'
      ]
    }
  ]
};


function ArtList(goyaArray) {
  let artElements = goyaArray.map(item => {
    <li key={item.artObjects.objectNumber}>
      <Link to={item.artObjects.links.web}>
        <ArtItem title={item.artObjects.title } img={item.artObjects.links.web} />
      </Link>
    </li>;

      
      

  
  });
  return (
    { artElements }
  );
}

export default ArtList;
