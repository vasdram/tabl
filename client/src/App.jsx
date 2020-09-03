import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Upload } from './components/upload';
import { Header } from './components/Header/Header.jsx';

function App() {
  return (
    <>
    <Header />
    <div className="container">
      <Upload />
    </div>
    </>
  );
}

export default App;
