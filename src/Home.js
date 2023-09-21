import React from 'react'
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  function projects () {
    navigate('./projects')
  };

  return (
    <div> 
      <button onClick={projects} className='projects-tab'> Projects Tab </button>
    </div>
  )
}

export default Home