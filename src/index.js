/* eslint-disable import-helpers/order-imports */
import React from 'react'
import { createRoot } from 'react-dom/client'
import { ToastContainer } from 'react-toastify'

// eslint-disable-next-line no-unused-vars
import Routes from './routes/routes'
import { UserProvider } from './hooks/UserContext'
import GlobalStyles from './styles/globalStyles'

document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById('root')
  if (rootElement) {
    createRoot(rootElement).render(
      <>
        <UserProvider>
          <Routes />
        </UserProvider>
        <ToastContainer autoClose={2000} theme="colored" />
        <GlobalStyles />
      </>
    )
  } else {
    console.error('Element with ID "root" not found in the document.')
  }
})
