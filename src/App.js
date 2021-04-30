import { Route, Switch, Link, BrowserRouter } from 'react-router-dom'
// import './App.css';

import Header from './components/header'
import Home from './pages/home'
import Login from './pages/login'

function App() {
  return (
    <div className="page-holder">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </BrowserRouter>    
    </div>
  )
}

export default App;
