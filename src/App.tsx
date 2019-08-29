import React from 'react';
import './App.css';

import { ThemeProvider } from 'emotion-theming'
import Link from './lib/components/link/link';
import Card from './lib/components/card/card';
import Paper from './lib/components/paper/paper';
import VideoPlayer from './lib/components/video-player/video-player';
import Icon, {IconType} from './lib/components/icon/icon';
import theme from './theme/theme';
import VideoPlayButton from './lib/components/video-play-button/video-play-button';
import Button from './lib/components/button/button';
import Breadcrumb from './lib/components/breadcrumb/breadcrumb';

const App: React.FC = () => {
  return (
    <div className="App" style={{padding: '2rem'}}>
      <ThemeProvider theme={theme}>
        <Breadcrumb items={[<Link primary href="/test">Hello</Link>, <Link primary href="/test">Hello</Link>, <Link primary href="/test">Hello</Link>, <span>Test</span>]} />
        <div style={{ height: '400px', width: '500px'}}>
          <Card
            title="Card Title"
            titleAs="h2"
            subtitle="Subtitle"
            subtitleAbove
            isInteractive
            horizontal
            href="http://lucidchart.com"
            noPadding
            >
              Hello
          </Card>
        </div>

        <Link underline="hover" href="lucidchart.com">Test Link <Icon type={IconType.ArrowRight} /></Link>
        <p>Hello <Icon color="#F00" hoverColor="#0F0" type={IconType.Checkmark} flip="vertical" /></p>

        <VideoPlayer ratio="wide" url="baz" placeholder={() => <img src="https://d2slcw3kip6qmk.cloudfront.net/marketing/blogs/chart/aws-add-on-blog-post-image.png" />} />
        <VideoPlayButton aria-label="Hello" />
        <Icon type={IconType.Checkmark} color="#FF0000" hoverColor="#000000" sizing="responsive" />
        <Button asLink>Hello</Button>
        <Card
          isInteractive
          href="acsdcasd"
          className="fun-flowchart-hub__chart"
          title="entity.title!"
          subtitle="Subtitle"
          subtitleAbove
          thumbnail={() =>
            <img
              className="fun-flowchart-hub__chart-thumb"
              src="https://d2slcw3kip6qmk.cloudfront.net/marketing/blogs/chart/aws-add-on-blog-post-image.png"
              alt="entity.fieldAltText!"
            />
          }
        />
        <br/>
        <br/>
        <div style={{ height: '400px', width: '600px'}}>
          <Card
            title="Card Title"
            titleAs="h2"
            subtitle="Subtitle"
            thumbnail="https://d2slcw3kip6qmk.cloudfront.net/marketing/blogs/chart/aws-add-on-blog-post-image.png"
            isRaised
            actions={
              [<a href="#">Link</a>, <a href="#">Link</a>]
            }
            >
          </Card>
        </div>
        <br/>
        <br/>
        <Paper as="article" isRaised>Paper</Paper>
      </ThemeProvider>
    </div>
  );
}

export default App;
