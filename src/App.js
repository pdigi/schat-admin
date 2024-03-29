import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

import Nav from "./components/Nav";
import Dashboard from './pages/Dashboard';
import Chats from './pages/Chats';
import ChatProvider from "./context/ChatContext"
import Chat from './components/Chat'


function App() {
  return (

   
      <Router>
        <Switch>
           <ChatProvider>
          <Route path="/" exact>
            <Nav comp={<Chat />} />
          </Route>

          <Route path="/chat" exact>
            <Chat />
          </Route>
          <Route path="/test" exact>
            <div>
              Tester
            </div>
          </Route>
          </ChatProvider>
        </Switch>
      </Router>
    

  );
}

export default App;
