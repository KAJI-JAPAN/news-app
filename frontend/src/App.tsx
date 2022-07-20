import './App.css';
import { BrowserRouter } from "react-router-dom"
import { ChakraProvider } from '@chakra-ui/react';
import { Router } from './router/Router';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ChakraProvider>
          <Router />
        </ChakraProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
