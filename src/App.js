import React from 'react'
import { HashRouter } from 'react-router-dom';
import { AppRouter } from './router/AppRouter';
import { GlobalStyle } from './ui/GlobalStyle';


export const App = () => {
  return (
    <>
    <GlobalStyle />
    <HashRouter>
      <AppRouter />
    </HashRouter>
    </>
  )
}

export default App;
