import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';


const Image = styled.img`
  width: 100% !important;
`;

const Container = styled.div`
  width: 25% !important;
  padding-left: 8px !important;
  padding-right: 8px !important;
  padding-bottom: 16px;
  display: inline-block !important;
  vertical-align: top !important;
`;

const Room = styled.p`
  word-wrap: break-word !important;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
  font-size: 14px !important;
  font-weight: 600 !important;
  line-height: 1.2857142857142858em !important;
  color: #484848 !important;
  margin-top: 8px;
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