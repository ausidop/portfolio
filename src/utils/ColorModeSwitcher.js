import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label="Toggle theme"
      marginLeft={2}
      colorScheme={useColorModeValue('purple', 'orange')}
      icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
      onClick={toggleColorMode}
    ></IconButton>
  );
};
