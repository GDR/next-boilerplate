import React from 'react';
import withRedux from 'next-redux-wrapper';
import configureStore from '../lib/configureStore';
import withTheme from '../hocs/withTheme';

@withTheme
@withRedux(configureStore)
class IndexPage extends React.Component {
  render() {
    return (
      <div className="test">
        Hello, world!
        <style jsx>{`
          .test {
            background: green;
          }
        `}</style>
      </div>
    );
  }
}

export default IndexPage;
