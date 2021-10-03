import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Landing from './components/Landing';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
  <Router>
    <Switch>
    <Route path="/jobs">
      <JobsPage/>
      </Route>
      <Route path="/">
        <LandingPage/>
      </Route>
     
       </Switch>
    
    </Router>
  );
}

function JobsPage(){
  return (
    <div style={{ display: "flex", flexDirection: "column", backgroundColor: "#f3f2ef" }}>
      <Header/>
      <Body/>
    </div>
      
  );
}

function LandingPage(){
  return (
    <div>
    <Header />
    <Landing />
    </div>
  )
}

export default App;
