import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Top } from './components/page/Top';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/top" element={<Top />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
