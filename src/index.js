import React from 'react';
import ReactDOM from 'react-dom';
import Login from './containers/Login';
import GlobalStyles from './styles/globalStyles';

document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById('root');
  if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
      <>
        <Login />
        <GlobalStyles />
      </>,

    );
  } else {
    console.error('Element with ID "root" not found in the document.');
  }
});
