import React from 'react';
import withRedux from 'next-redux-wrapper';
import configureStore from '../lib/configureStore';
import withTheme from '../hocs/withTheme';
import '../styles/global.scss';

@withTheme
@withRedux(configureStore)
class IndexPage extends React.Component {
  render() {
    return (
      <div>
        Hello, world!
        <img src="/static/images/warning-icon.svg"/>
      </div>
    );
  }
}

export default IndexPage;
