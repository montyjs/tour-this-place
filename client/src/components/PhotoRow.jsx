import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';


const Image = styled.img`
  width: 100% !important;
`;

const Container = styled.div`
  width: 25% !important;
  padding-left: 8px !important;
  padding-right: 8px !important;
  display: inline-block !important;
  vertical-align: top !important;
`;

const Room = styled.p`
  margin-top: 8px;
  font-size: 16px;
  font-weight: 400;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const PhotoRow = ({photos}) => {
  return (
    <Row className="row">
      {photos.map((photo, i) => {
        return (
	        <Container className="col-3 w-100" key={i}>
		        <Image src={photo.photoUrl} className="img-fluid"/>
		        <Room className="description">{photo.room}</Room>
		      </Container>
	      )
        }
      )}
    </Row>
  );
};

export default PhotoRow;