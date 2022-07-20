import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';
import netflix from '../assets/img/netflix-clone.png';
import test from '../assets/img/javascript.png';
import { FiEye, FiGithub } from 'react-icons/fi';

const GridItem = ({ thumbnail, title, link, children }) => (
  <Box w="100%" align="center">
    <Image
      src={thumbnail}
      alt={title}
      borderRadius="full"
      boxSize="160px"
      objectFit="cover"
    />
    <Box h={90} mb={5}>
      <Text mt={2} fontSize={20}>
        {title}
      </Text>
      <Text fontSize={14}>{children}</Text>
    </Box>
    <VStack h={100}>
      <Link href={link} isExternal>
        <Button leftIcon={<FiEye />} colorScheme="teal" w={140} mb={3}>
          Live Version
        </Button>
      </Link>
      <Link href={link} isExternal>
        <Button leftIcon={<FiGithub />} colorScheme="teal" w={140}>
          GitHub
        </Button>
      </Link>
    </VStack>
  </Box>
);

const Work = () => {
  return (
    <Container>
      <Heading as={'h3'} fontSize={20} mb={4}>
        Projects
      </Heading>
      <Divider my={6} />
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <GridItem thumbnail={test} title="Portfolio Website" link="#">
          A Portfolio website using React.js, Chakra UI and Three.js.
        </GridItem>
        <GridItem
          thumbnail={netflix}
          title="Netflix Clone"
          link="https://netflix-clone-88070.web.app/"
        >
          A Netflix clone website using React.js, Redux, IMDB API and hosted by
          firebase.
        </GridItem>
      </SimpleGrid>
    </Container>
  );
};

export default Work;
