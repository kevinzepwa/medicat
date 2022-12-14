import React, { useState ,useEffect } from "react";
import '../App.css';
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import NavBar from "./NavBar";
import Doctors from "./Doctors";
import Booked from "./Booked";
// import 'bootstrap/dist/css/bootstrap.min.css';  //I'm using the CDN instea

function App() {
  const [ data, setData ] = useState([])
  const [ booked, setBooked ] = useState([])
  const url_1 = "https://chlorinated-medicat-server.glitch.me/data"
  const url_2 = "https://chlorinated-medicat-server.glitch.me/booked"
  const imgPlaceholder = require("./assets/images/splash.png");

  useEffect(() => {
    fetch(url_1)
    .then(res => res.json()) 
    .then(newData => setData(newData))
  }, []);

  useEffect(() => {
    fetch(url_2)
    .then(res => res.json())
    .then(newBooked => setBooked(newBooked))
  }, []);

  // console.log(data)

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/booked' element={<Booked 
                              data={data} 
                              booked={booked} 
                              url_2={url_2} 
                              setBooked={setBooked} 
                              imgPlaceholder={imgPlaceholder}/>} />
        <Route path='/doctors' element={<Doctors 
                              data={data} 
                              setData={setData} 
                              url_2={url_2} 
                              booked={booked} 
                              setBooked={setBooked}
                              imgPlaceholder={imgPlaceholder}/> } />
      </Routes>
    </div>
  );
}

export default App;
