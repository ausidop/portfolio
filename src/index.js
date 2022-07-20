import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import theme from './utils/theme';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </StrictMode>
);
