import React from 'react';
import './App.css';

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

const App: React.FC = () => {
  return (
    <div className="App" style={{ padding: '0 2rem' }}>
      <ThemeProvider theme={theme}>
        <Navbar sticky>
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
          <Navbar.Container>
            <Navbar.Item>
              <Link primary href="https://www.google.com">
                Yo
              </Link>
            </Navbar.Item>
            <Navbar.Item>
              <Link asButton primary>
                Hello
              </Link>
            </Navbar.Item>
            <Navbar.Item>
              <Button secondary>Yo</Button>
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
                <Link href="https://www.microsoft.com">Some valid link</Link>
                <Link>An invalid link</Link>
                <Link primary href="https://www.microsoft.com">
                  Some 3rd link with an absurdly long name for reals
                </Link>
                <Link href="https://www.microsoft.com">
                  Some 4th link with long name
                </Link>
              </Navbar.Dropdown>
            </Navbar.Item>
          </Navbar.Container>
        </Navbar>
        <Breadcrumb
          items={[
            <Link primary href="/test">
              Hello
            </Link>,
            <Link primary href="/test">
              Hello
            </Link>,
            <Link primary href="/test">
              Hello
            </Link>,
            <span>Test</span>
          ]}
        />
        <h1>Some Header</h1>

        <Link underline="hover" href="lucidchart.com">
          Test Link <Icon type={IconType.ArrowRight} />
        </Link>
        <p>
          Hello{' '}
          <Icon
            color="#F00"
            hoverColor="#0F0"
            type={IconType.Checkmark}
            flip="vertical"
          />
        </p>

        <VideoPlayer
          ratio="wide"
          url="baz"
          placeholder={() => (
            <img src="https://d2slcw3kip6qmk.cloudfront.net/marketing/blogs/chart/aws-add-on-blog-post-image.png" />
          )}
        />
        <VideoPlayButton aria-label="Hello" />
        <Icon
          type={IconType.Checkmark}
          color="#FF0000"
          hoverColor="#000000"
          sizing="responsive"
        />
        <Button asLink>Hello</Button>
        <br />
        <Button primary iconPosition="after" iconType={IconType.CarotRight}>
          Button with icon
        </Button>
        <br />
        <br />
        <br />
        <div style={{ height: '400px', width: '600px' }}>
          <Card isInteractive>
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
                  <Card.Action>
                    <a href="#">Link</a>
                  </Card.Action>
                </Card.Actions>
              </Card.Content>
            </Link>
          </Card>
        </div>

        <br />
        <br />
        <Paper as="article" isRaised>
          Paper
        </Paper>
      </ThemeProvider>
    </div>
  );
};

export default App;
