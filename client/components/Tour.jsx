import React from 'react';
import $ from 'jquery';

import PhotoRow from './PhotoRow.jsx';

export default class Tour extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listing: '',
      photos: []
    };
  }

  componentDidMount () {
    $.ajax({
      method: 'GET',
      url: `http://${window.location.hostname}:3002/photos`,
      success: (data) => {
        console.log('componentDidMount success', data);
        this.setState({
          listing: data.listings,
          photos: [
            {room: 'Dining Room', url: data.diningroom}, 
            {room: 'Bed Room', url: data.bedroom}, 
            {room: 'Living Room', url: data.livingroom}, 
            {room: 'Patio', url: data.patio}, 
            {room: 'Kitchen', url: data.kitchen}, 
            {room: 'Bathroom', url: data.bathroom}, 
            {room: 'Entrance', url: data.entrance}
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
            <button id="explore-btn" >Explore all {8 + (Math.floor(Math.random() * 18))} photos</button>
          </div>
        </div>
        <hr color="EBEBEB" className="w-100" />
      </div>
    );
  }
}
