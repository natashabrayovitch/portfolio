
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import getGallery from './gallery-get';

export default class Details extends Component {

  constructor() {
    super();
    this.state= {
      welcomeMessage: 'welcome'
    };
  }

  componentDidMount(){
    let galleryId = this.props.match.params.galleryId;
    let gallery = getGallery()
        .find((gallery) => gallery.id === galleryId);
      this.setState({
        gallery
    });
  }

  render() {
    return (
      <div>
        <h1> {this.state.gallery.name}</h1>
        <Link to='/'>Back to Home</Link>
      </div>
    );
  }
}

