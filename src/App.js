import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import {
  Switch,
  Route,
} from "react-router-dom";

import Home from './components/pages/Home'
import News from './components/pages/News'
import Contact from './components/pages/Contact'
import Details from './components/pages/Details'
import NotFound from './components/pages/NotFound'

function App() {
  return (
    <>
      <Navbar/>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/news" component={News}/>
            <Route path="/contacts" component={Contact}/>
            <Route path="/details" component={Details}/>
            <Route component={NotFound}/>
        </Switch>
        
      <Footer/>
    </>
  );
}

export default App;
