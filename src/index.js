import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App() {
  return <h1>Hello, React!</h1>;
}

const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(<App />);