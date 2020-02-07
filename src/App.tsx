import React from 'react';
import './App.css';

import { ThemeProvider } from 'emotion-theming';
import theme from './theme/theme';

import Box from './lib/components/box/box';
import Heading from './lib/components/heading/heading';
import Spacer from './lib/components/spacer/spacer';

const App: React.FC = () => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Box maxWidth={['100%', null, null, '1000px']} margin="auto">
          <Box display="flex" flexDirection="column" bg="white" py={6}>
            <Heading
              as="h1"
              mx={0}
              my={4}
              variant="primary"
              fontSize={[7, null, 9, 11]}
            >
              Typography
            </Heading>
            <Heading
              as="h2"
              mx={0}
              my={4}
              variant="primary"
              fontSize={[4, null, 5, 6]}
            >
              Heading component
            </Heading>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto, eligendi ducimus inventore autem sit dolores modi
              tempora maxime sint consequatur itaque porro esse explicabo sunt a
              placeat distinctio. Quasi, eveniet!
            </p>
            <pre>
              {`
              <Heading
                as="h2"
                mx={0}
                my={4}
                variant="primary"
                fontSize={[4, null, 5, 6]}
              >
                Heading component
              </Heading>`}
            </pre>
            <Spacer py={4} />

            <Heading
              as="h1"
              m={0}
              variant="primary"
              fontSize={[7, null, 9, 10]}
            >
              Heading 1
            </Heading>
            <Heading as="h1" m={0} variant="primary" fontSize={[6, null, 8, 9]}>
              Heading 2
            </Heading>
            <Heading as="h2" m={0} variant="primary" fontSize={[6, null, 8, 8]}>
              Heading 3
            </Heading>
            <Heading as="h2" m={0} variant="primary" fontSize={[6, null, 8, 7]}>
              Heading 4
            </Heading>
            <Heading as="h2" m={0} variant="primary" fontSize={[6, null, 8, 6]}>
              Heading 5
            </Heading>
            <Heading as="h2" m={0} variant="primary" fontSize={[6, null, 8, 5]}>
              Heading 6
            </Heading>
          </Box>
          <Spacer py={2} />
          <Box display="flex" flexDirection="column" bg="white" py={6}>
            <Heading
              as="h1"
              m={0}
              variant="subheading"
              fontSize={[7, null, 9, 10]}
            >
              Subheading 1
            </Heading>
            <Heading
              as="h1"
              m={0}
              variant="subheading"
              fontSize={[6, null, 8, 9]}
            >
              Subheading 2
            </Heading>
            <Heading
              as="h2"
              m={0}
              variant="subheading"
              fontSize={[6, null, 8, 8]}
            >
              Subheading 3
            </Heading>
            <Heading
              as="h2"
              m={0}
              variant="subheading"
              fontSize={[6, null, 8, 7]}
            >
              Subheading 4
            </Heading>
            <Heading
              as="h2"
              m={0}
              variant="subheading"
              fontSize={[6, null, 8, 6]}
            >
              Subheading 5
            </Heading>
            <Heading
              as="h2"
              m={0}
              variant="subheading"
              fontSize={[6, null, 8, 5]}
            >
              Subheading 6
            </Heading>
          </Box>

          <Heading
            as="h2"
            mx={0}
            my={4}
            variant="primary"
            fontSize={[4, null, 5, 6]}
          >
            Box component
          </Heading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            eligendi ducimus inventore autem sit dolores modi tempora maxime
            sint consequatur itaque porro esse explicabo sunt a placeat
            distinctio. Quasi, eveniet!
          </p>
          <Box
            display="flex"
            flexDirection="column"
            color="white"
            bg="primary"
            p={6}
          >
            Hey I am BOX
          </Box>
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default App;
