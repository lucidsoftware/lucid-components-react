import React from 'react';
import './App.css';

import { ThemeProvider } from 'emotion-theming'
import Card from './lib/components/card/card';
import Paper from './lib/components/paper/paper';
import Icon, {IconType} from './lib/components/icon/icon';
import theme from './theme/theme';

const App: React.FC = () => {
  return (
    <div className="App" style={{padding: '2rem'}}>
      <ThemeProvider theme={theme}>
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

        <Icon type={IconType.Checkmark} color="#FF0000" hoverColor="#000000" />

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
