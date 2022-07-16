import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './utils/ColorModeSwitcher';
import Nav from './components/Nav';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Nav />
    </ChakraProvider>
  );
}

export default App;
