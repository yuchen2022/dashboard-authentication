import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeContext, { ThemeProvider } from './styles/theme-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider >
    <App />
</ThemeProvider>
);

