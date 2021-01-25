import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import LandingPage from './components/LandingPage/LandingPage'
import Footer from './components/Footer/Footer'
import TeacherPage from './components/TeacherPage/Teacher'
import CommunityPage from './components/CommunityPage/CommunityPage'

function App() {
  return (
    <Router>
        <Navbar />
        <div className="container">
          <Switch>
            <Route path='/teacher'>
              <TeacherPage />
            </Route>
            <Route path='/community'>
              <CommunityPage/>
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
