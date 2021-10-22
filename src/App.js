import './App.css';
import Home from './pages/Home'
// React Router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
