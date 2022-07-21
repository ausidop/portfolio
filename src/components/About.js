import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Center,
  Container,
  Link,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import resume from '../assets/Chergang Chang.pdf';
import Cat from './Cat';

const About = () => {
  return (
    <Container id="about" minH={'55vh'}>
      <Cat />
      <Center
        borderRadius="lg"
        boxShadow={'lg'}
        my={5}
        p={4}
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I'm Chergang Chang.
      </Center>

      <Box display={{ md: 'flex' }}>
        <Text as="p" textAlign={'justify'} style={{ textIndent: '1em' }}>
          I'm a software developer engineer currently located in Utah. I'm
          pursuing the opportunity to jump in software developer industry and
          I'm willing to relocate.
        </Text>
      </Box>

      <Center my={4}>
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
      </Center>
    </Container>
  );
};

export default About;
