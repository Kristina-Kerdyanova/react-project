import { BrowserRouter, HashRouter } from 'react-router-dom';
import { AppRouter } from './router/AppRouter';
import { GlobalStyle } from './ui/GlobalStyle';


export const App = () => {
  return (
    <>
    <GlobalStyle />
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
    </>
  )
}

export default App;
