import React from "react";

import Bookings from "./components/Bookings";
import Heading from "./components/Heading";
import Footer from "./components/Footer";
import TouristInfoCards from "./components/TouristInfoCards";
import Restaurant from "./components/Restaurant";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Heading/>
      <TouristInfoCards/>
      <Bookings/>
      <Restaurant/>
      <Footer/>
    </div>
  );
};

export default App;
