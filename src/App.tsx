/** @jsx jsx */
import { jsx } from 'theme-ui';

import React from 'react';
import './App.css';

import { ThemeProvider } from 'theme-ui';
import Heading from './lib/components/heading/heading';
// import Link from './lib/components/link/link';
// import Card from './lib/components/card/card';
// import Paper from './lib/components/paper/paper';
// import VideoPlayer from './lib/components/video-player/video-player';
// import Icon, { IconType } from './lib/components/icon/icon';
import theme from './theme/theme';
// import VideoPlayButton from './lib/components/video-play-button/video-play-button';
// import Button from './lib/components/button/button';
// import Breadcrumb from './lib/components/breadcrumb/breadcrumb';
// import Navbar from './lib/components/navbar/navbar';
// import Spacer from './lib/components/spacer/spacer';
// import Accordion from './lib/components/accordion/accordion';
// import SelectForm from './lib/components/select/select-form';

const App: React.FC = () => {
  // const [playing, setPlaying] = useState(false);
  return (
    <div className="App" style={{ padding: '0 2rem' }}>
      <ThemeProvider theme={theme}>
        <Heading
          as="h2"
          variant="heading"
          fontSize={9}
          mt={1}
          sx={{
            mb: 9 // margin-bottom
            // fontSize: 9 // picks up value from `theme.fontSizes[4]`
          }}
        >
          Test
        </Heading>
      </ThemeProvider>
    </div>
  );
};

export default App;
