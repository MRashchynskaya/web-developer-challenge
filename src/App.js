import Header from './components/Header';
import 'normalize.css';
import {
  Box
} from 'rebass';

import { ThemeProvider } from 'emotion-theming';
import theme from './theme';
import Slider from './components/Slider';
import CompareProducts from './components/CompareProducts';
import InformationBlock from './components/InformationBlock';

const container = {
  maxWidth: '1480px',
  mx: 'auto',
  px: [null, 4]
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={container}>
        <Header />
        <Box as="main">
          <Slider />
          <CompareProducts />
          <InformationBlock />
        </Box>
      </Box>
    </ThemeProvider >
  );
}

export default App;
