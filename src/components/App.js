import React, { useState ,useEffect } from "react";
import '../App.css';
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Doctors from "./Doctors";
import Booked from "./Booked";
// import 'bootstrap/dist/css/bootstrap.min.css';  //I'm using the CDN instea

function App() {
  const [ data, setData ] = useState([])
  const [ booked, setBooked ] = useState([])
  const url = "https://medicat-server.glitch.me/data"
  const imgPlaceholder = require("./assets/images/splash.png");

  useEffect(() => {
    fetch(url)
    .then(res => res.json()) 
    .then(newData => setData(newData))
  }, []);

  // console.log(data)

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/booked' element={<Booked data={data} booked={booked}/>} />
        <Route path='/doctors' element={<Doctors 
                                          data={data} 
                                          setData={setData} 
                                          url={url} 
                                          booked={booked} 
                                          setBooked={setBooked}
                                          imgPlaceholder={imgPlaceholder}
                                          /> } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
