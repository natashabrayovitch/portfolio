

  import React from 'react';
import Stack from './Stack';
import logo from './logo.jpg';
import who from './who.jpg';
import what from './what.jpg';
import proj from './proj.jpg';
import amb from './amb.jpg';
import testimonials from './testimonials.jpg';
import contact from './contact.jpg';

export default function Gallery() {
  return (
    <div>
      <div>
      <Stack id='logo' name='This is me ' logo={logo} />
      </div>
      <div className='container'>
        <Stack id='who' name='Who' logo={who} />
        <Stack id='what' name='About me' logo={what} />
        <Stack id='proj' name='Current projects' logo={proj} />
        <Stack id='amb' name='Why Kodiri' logo={amb} />
        <Stack id='testimonials' name='Testimonials' logo={testimonials} />
        <Stack id='contact' name='Contact' logo={contact} />
      </div>
    </div>
  )
}