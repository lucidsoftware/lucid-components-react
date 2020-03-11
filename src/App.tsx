/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import './App.css';

import { ThemeProvider } from 'emotion-theming';
import theme from './theme/theme';
import styled from './theme/styled';

import Box from './lib/components/box/box';
import Heading from './lib/components/heading/heading';
import Spacer from './lib/components/spacer/spacer';
import Form from './lib/components/form/form/form';
import Accordion from './lib/components/accordion/accordion';
import Navbar from './lib/components/navbar/navbar';
import Button from './lib/components/button/button';
import Link from './lib/components/link/link';

const StickyNav = styled.nav({
  display: 'flex',
  flexDirection: 'column'
});

const NavLink = styled.a(({ theme: theme2 }) => ({
  padding: theme2.space[1],
  color: theme2.colors.black,
  textDecoration: 'none'
}));

const App: React.FC = () => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Box width="300px" position="fixed" left="0" top="80px" pl={6}>
          <StickyNav>
            <NavLink href="#heading">Heading</NavLink>
            <NavLink href="#box">Box</NavLink>
            <NavLink href="">Spacer</NavLink>
            <NavLink href="#accordion">Accordion</NavLink>
          </StickyNav>
        </Box>

        <Box maxWidth={['100%', null, null, '800px']} margin="auto" pb={10}>
          <Box display="flex" flexDirection="column" bg="white" py={6}>
            <Heading
              as="h1"
              mx={0}
              my={4}
              variant="primary"
              fontSize={[7, null, 9, 10]}
            >
              Components
            </Heading>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto, eligendi ducimus inventore autem sit dolores modi
              tempora maxime sint consequatur itaque porro esse explicabo sunt a
              placeat distinctio. Quasi, eveniet!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto, eligendi ducimus inventore autem sit dolores modi
              tempora maxime sint consequatur itaque porro esse explicabo sunt a
              placeat distinctio. Quasi, eveniet!
            </p>

            <Spacer my={10} borderBottom="1px solid lightgrey" />

            <Heading
              as="h2"
              mx={0}
              my={4}
              variant="primary"
              fontSize={[7, null, 8, 9]}
              id="heading"
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

          <Spacer my={10} borderBottom="1px solid lightgrey" />

          <Heading
            as="h2"
            mx={0}
            my={4}
            variant="primary"
            fontSize={[7, null, 8, 9]}
            id="box"
          >
            Box component
          </Heading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            eligendi ducimus inventore autem sit dolores modi tempora maxime
            sint consequatur itaque porro esse explicabo sunt a placeat
            distinctio. Quasi, eveniet!
          </p>
          <ul>
            <li>Background</li>
            <li>Border</li>
            <li>Color</li>
            <li>Flexbox</li>
            <li>Grid</li>
            <li>Layout</li>
            <li>Position</li>
            <li>Shadow</li>
            <li>Space</li>
          </ul>

          <Box
            display="flex"
            flexDirection="column"
            color="white"
            bg="primary"
            p={4}
          >
            Hey I am BOX
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            color="primary"
            bg="white"
            p={4}
            my={2}
            border="1px solid lightgrey"
          >
            Hey I am BOX
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            color="primary"
            bg="white"
            p={4}
            my={2}
            border="1px solid lightgrey"
          >
            Hey I am BOX
          </Box>

          <Box
            display="flex"
            flexDirection="row"
            justifyContent="stretch"
            color="primary"
            bg="white"
            p={3}
            my={2}
            border="1px solid lightgrey"
          >
            <Box
              display="flex"
              width="100%"
              color="white"
              bg="black"
              justifyContent="center"
              borderRadius="4px"
              boxShadow="3px 3px 2px rgba(0, 0, 0, .15)"
              p={4}
              my={2}
              mx={2}
              border="1px solid lightgrey"
            >
              Hey I am BOX
            </Box>
            <Box
              display="flex"
              width="100%"
              color="white"
              bg="black"
              justifyContent="center"
              borderRadius="4px"
              boxShadow="3px 3px 2px rgba(0, 0, 0, .15)"
              p={4}
              my={2}
              mx={2}
              border="1px solid lightgrey"
            >
              Hey I am BOX
            </Box>
            <Box
              display="flex"
              width="100%"
              color="white"
              bg="black"
              justifyContent="center"
              borderRadius="4px"
              boxShadow="3px 3px 2px rgba(0, 0, 0, .15)"
              p={4}
              my={2}
              mx={2}
              border="1px solid lightgrey"
            >
              Hey I am BOX
            </Box>
          </Box>

          <Spacer my={10} borderBottom="1px solid lightgrey" />

          <Heading
            as="h2"
            mx={0}
            my={4}
            variant="primary"
            fontSize={[7, null, 8, 9]}
            id="accordion"
          >
            Accordion component
          </Heading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            eligendi ducimus inventore autem sit dolores modi tempora maxime
            sint consequatur itaque porro esse explicabo sunt a placeat
            distinctio. Quasi, eveniet!
            <a href="https://github.com/springload/react-accessible-accordion">
              React Accessible Accordion
            </a>
          </p>
          <Accordion allowZeroExpanded>
            <Accordion.Item>
              <Accordion.Heading>
                <Accordion.Button variant="default">Hello</Accordion.Button>
              </Accordion.Heading>
              <Accordion.Panel variant="default">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
                  quam amet nemo blanditiis! Nisi, autem harum. Delectus labore
                  asperiores sit rem ipsum quae maiores. Praesentium officiis
                  libero necessitatibus. Itaque, nesciunt!
                </p>
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item>
              <Accordion.Heading>
                <Accordion.Button variant="inverse">Hello</Accordion.Button>
              </Accordion.Heading>
              <Accordion.Panel variant="inverse">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
                  quam amet nemo blanditiis! Nisi, autem harum. Delectus labore
                  asperiores sit rem ipsum quae maiores. Praesentium officiis
                  libero necessitatibus. Itaque, nesciunt!
                </p>
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>

          <Spacer my={10} borderBottom="1px solid lightgrey" />

          <Heading
            as="h2"
            mx={0}
            my={4}
            variant="primary"
            fontSize={[7, null, 8, 9]}
            id="accordion"
          >
            Input component
          </Heading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            eligendi ducimus inventore autem sit dolores modi tempora maxime
            sint consequatur itaque porro esse explicabo sunt a placeat
            distinctio. Quasi, eveniet!
          </p>

          <Form pt={6}>
            <Form.Field disabled mt={7}>
              <Form.Label>Email</Form.Label>
              <Form.TextInput p={4} placeholder="Hello" />
            </Form.Field>
          </Form>

          <Form pt={6}>
            <Form.Field floating mt={7}>
              <Form.Label>Username</Form.Label>
              <Form.TextInput
                p={4}
                validate
                validator={evt => {
                  return evt.currentTarget.value.length > 5;
                }}
              />
            </Form.Field>

            <Form.Field disabled floating mt={7}>
              <Form.Label>Username</Form.Label>
              <Form.TextInput disabled p={4} placeholder="Hello" />
            </Form.Field>
            <Form.Field floating mt={7}>
              <Form.Label>Password</Form.Label>
              <Form.TextInput type="password" p={4} placeholder="Hello" />
            </Form.Field>

            <Form.Label variant="default">Password</Form.Label>
          </Form>
        </Box>

        <Navbar sticky>
          <Navbar.Container className="nav-container">
            <Navbar.Brand>
              <Link href="https://www.google.com">
                <img
                  src="https://d2slcw3kip6qmk.cloudfront.net/marketing/images/lucidchart-vector-logo.svg"
                  alt="Logo"
                  style={{ width: '200px' }}
                />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle>Menu</Navbar.Toggle>
            <Navbar.InnerContainer>
              <Navbar.Item>
                <Button secondary>Play Video</Button>
              </Navbar.Item>
              <Navbar.Item>I am just some text</Navbar.Item>
              <Navbar.Item>
                <Navbar.Dropdown
                  toggle={toggleHandler => (
                    <Button primary onMouseOver={toggleHandler}>
                      A Dropdown
                    </Button>
                  )}
                >
                  <Navbar.DropdownContainer>
                    <Link href="https://www.microsoft.com">
                      Some valid link
                    </Link>
                    <Link>An invalid link</Link>
                    <Link primary href="https://www.microsoft.com">
                      Some 3rd link with an absurdly long name for reals
                    </Link>
                    <Link href="https://www.microsoft.com">
                      Some 4th link with long name
                    </Link>
                    <p>Some Label</p>
                    <Link href="https://www.microsoft.com">
                      Some 4th link with long name
                    </Link>
                  </Navbar.DropdownContainer>
                </Navbar.Dropdown>
              </Navbar.Item>
              <Navbar.Item>
                <Navbar.Dropdown
                  style={{ position: 'static' }}
                  toggle={toggleHandler => (
                    <Button asLink onMouseOver={toggleHandler}>
                      A Second Dropdown
                    </Button>
                  )}
                >
                  <Navbar.DropdownContainer
                    css={{ maxWidth: '1000px', flexWrap: 'nowrap' }}
                  >
                    <div style={{ width: '50%' }}>
                      <p>Hello</p>
                      <span
                        css={{
                          display: 'inline-block',
                          width: 'auto',
                          padding: '0',
                          marginBottom: '.5rem',
                          fontWeight: 600
                        }}
                      >
                        Howdy
                      </span>
                    </div>
                    <Navbar.DropdownGroup>
                      <p>Some Header</p>
                      <Link
                        css={{ display: 'flex', width: '20px' }}
                        href="https://www.microsoft.com"
                      >
                        Some valid link
                      </Link>
                      <Link href="https://www.microsoft.com">
                        Some valid link
                      </Link>
                      <Link href="https://www.microsoft.com">
                        Some valid link
                      </Link>
                    </Navbar.DropdownGroup>

                    <Navbar.DropdownGroup>
                      <p>Another Header</p>
                      <Link>An invalid link</Link>
                      <Link primary href="https://www.microsoft.com">
                        Some 3rd link with an absurdly long name for reals
                      </Link>
                      <Link href="https://www.microsoft.com">
                        Some 4th link with long name
                      </Link>
                      <p>Some Label</p>
                      <Link href="https://www.microsoft.com">
                        Some 4th link with long name
                      </Link>
                    </Navbar.DropdownGroup>
                  </Navbar.DropdownContainer>
                </Navbar.Dropdown>
              </Navbar.Item>
            </Navbar.InnerContainer>
            <Navbar.Border />
          </Navbar.Container>
        </Navbar>
      </ThemeProvider>
    </div>
  );
};

export default App;
