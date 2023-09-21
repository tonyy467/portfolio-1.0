import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home.js';
import Projects from './Projects.js';
import './App.css';

function App() {
  return (
    <Router>
      <div className='centered-container'>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/projects" element={<Projects/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App;
