import React from 'react';
import Carousel from './Components/Carousel';
import Nav from './Components/Nav'
import Slider from './Components/Slider'
import SliderTwo from './Components/SliderTwo'
import SliderThree from './Components/SliderThree'
import SliderFour from './Components/SliderFour'
import SliderFive from './Components/SliderFive'
import PageOne from './Pages/PageOne'
import BlurIn from "./Components/magicui/blur-in";
import BlurFadeTextDemo from './Components/BlurFadeTextDemo'
import Marquee from './Components/Marquee'
import Working from './Components/Working'
import LeftToRightMarquee from './Components/LeftToRightMarquee.jsx'
import Products from './Components/Products.jsx'

function App() {
  return (
    <div className="App">
      <Nav />
      <Carousel className="" />
      {/* <Slider />
      <SliderTwo />
      <SliderThree />
      <SliderFour />
      <SliderFive /> */}
      {/* <PageOne /> */}
      <Working />
      <Products />
      <LeftToRightMarquee />
      <Marquee />
      
    </div>
  );
}

export default App;
