import './App.css';
import LogIn from './Pages/LogIn';
import SignUp from './Pages/SignUp';
import Home from './Pages/Home';
import Events from './Pages/Events'
import Gallery from './Pages/Gallery'
import Tickets from './Pages/Tickets'
import WhiteFlea from './Pages/WhiteFlea';
import Pannu from './Pages/Pannu';
import Halloween from './Pages/Halloween';
import WhiteFleaBook from './Pages/WhiteFleaBook';
import PannuBook from './Pages/PannuBook';
import HalloweenBook from './Pages/HalloweenBook';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <LogIn />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
           <Route path="/events">
            <Events />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/tickets">
            <Tickets  />
          </Route>
          <Route path="/whiteflea">
            <WhiteFlea  />
          </Route>
          <Route path="/pannu">
            <Pannu  />
          </Route>
          <Route path="/halloween">
            <Halloween  />
          </Route>
          <Route path="/whitefleabook">
            <WhiteFleaBook  />
          </Route>
          <Route path="/pannubook">
            <PannuBook  />
          </Route>
          <Route path="/halloweenbook">
            <HalloweenBook  />
          </Route>
          <Route path="/pannubook">
            <PannuBook  />
          </Route>
          
        </Switch>
      </Router>
  );
}

export default App;
