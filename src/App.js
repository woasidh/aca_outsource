import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import LandingPage from './components/LandingPage/LandingPage'
import Footer from './components/Footer/Footer'
import InfoPage from './components/InfoPage/InfoPage'
import Auth from './components/Auth/Auth'
import Admin from './components/Admin/Admin'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path='/admin'>
            <Admin />
          </Route>
          <Route path='/info'>
            <InfoPage />
          </Route>
          <Route path='/auth'>
            <Auth />
          </Route>
          <Route path='/'>
            <LandingPage />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
