import React from 'react';
import { ChakraProvider, Container, theme } from '@chakra-ui/react';
import './styles/main.css';

// COMPONENTS
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import MainContent from './pages/MainContent';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ContextProvider } from './appstate/appState';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div className="mainAppContainer">
        <ContextProvider>
          <Router>
            <HeaderComponent />
            <Container display={'flex'} flexGrow="1" minW={'100%'} m="0" p="0">
              <MainContent />
            </Container>
            <FooterComponent />
          </Router>
        </ContextProvider>
      </div>
    </ChakraProvider>
  );
}

export default App;
