import React from 'react';
import ReactDOM from 'react-dom';
import styled, { ThemeProvider } from 'styled-components';
import App from './App';
import GlobalStyles from './globalStyles';
import * as serviceWorker from './serviceWorker';

const theme = {
  skobeloff: '#00747f',
  orange: '#f6511d',
  black: '#050104',
  jet: '#323031',
  maxWidth: '85rem',
  bs: '5px 5px 20px 0 rgba(0,0,0,0.50);',
};

const Page = styled.div``;
const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
`;

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Page>
      <Inner>
        <GlobalStyles />
        <App />
      </Inner>
    </Page>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
