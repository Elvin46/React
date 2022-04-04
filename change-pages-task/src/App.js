import logo from './logo.svg';
import './App.css';
import Header from './components/layouts/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Pages/Home/Home';
import About from './components/Pages/About/About';



function App() {
  return (
    <>
    <Router>
      <Header/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" exact component={About}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
