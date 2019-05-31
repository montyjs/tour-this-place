import React from 'react';
import styled, {ThemeProvider, createGlobalStyle} from 'styled-components';
import $ from 'jquery';

import PhotoRow from './PhotoRow.jsx';

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
        <div id="tour-container">
          <h1 id="tour-title">Tour this {this.state.listing.type}</h1>
          <div className="pb-4">
            <PhotoRow id="r1" photos={photos.slice(0, 4)} />
            <PhotoRow id="r2" photos={photos.slice(4, 8)} />
          </div>
          <div id="explore-btn-wrapper" className="pt-3">
            <btn id="explore-btn" >Explore all {this.state.photos.length} photos</btn>
          </div>
        </div>
        <hr color="EBEBEB" className="w-100" />
      </div>
    );
  }
}
