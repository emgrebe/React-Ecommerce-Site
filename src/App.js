import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import Cart from './components/Cart/Cart'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <NavBar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/cart' component={Cart} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
