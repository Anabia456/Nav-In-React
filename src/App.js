import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/Home'
import Services from './pages/Services'
import Contact  from './pages/Contact'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/services' component={Services}/>
            <Route path='/contact' component={Contact}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
