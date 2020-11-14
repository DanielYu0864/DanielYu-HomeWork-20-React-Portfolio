import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Nav from './Components/Nav';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Intro from './pages/Intro';
import Media from './Components/Media';
// const Intro = () => {
//   <div className='intro'>
//   <div className='hp'>
//     <h1>
//       I am Daniel A. Yu
//     </h1>
//     <p>
//       a lifelong learner of knowledge and current Boot Camp student who presently has sight set on a fullstacck-developer position.
//     </p>
//   </div>

//   <Media/>
//   </div>
// }


function App() {
  return (
    <div className="App">
      <Header/>

      <Router>
        <Nav/>
        <Switch>
        <Route exact path='/about' component={About} />
        <Route exact path='/portfolio' component={Portfolio} />
        <Route exact path='/contact' component={Contact} />
        {/* The default route */}
        <Route path='*' component={Intro} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
