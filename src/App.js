import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Home from './components/Home'
import Login from './components/Login'
import Operation from './components/Operation'
import AddTask from './components/AddTask'
import Valores from './components/Home'
export let tempOperation = "as";

let aa = Valores;
function App() {


  
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/operationTask">
            <Operation />
          </Route>
          <Route path="/addTask">
            <AddTask />
          </Route>
          
          
          
        </Switch>


      </div>

    </Router>
  )
}

export default App

