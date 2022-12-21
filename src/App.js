import logo from './logo.svg';

import { useState, useEffect, useRef, useContext } from 'react';
import { useLocation, Routes, Route, useNavigate } from "react-router-dom";


import Sign from './page/sign';
import Main from './page/main';

import './App.css';

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="sign" element={<Sign />} />
        <Route path="" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
