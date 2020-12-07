
import './App.css';
import Events from './component/Events'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NameForm from './component/Forms';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Events} />
          <Route exact path="/book" component={NameForm} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
