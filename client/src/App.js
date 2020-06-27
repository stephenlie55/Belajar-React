import React, {Component} from 'react'
import './App.css'
import NavBar from './components/navbar.js'
import HeroList from './components/herolist.js'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Detail from './components/detail.js'
import MyAvengers from './components/myavengers.js'

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar/>
          <Route exact path="/" component={HeroList}/>
          <Route path="/detail/:id" component={Detail}/>
          <Route path="/myAvengers" component={MyAvengers}/>
        </div>
      </Router>
    )
  }
}
export default App;
