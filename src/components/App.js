import React, { useState ,useEffect } from "react";
import '../App.css';
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Doctors from "./Doctors";
// import 'bootstrap/dist/css/bootstrap.min.css';  //I'm using the CDN instea

function App() {
  const [ data, setData ] = useState([])

  useEffect(() => {
    const url = "http://localhost:8002/data"
    
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
        <Route path='/doctors' element={<Doctors data={data} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
