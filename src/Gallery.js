

import React from 'react';
import Stack from './Stack';
import getGallery from './gallery-get';
import logo from './logo.jpg';


export default function Gallery() {
  return (
    <div>
      <div>
        <Stack id='logo' name=' ' logo={logo} />
      </div>
      <div className='container'>
        {
          getGallery().map(stack => (
            <Stack
              key={stack.id}
              id={stack.id}
              name={stack.name}
              logo={stack.logo} />
          ))
        }
      </div>
    </div>
  )
}

