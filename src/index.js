import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App/App';
import GlobalStyle from './components/GlobalStyle/GlobalStyle';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle/>
    <App />
    </React.StrictMode>,
  document.getElementById('root')
);
