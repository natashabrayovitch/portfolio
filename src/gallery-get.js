import React from 'react';
import who from './who.jpg';
import what from './what.jpg';
import proj from './proj.jpg';
import amb from './amb.jpg';
import testimonials from './testimonials.jpg';
import contact from './contact.jpg';

export default function getGallery() {
    return [
      { id: 'who', name: 'Who is Natasha', logo: who },
      { id: 'what', name: 'About me', logo: what },
      { id: 'proj', name: 'Current projects', logo: proj },
      { id: 'amb', name: 'Why Kodiri', logo: amb },
      { id: 'testimonials', name: 'Testimonials', logo: testimonials },
      { id: 'contact', name: 'Contact', logo: contact },
    ];
  }