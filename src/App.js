import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Nav from './Components/Nav';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Intro from './pages/Intro';

function App() {
  return (
    <div className="App">

      <Router>
        <Header/>
        <Nav/>
        <Route exact path='/' render={() =><Intro/>} />
        <Route exact path='/about' render={() =><About/>} />
        <Route exact path='/portfolio' render={() =><Portfolio/>} />
        <Route exact path='/contact' render={() =><Contact/>} />
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
