import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
       <BrowserRouter>
        <NavBar />
       </BrowserRouter>
      </div>
    );
  }
}

export default App;
