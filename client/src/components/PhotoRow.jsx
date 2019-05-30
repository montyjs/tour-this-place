import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';


const Image = styled.div`
  background-image: ${props => `url('${props.photo}')`};
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
`;

const Container = styled.div`
  width: 100%;
  height: 200px;
  text-align: left;
`;

const Room = styled.p`
  font-size: 16px;
  font-weight: 400;
`;

const Row = styled.div`
  padding-top: 5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const PhotoRow = ({photos}) => {
  return (
    <Row className="row pt-5 w-100">
      {photos.map((photo, i) => {
        return (
	        <Container className="col-3 w-100">
		        <Image photo={photo.photoUrl} className="img-fluid"/>
		        <Room className="description">{photo.room}</Room>
		      </Container>
	      )
        }
      )}
    </Row>
  );
};

export default PhotoRow;