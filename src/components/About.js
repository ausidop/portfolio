import { Box, Container, Heading, useColorModeValue } from '@chakra-ui/react';

const About = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        my={10}
        p={4}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I'm a software developer.
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Chergang Chang
          </Heading>
          <p>Software developer</p>
        </Box>
      </Box>
    </Container>
  );
};

export default About;
