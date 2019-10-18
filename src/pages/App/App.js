import React from 'react';
import NavBarHeader from '../../components/NavBar/NavBarHeader';
import NavBarFooter from '../../components/NavBar/NavBarFooter';
import WelcomePage from '../WelcomePage/WelcomePage';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
      <NavBarHeader />
      <NavBarFooter />
      <WelcomePage />
    </div>
    );
  }
}

export default App;
