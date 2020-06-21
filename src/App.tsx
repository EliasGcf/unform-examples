import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Form from './pages/Form';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <GlobalStyle />
      <Form />
    </BrowserRouter>
  );
};
export default App;
