import React from 'react';
import styled, {ThemeProvider, createGlobalStyle} from 'styled-components';
import $ from 'jquery';

import PhotoRow from './PhotoRow.jsx';

const theme = {
  main: 'red'
}

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', Helvetica Neue, sans-serif;
    font-size: 14px;
    color: #484848;
    line-height: 1.43;
  }
`;

const Tour_Container = styled.div`
  width: 100;
  padding-left: 40px;
  padding-right: 40px;
`;

const Title = styled.h1`
  font-weight: 800;
  margin-bottom: 48px;
  font-size: 32px !important;
  line-height: 40px !important;
  letter-spacing: normal !important;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
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
  margin: 0px !important;
    word-wrap: break-word !important;
    font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
    font-size: 16px !important;
    font-weight: 600 !important;
    line-height: 1.375em !important;
    color: #484848 !important;
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
      <ThemeProvider theme={theme} >
      <div>
        <GlobalStyle />
        <Tour_Container>
          <Title>Tour this {this.state.listing.type}</Title>
          <div className="pb-4">
            <PhotoRow id="r1" photos={photos.slice(0, 4)} />
            <PhotoRow id="r2" photos={photos.slice(4, 8)} />
          </div>
          <Wrap className="pt-3">
            <Btn id="explore-btn" >Explore all {this.state.photos.length} photos</Btn>
          </Wrap>
        </Tour_Container>
        <hr color="EBEBEB" className="w-100" />
      </div>
      </ThemeProvider >
    );
  }
}

