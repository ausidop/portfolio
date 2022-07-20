import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Container,
  Heading,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';
import resume from '../assets/Chergang Chang.pdf';

const About = () => {
  return (
    <Container id="about">
      <Box
        borderRadius="lg"
        my={'5'}
        p={4}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, My name is Chergang Chang.
      </Box>
      <Box align="center" my={4}>
        <Link
          href={resume}
          download
          _hover={{
            textDecoration: 'none',
          }}
        >
          <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
            My Resume
          </Button>
        </Link>
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title" align="center">
            Chergang Chang
          </Heading>
          <p>Software developer</p>
        </Box>
      </Box>
    </Container>
  );
};

export default About;
