import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import Room from "./pages/room/Room";


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/hotels" element={<Room/>}/>
      <Route path="/hotels/:id" element={<Hotel/>}/>
    </Routes>
    
    </BrowserRouter>
    </>
  );
}

export default App;