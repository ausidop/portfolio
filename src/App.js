import React from 'react';
import { Box, ChakraProvider, Container, theme } from '@chakra-ui/react';
import Nav from './components/Nav';
import About from './components/About';
import Footer from './components/Footer';
import Skills from './components/Skills';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box as='main' pb={8}>
        <Nav />
        <Container maxW={'container.md'} pt={20}>
          <About />
          <Skills />
          <Footer />
        </Container>
        <div style={{ height: '5000px' }} />
      </Box>
    </ChakraProvider>
  );
}

export default App;
