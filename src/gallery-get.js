
import who from './who.jpg';
import what from './what.jpg';
import proj from './proj.jpg';
import amb from './amb.jpg';
import testimonials from './testimonials.jpg';
import contact from './contact.jpg';

export default function getGallery() {
    return [
      { id: 'who', name: 'Who is Natasha', logo: who, details: "My name is Natasha. I am Kodiri's project made from scratch." },
      { id: 'what', name: 'About me', logo: what, details: "I am a hairdresser who can write and read JavaScript programming language. I can also write, read and speak several Europan human languages."},
      { id: 'proj', name: 'Current projects', logo: proj, details:"Currently I am working on the Kodiri's 'Kodflix' web app, and I am a member of Kodiri's Bravo-team working on our team project 'Koinalasys' web app which is CryptoCurrency Price and Market Capitalisation Site and is a fullstack site where we are showcasing our skills with css and design, DB and use of API's. The app integrates and compliments with our React and JavaScript study " },
      { id: 'amb', name: 'Why Kodiri', logo: amb, details: "The main reasons why I have chosen Kodiri academy is to be able to understand the  most popular and modern way to create the structure of web sites, mobile apps, PWA's. My 2 ambitions are 1. to create a mobile app for my own business of hairdressing education , 2. to have fun with my three sons who are into computer games making! " },
      { id: 'testimonials', name: 'Testimonials', logo: testimonials, details: "WIP" },
      { id: 'contact', name: 'Contact', logo: contact, details: "WIP" },
    ];
  }