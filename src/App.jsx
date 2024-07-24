import React from "react";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer.jsx";
import Routing from "./Utils/Routing.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Nav />
      <Routing />
      <Footer />
    </>
  );
}

export default App;
