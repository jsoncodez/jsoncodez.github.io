import React, {useState, useEffect} from 'react';
import './App.scss';
import {Routes, Route} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Loader from "react-loaders";


function App() {


  // const [data, setData] = useState([{}])

  // useEffect(() => {  
  //   fetch("/members")          
  //     .then(res => res.json())  
  //     .then(
  //       data=>{

  //           setData(data);
  //           console.log(data);              
  //     }
  // )
  // },[])

  return (
   <>
    <Routes>

        <Route path = "/" element={<Layout /> } >
       
          <Route index element={<Home />}/>
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          

        </Route>
        
        {/* <Route path="contact" element={<Contact />} /> */}

    </Routes>
   
    <Loader type="ball-scale-multiple"/>
   </>


  )
}

export default App;
