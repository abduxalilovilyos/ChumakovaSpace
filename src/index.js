import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css"
import "./responsive.css"
import Header from './Header';
import Text from './Text';
import Content from './Content';
import Text2 from './Text2';
import About from './About';
import Servise from './Servise';
import Prise from './Prise';
import Info from './Info';
import Info2 from './Info2';
import InfoText from './InfoText';
import Reviews from './Reviews';
import Footer from './Footer';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <div className='site'>
    <Header />
    <Text />
    <Content />
    <Text2 />
    <About />
    <Servise />
    <Prise />
    <Info />
    <Info2 />
    <InfoText />
    <Reviews />
    <Footer />
  </div>

);

