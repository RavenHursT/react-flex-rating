import React from 'react'
import { render } from 'react-dom'
import App from './app'

if (module.hot) module.hot.accept()

render(
  <React.StrictMode><App /></React.StrictMode>,
  document.getElementById('demo')
)
