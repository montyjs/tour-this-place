import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';

const PhotoRow = ({photos}) => {
  return (
    <div className="row photo-row">
      {photos.map((photo, i) => {
        return (
	        <div className="col-3 w-100 tour-photo-container" key={i}>
		        <img src={photo.photoUrl} className="img-fluid w-100"/>
		        <p className="room-photo-description">{photo.room}</p>
		      </div>
	      )
        }
      )}
    </div>
  );
};

export default PhotoRow;