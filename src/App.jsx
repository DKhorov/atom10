import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import store from './system/redux/store';
import AppRouter from './system/router';
import UserProvider from './components/UserProvider';
import './style/global.scss';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: 'rgba(0, 0, 0, 1)',
      paper: 'rgba(34, 40, 47, 1)',
    },
  },
  typography: {
    fontFamily: '"Yandex Sans", "Roboto", "Helvetica", "Arial", sans-serif',
  },
});

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <UserProvider>
          <BrowserRouter>
            <AppRouter />
          </BrowserRouter>
        </UserProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default App; 
