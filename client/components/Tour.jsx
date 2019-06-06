import React from 'react';
import styled, {ThemeProvider, createGlobalStyle} from 'styled-components';
import $ from 'jquery';

import PhotoRow from './PhotoRow.jsx';

export default class Tour extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listing: 'Placeholder',
      photos: []
    };
  }

  componentDidMount () {
    $.ajax({
      method: 'GET',
      url: 'http://localhost:3002/photos',
      success: (data) =>{
        console.log('componentDidMount success', data.rows[0]);
        this.setState({
          listing: data.rows[0].listing,
          photos: [
            {room: 'Dining Room', url: data.rows[0].diningroom}, 
            {room: 'Bed Room', url: data.rows[0].bedroom}, 
            {room: 'Living Room', url: data.rows[0].livingroom}, 
            {room: 'Patio', url: data.rows[0].patio}, 
            {room: 'Kitchen', url: data.rows[0].kitchen}, 
            {room: 'Bathroom', url: data.rows[0].bathroom}, 
            {room: 'Entrance', url: data.rows[0].entrance}
          ]
        });
      },
      error: (err) => {
        console.log('componentDidNOTMount blah dang');
      }
    });
  }


  render() {
    return (
      <div>
        <div id="tour-container">
          <h1 id="tour-title">Tour this {this.state.listing}</h1>
          <div className="pb-4">
            <PhotoRow id="r1" photos={this.state.photos.slice(0, 4)} />
            <PhotoRow id="r2" photos={this.state.photos.slice(4, 7)} />
          </div>
          <div id="explore-btn-wrapper" className="pt-3">
            <btn id="explore-btn" >Explore all {8 + (Math.floor(Math.random() * 18))} photos</btn>
          </div>
        </div>
        <hr color="EBEBEB" className="w-100" />
      </div>
    );
  }
}
