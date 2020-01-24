/** @jsx jsx */

import { useState } from 'react';
import './App.css';
import { jsx } from '@emotion/core';

import { ThemeProvider } from 'emotion-theming';
import Link from './lib/components/link/link';
import Card from './lib/components/card/card';
import Paper from './lib/components/paper/paper';
import VideoPlayer from './lib/components/video-player/video-player';
import Icon, { IconType } from './lib/components/icon/icon';
import theme from './theme/theme';
import VideoPlayButton from './lib/components/video-play-button/video-play-button';
import Button from './lib/components/button/button';
import Breadcrumb from './lib/components/breadcrumb/breadcrumb';
import Navbar from './lib/components/navbar/navbar';
import Spacer from './lib/components/spacer/spacer';
import Accordion from './lib/components/accordion/accordion';

const App: React.FC = () => {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="App" style={{ padding: '0 2rem' }}>
      <ThemeProvider theme={theme}>
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
                <Link className="cool" asButton primary href="https://www.google.com">
                  Yo
                </Link>
                <Button primary active>
                  Active Button
                </Button>
              </Navbar.Item>
              <Navbar.Item>
                <Link primary>Hello</Link>
              </Navbar.Item>
              <Navbar.Item>
                <Button asLink>Im a button link</Button>
              </Navbar.Item>
              <Navbar.Item>
                <Button secondary onClick={() => setPlaying(!playing)}>
                  Play Video
                </Button>
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
        <Spacer size={2} className=""/>
        <Breadcrumb
          items={[
            <Link primary href="/test" key="1">
              Hello
            </Link>,
            <Link primary active href="/test" key="2">
              Hello (Active)
            </Link>,
            <Link primary href="/test" key="3">
              Hello
            </Link>,
            <span key="4">Test</span>
          ]}
        />
        <div className="row">
          <h2>Forms</h2>
        </div>
        <div className="row">
          <Accordion isInverted allowZeroExpanded>
            <Accordion.Item>
              <Accordion.Header>
                <h1>Gotta catch'em all</h1>
              </Accordion.Header>
              <Accordion.Content>
                <p>hi check it</p>
              </Accordion.Content>
            </Accordion.Item>
            <Accordion.Item>
              <Accordion.Header>
                <h1>Sample header 2</h1>
              </Accordion.Header>
              <Accordion.Content>
                <p>hi check it 2</p>
              </Accordion.Content>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className="row">
          <Link underline="hover" href="lucidchart.com">
            Test Link <Icon type={IconType.ArrowRight} />
          </Link>
          <Link primary underline="hover" active href="lucidchart.com">
            Active Link
          </Link>
        </div>
        <div className="row">
          <Button size="small" primary>
            Small Button
          </Button>
          <Button size="regular" primary>
            Regular Button
          </Button>
          <Link primary buttonSize="regular" asButton href="/">
            <Icon type={IconType.RSS} />
            &nbsp; RSS
          </Link>
          <Button size="large" primary>
            Large Button
          </Button>
          <Link asButton buttonSize="large" primary>
            Large Button
          </Link>
        </div>
        <div className="row">
          Hello
          <Icon color="#F00" hoverColor="#0F0" type={IconType.Checkmark} />
          <Icon
            type={IconType.Checkmark}
            color="#FF0000"
            hoverColor="#000000"
            sizing="responsive"
          />
        </div>
        <div className="row">
          <h2>Video</h2>
        </div>
        <div className="row">
          <VideoPlayButton aria-label="Hello" />
          <VideoPlayer
            ratio="wide"
            url="https://www.youtube.com/watch?v=G8KpPw303PY"
            placeholder={() => (
              <img
                src="https://d2slcw3kip6qmk.cloudfront.net/marketing/blogs/chart/aws-add-on-blog-post-image.png"
                alt="something good"
              />
            )}
            playing={playing}
          />
        </div>
        <div className="row">
          <h2>Cards</h2>
        </div>
        <div className="row">
          <Card isInteractive as="section" horizontal>
            <Link href="http://lucidchart.com">
              <Card.Image>
                <img
                  alt="Image"
                  src="https://d2slcw3kip6qmk.cloudfront.net/marketing/blogs/chart/aws-add-on-blog-post-image.png"
                />
              </Card.Image>
              <Card.Content>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle>Card Subtitle</Card.Subtitle>
                <Card.Actions>
                  <Card.Action>Link</Card.Action>
                </Card.Actions>
              </Card.Content>
            </Link>
          </Card>
        </div>
        <div className="row">
          <h2>Paper</h2>
        </div>
        <div className="row">
          <Paper as="article" isRaised>
            Paper
          </Paper>
        </div>
      </ThemeProvider>
    </div>
  );
};

export default App;
