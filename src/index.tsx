import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { StylesProvider } from '@material-ui/core/styles'
import GlobalStyle from './styles/global'
import store from './store/index'
import Routes from './Routes'
import theme from './styles/theme'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <Routes />
          </Provider>
          <GlobalStyle />
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
