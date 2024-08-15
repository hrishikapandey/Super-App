import { useState } from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Registerpage from './Pages/Registerpage';
import GenrePage from './Pages/GenrePage';

import Notfoundpage from './Pages/Notfoundpage';
import CarouselPage from "./Pages/CarouselPage";




function App() {


  return (
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<Registerpage/>}/>
   <Route path="/register" element={<Registerpage/>}/>
   <Route path="/home" element={<Registerpage/>}/>
   <Route path="/genre" element={<GenrePage/>}/>
   <Route path="/carousel" element={<CarouselPage/>}/>
   <Route path="/dashboard" element={<Registerpage/>}/>
   <Route path="/movies" element={<Registerpage/>}/>
   <Route path="*" element={<Notfoundpage/>}/>

   </Routes>
   
   </BrowserRouter>
  )
}

export default App;
