
import './App.css';
import ExplorePolls from './Components/Explore/ExplorePolls';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/sign' element={<Signup/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/explore' element={<ExplorePolls/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
