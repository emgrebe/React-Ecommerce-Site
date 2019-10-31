import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'

class App extends React.Component {
  render() {
    return (
      <div className="App">
       <BrowserRouter>
        <NavBar />
       </BrowserRouter>
       <Home />
      </div>
    )
  }
}

export default App
