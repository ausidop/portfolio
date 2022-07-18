import { Box } from '@chakra-ui/react';

const Footer = () => {
  return <Box align="center" opacity={0.4} fontSize="sm" my={4}>
     &copy; {new Date().getFullYear()} Chergang Chang. All Rights Reserved.
  </Box>;
};

export default Footer;
