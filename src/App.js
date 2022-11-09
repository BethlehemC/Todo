//import logo from './logo.svg';

import Navbar from "./Navbar";
import { BrowserRouter as Router,Switch, Route} from "react-router-dom";
import Home from "./Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from "./Signup";
import Login from "./Login"
import Todo from "./todo";
import About from "./About";

function App() {
  return (
 <Router>
 <Navbar/>
 <Switch>
 <Route exact path='/' component={Home} />
 <Route path="/Signup" component={Signup}/>
<Route path="/Login" component={Login}/>
<Route path="/Todo" component={Todo}/>
<Route path="/About" component={About}/>

</Switch>
 
 </Router>

   
  );
}

export default App;
