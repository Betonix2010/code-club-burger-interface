/* eslint-disable import-helpers/order-imports */
import React from 'react'
import ReactDOM from 'react-dom'

// eslint-disable-next-line no-unused-vars
import Login from './containers/Login'
import Register from './containers/Register'

import GlobalStyles from './styles/globalStyles'

document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById('root')
  if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
      <>
        <Register />
        <GlobalStyles />
      </>
    )
  } else {
    console.error('Element with ID "root" not found in the document.')
  }
})
