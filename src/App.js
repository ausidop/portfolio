import { Box, Container } from '@chakra-ui/react';
import Nav from './components/Nav';
import About from './components/About';
import Footer from './components/Footer';
import Work from './components/Work';
import Contact from './components/Contact';

function App() {
  return (
    <Box as="main" pb={8}>
      <Nav />
      <Container maxW={'container.md'} pt={20}>
        <About />
        <Work />
        <Contact />
        <Footer />
      </Container>
    </Box>
  );
}

export default App;
