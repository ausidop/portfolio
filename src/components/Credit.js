import { Container, Link } from '@chakra-ui/react';
import React from 'react';

const Credit = () => {
  return (
    <Container as="p" align="center" opacity={0.4} fontSize="xs" my={6}>
      This work is based on{' '}
      <Link
        color={'teal'} href="https://sketchfab.com/3d-models/white-and-black-voxel-cat-d25ff8a86e7b497cbc38bc945bdd693b"
        isExternal
      >
        "White and Black Voxel Cat"
      </Link>{' '}
      by{' '}
      <Link color={'teal'} href="https://sketchfab.com/BatatinhaRussa2021" isExternal>
        BatatinhaRussa2021
      </Link>{' '}
      licensed under{' '}
      <Link color={'teal'} href="http://creativecommons.org/licenses/by/4.0/" isExternal>
        CC-BY-4.0
      </Link>
    </Container>
  );
};

export default Credit;
