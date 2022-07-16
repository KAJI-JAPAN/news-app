import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Top } from './components/page/Top';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ChakraProvider>
          <Routes>
            <Route path="/top" element={<Top />} />
          </Routes>
        </ChakraProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
