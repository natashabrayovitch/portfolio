
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import getGallery from './gallery-get';

export default class Details extends Component {

  constructor() {
    super();
    this.state = {
      gallery: {}
    };
  }

  componentDidMount() {
    let galleryId = this.props.match.params.galleryId;
    let gallery = getGallery()
      .find((gallery) => gallery.id === galleryId);
    this.setState({ gallery });
  }

  render() {
    if (this.state.gallery === undefined) {
      return <Redirect to='not-found' />;
    } else {
      return (
        <div>
          <h1>{this.state.gallery.name}</h1>
          <div>{this.state.gallery.details}</div>
          <img 
            src={this.state.gallery.logo}
            alt={this.state.gallery.name} />
          <Link to='/'>Back to Home</Link>
        </div>
      );
    }
  }
}
