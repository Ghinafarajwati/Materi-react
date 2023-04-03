import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

