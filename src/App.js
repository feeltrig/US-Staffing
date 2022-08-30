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
          <HeaderComponent />

          <Router>
            <Container
              display={'flex'}
              flexGrow="1"
              minW={'100%'}
              border="2px solid yellow"
            >
              <MainContent />
            </Container>
          </Router>
        </ContextProvider>
      </div>
    </ChakraProvider>
  );
}

export default App;
