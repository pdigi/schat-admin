import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

import Nav from "./components/Nav";
import Dashboard from './pages/Dashboard';
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Nav comp={<Dashboard />} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
