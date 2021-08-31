import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

import Nav from "./components/Nav";
import Dashboard from './pages/Dashboard';
import Chats from './pages/Chats';
import ChatProvider from "./context/ChatContext"


function App() {
  return (

   
      <Router>
        <Switch> <ChatProvider>
          <Route path="/" exact>
            <Nav comp={<Dashboard />} />
          </Route>

          <Route path="/chats" exact>
            <Nav comp={<Chats />} />
          </Route></ChatProvider>
        </Switch>
      </Router>
    

  );
}

export default App;
