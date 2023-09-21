import React from 'react'
import './Projects.css';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const navigate = useNavigate();

  function returnHome () {
    navigate('/')
  };
  return (
    <div> 
      <button onClick={returnHome} className='return-home'> Return Home</button>
    </div>
  )
}

export default Projects