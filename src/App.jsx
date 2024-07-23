import React from "react";
import Carousel from "./Components/Carousel";
import Nav from "./Components/Nav";
import PageOne from "./Pages/PageOne";
import PageTwo from "./Pages/PageTwo";

import Marquee from "./Components/Marquee";
import Working from "./Components/Working";
import LeftToRightMarquee from "./Components/LeftToRightMarquee.jsx";
import Products from "./Components/Products.jsx";

function App() {
  return (
    <div className="App ">
      <Nav />
      <Carousel className="" />
      <PageTwo />
      {/* <PageOne /> */}
      <Working />
      <Products />
      <LeftToRightMarquee />
      <Marquee />
    </div>
  );
}

export default App;
