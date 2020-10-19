/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { ThemeProvider } from 'emotion-theming';

import theme from './theme/theme';
import styled from './theme/styled';
import Accordion from './lib/components/accordion/accordion';
import Box from './lib/components/box/box';
import Button from './lib/components/button/button';
import Card from './lib/components/card/card';
import Collection from './lib/components/collection/collection';
import Form from './lib/components/form/form/form';
import Heading from './lib/components/heading/heading';
import Link from './lib/components/link/link';
import Navbar from './lib/components/navbar/navbar';
import NavbarWrapper from './lib/components/navbar/navbar-wrapper';
import Paper from './lib/components/paper/paper';
import Spacer from './lib/components/spacer/spacer';
import './App.css';

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
        <Box left="0" pl={6} position="fixed" top="80px" width="300px">
          <StickyNav>
            <NavLink href="#heading">Heading</NavLink>
            <NavLink href="#box">Box</NavLink>
            <NavLink href="">Spacer</NavLink>
            <NavLink href="#accordion">Accordion</NavLink>
          </StickyNav>
        </Box>

        <Box margin="auto" maxWidth={['100%', null, null, '800px']} pb={10}>
          <Box bg="white" display="flex" flexDirection="column" py={6}>
            <Heading
              as="h1"
              fontSize={[7, null, 9, 10]}
              mx={0}
              my={4}
              variant="primary"
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

            <Spacer borderBottom="1px solid lightgrey" my={10} />

            <Heading
              as="h2"
              fontSize={[7, null, 8, 9]}
              id="heading"
              mx={0}
              my={4}
              variant="primary"
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
              fontSize={[7, null, 9, 10]}
              m={0}
              variant="primary"
            >
              Heading 1
            </Heading>
            <Heading as="h1" fontSize={[6, null, 8, 9]} m={0} variant="primary">
              Heading 2
            </Heading>
            <Heading as="h2" fontSize={[6, null, 8, 8]} m={0} variant="primary">
              Heading 3
            </Heading>
            <Heading as="h2" fontSize={[6, null, 8, 7]} m={0} variant="primary">
              Heading 4
            </Heading>
            <Heading as="h2" fontSize={[6, null, 8, 6]} m={0} variant="primary">
              Heading 5
            </Heading>
            <Heading as="h2" fontSize={[6, null, 8, 5]} m={0} variant="primary">
              Heading 6
            </Heading>
          </Box>
          <Spacer py={2} />
          <Box bg="white" display="flex" flexDirection="column" py={6}>
            <Heading
              as="h1"
              fontSize={[7, null, 9, 10]}
              m={0}
              variant="subheading"
            >
              Subheading 1
            </Heading>
            <Heading
              as="h1"
              fontSize={[6, null, 8, 9]}
              m={0}
              variant="subheading"
            >
              Subheading 2
            </Heading>
            <Heading
              as="h2"
              fontSize={[6, null, 8, 8]}
              m={0}
              variant="subheading"
            >
              Subheading 3
            </Heading>
            <Heading
              as="h2"
              fontSize={[6, null, 8, 7]}
              m={0}
              variant="subheading"
            >
              Subheading 4
            </Heading>
            <Heading
              as="h2"
              fontSize={[6, null, 8, 6]}
              m={0}
              variant="subheading"
            >
              Subheading 5
            </Heading>
            <Heading
              as="h2"
              fontSize={[6, null, 8, 5]}
              m={0}
              variant="subheading"
            >
              Subheading 6
            </Heading>
          </Box>

          <Spacer borderBottom="1px solid lightgrey" my={10} />

          <Heading
            as="h2"
            fontSize={[7, null, 8, 9]}
            id="heading"
            mx={0}
            my={4}
            variant="primary"
          >
            Button component
          </Heading>

          <Spacer py={4} />

          <Box>
            <Button>Regular</Button>
          </Box>

          <Box mt={3}>
            <Button primary>Primary</Button>
          </Box>

          <Box mt={3}>
            <Button secondary>Secondary</Button>
          </Box>

          <Box mt={3}>
            <Button disabled>Disabled</Button>
          </Box>

          <Spacer borderBottom="1px solid lightgrey" my={10} />

          <Heading
            as="h2"
            fontSize={[7, null, 8, 9]}
            id="heading"
            mx={0}
            my={4}
            variant="primary"
          >
            Collection component
          </Heading>

          <Spacer py={4} />

          <Collection
            css={{ margin: `0 ${theme.space[8]}px` }}
            hSpace={3}
            justify="full"
            verticalJustify="center"
            vSpace={3}
          >
            <Button>Button</Button>
            <Button primary>Primary button</Button>
            <Card variant="interactive">
              <Card.Content p={5}>Interactive card</Card.Content>
            </Card>
            <Button secondary>Secondary button</Button>
            <Button disabled>Disabled button</Button>
            <Link>Link</Link>
            <Button>Button with a long string of text</Button>
            <Box
              bg="primary"
              color="white"
              display="flex"
              flexDirection="column"
              p={4}
            >
              Styled box
            </Box>
            <Button>+</Button>
            <Card variant="raised">
              <Card.Content p={5}>Card</Card.Content>
            </Card>
          </Collection>

          <Spacer borderBottom="1px solid lightgrey" my={10} />

          <Heading
            as="h2"
            fontSize={[7, null, 8, 9]}
            id="box"
            mx={0}
            my={4}
            variant="primary"
          >
            Card component
          </Heading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            eligendi ducimus inventore autem sit dolores modi tempora maxime
            sint consequatur itaque porro esse explicabo sunt a placeat
            distinctio. Quasi, eveniet!
          </p>

          <Card variant="default">
            <Card.Content p={5}>Default Card</Card.Content>
          </Card>

          <Card mt={5} variant="raised">
            <Card.Content p={5}>Raised Card</Card.Content>
          </Card>

          <Card mt={5} variant="interactive">
            <Card.Content p={5}>Interactive Card</Card.Content>
          </Card>

          <Paper mt={5} variant="raised">
            Paper
          </Paper>

          <Spacer borderBottom="1px solid lightgrey" my={10} />

          <Heading
            as="h2"
            fontSize={[7, null, 8, 9]}
            id="box"
            mx={0}
            my={4}
            variant="primary"
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
            bg="primary"
            color="white"
            display="flex"
            flexDirection="column"
            p={4}
          >
            Hey I am BOX
          </Box>
          <Box
            bg="white"
            border="1px solid lightgrey"
            color="primary"
            display="flex"
            flexDirection="column"
            my={2}
            p={4}
          >
            Hey I am BOX
          </Box>
          <Box
            bg="white"
            border="1px solid lightgrey"
            color="primary"
            display="flex"
            flexDirection="column"
            my={2}
            p={4}
          >
            Hey I am BOX
          </Box>

          <Box
            bg="white"
            border="1px solid lightgrey"
            color="primary"
            display="flex"
            flexDirection="row"
            justifyContent="stretch"
            my={2}
            p={3}
          >
            <Box
              bg="black"
              border="1px solid lightgrey"
              borderRadius="4px"
              boxShadow="3px 3px 2px rgba(0, 0, 0, .15)"
              color="white"
              display="flex"
              justifyContent="center"
              mx={2}
              my={2}
              p={4}
              width="100%"
            >
              Hey I am BOX
            </Box>
            <Box
              bg="black"
              border="1px solid lightgrey"
              borderRadius="4px"
              boxShadow="3px 3px 2px rgba(0, 0, 0, .15)"
              color="white"
              display="flex"
              justifyContent="center"
              mx={2}
              my={2}
              p={4}
              width="100%"
            >
              Hey I am BOX
            </Box>
            <Box
              bg="black"
              border="1px solid lightgrey"
              borderRadius="4px"
              boxShadow="3px 3px 2px rgba(0, 0, 0, .15)"
              color="white"
              display="flex"
              justifyContent="center"
              mx={2}
              my={2}
              p={4}
              width="100%"
            >
              Hey I am BOX
            </Box>
          </Box>

          <Spacer borderBottom="1px solid lightgrey" my={10} />

          <Heading
            as="h2"
            fontSize={[7, null, 8, 9]}
            id="accordion"
            mx={0}
            my={4}
            variant="primary"
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

          <Spacer borderBottom="1px solid lightgrey" my={10} />

          <Heading
            as="h2"
            fontSize={[7, null, 8, 9]}
            id="accordion"
            mx={0}
            my={4}
            variant="primary"
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
                validate
                p={4}
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
              <Form.TextInput p={4} placeholder="Hello" type="password" />
            </Form.Field>

            <Form.Label variant="default">Password</Form.Label>
          </Form>
        </Box>
        <NavbarWrapper>
          <Navbar>
            <Navbar.Container className="nav-container">
              <Navbar.Brand>
                <Link href="https://www.google.com">
                  <img
                    alt="Logo"
                    src="https://d2slcw3kip6qmk.cloudfront.net/marketing/images/lucidchart-vector-logo.svg"
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
                    toggle={() => (
                      <Navbar.DropdownContext.Consumer>
                        {({ isOpen }) => (
                          <Button primary>
                            {`Dropdown is ${isOpen ? 'open' : 'closed'}`}
                          </Button>
                        )}
                      </Navbar.DropdownContext.Consumer>
                    )}
                  >
                    <Navbar.DropdownContainer mobileToggle>
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
                      <Navbar.DropdownContext.Consumer>
                        {({ isOpen }) => (
                          <Button
                            asLink
                            onClick={toggleHandler}
                            onMouseOver={toggleHandler}
                          >
                            {`Dropdown is ${isOpen ? 'open' : 'closed'}`}
                          </Button>
                        )}
                      </Navbar.DropdownContext.Consumer>
                    )}
                  >
                    <Navbar.DropdownContainer
                      mobileToggle
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
        </NavbarWrapper>
      </ThemeProvider>
    </div>
  );
};

export default App;
