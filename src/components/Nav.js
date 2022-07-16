import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../utils/ColorModeSwitcher';
import { HamburgerIcon } from '@chakra-ui/icons';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

const Nav = () => {
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justifyContent={'space-between'}
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Link>
              <Text fontSize="lg" ml={3}>
                Chergang Chang
              </Text>
            </Link>
          </Heading>
        </Flex>

        <Flex
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          justifyContent={'space-between'}
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <HStack spacing={4}>
            <Link
              p={3}
              _hover={{
                textDecoration: 'none',
                bg: useColorModeValue('gray.200', 'gray.700'),
              }}
            >
              Skills
            </Link>
            <Link
              p={3}
              _hover={{
                textDecoration: 'none',
                bg: useColorModeValue('gray.200', 'gray.700'),
              }}
            >
              Project
            </Link>
            <Link
              p={3}
              _hover={{
                textDecoration: 'none',
                bg: useColorModeValue('gray.200', 'gray.700'),
              }}
            >
              Contact
            </Link>
          </HStack>

          <HStack>
            <IconButton size="md" aria-label="Linkedin" icon={<FiLinkedin />} />
            <IconButton size="md" aria-label="Github" icon={<FiGithub />} />
          </HStack>
        </Flex>

        <Box flex={{ base: '1', md: '0' }} my={'auto'} align="right">
          <ColorModeSwitcher />
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <MenuItem as={Link}>About</MenuItem>
                <MenuItem as={Link}>Work</MenuItem>
                <MenuItem as={Link}>Contact</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Nav;
