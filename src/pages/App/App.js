import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import WelcomePage from '../WelcomePage/WelcomePage';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
      <NavBar />
      <WelcomePage />
    </div>
    );
  }
}

export default App;
