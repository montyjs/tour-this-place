import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import $ from 'jquery';

import PhotoRow from './PhotoRow.jsx';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', Helvetica Neue, sans-serif;
    font-size: 14px;
    color: #484848;
    line-height: 1.43;
  }
`;

const Container = styled.div`
  width: 100;
  margin: auto 5rem 3rem 5rem;
`;

const Title = styled.h1`
  font-weight: 800;
  font-size: 36px;
  line-height: 40px;
`;

const Btn = styled.button`
  color: var(--color-brand-plus, #914669);
  background: transparent;
  border: 0px;
  cursor: pointer;
  margin: 0px;
  padding: 0px;
  user-select: auto;
  text-align: left;
  &:hover {
    text-decoration: underline;
  }
`;

const Wrap = styled.div`
  margin: 0px;
  word-wrap: break-word;
  font-size: 16px;
  font-weight: 600;
`;


export default class Tour extends React.Component {
  constructor(props) {
    super(props);

    this.getRoomPreview = this.getRoomPreview.bind(this);

    this.state = {
      listing: {type: 'Placeholder'},
      photos: []
    }
  }

  getRoomPreview(pics) {
    let rooms = [];
    let results = [];
    pics.forEach(pic => {
      if(!rooms.includes(pic.room) && results.length <= 8){
        rooms.push(pic.room)
        results.push(pic)
      }
    })
    
    return results;
  }

  componentDidMount () {
    let ranListing;
    $.ajax({
      url: "http://localhost:3002/api/listings",
      success: (data) =>{
      ranListing = data[Math.floor(Math.random()*data.length-1)];
      },
      complete: () => {
        $.ajax({
          url: "http://localhost:3002/api/photos",
          method: "POST",
          data: {
            id: ranListing.id
          },
          success: (data) => {
            this.setState({
              listing: ranListing,
              photos:data,
            })
          }
        })
      }
    })
  }


  render() {
    let photos = this.getRoomPreview(this.state.photos);
    return (
      <div>
        <GlobalStyle />
        <Container>
          <Title>Tour this {this.state.listing.type}</Title>
          <div className="pb-4">
            <PhotoRow id="r1" photos={photos.slice(0, 4)} />
            <PhotoRow id="r2" photos={photos.slice(4, 8)} />
          </div>
          <Wrap className="pt-3">
            <Btn id="explore-btn" >Explore all {this.state.photos.length} photos</Btn>
          </Wrap>
        </Container>
      </div>
    );
  }
}

