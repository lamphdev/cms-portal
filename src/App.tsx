import React from 'react'
import './styles/variables.module.scss'
import './styles/globals.scss'
import { RouterProvider } from 'react-router-dom'
import { router } from './router-config'
import { ThemeProvider } from '@emotion/react'
import { theme } from './theme'

function App () {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
  )
}

export default App
