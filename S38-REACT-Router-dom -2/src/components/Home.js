import React from 'react';
import NavBar from './NavBar';
import { useLocation } from 'react-router-dom';

const Home = () => {
  let receivedObj = useLocation();
  console.log(receivedObj);
  return (
    <>
    <NavBar/>
    <div className='page-content '>
      <h1>Hi <span style={{color:'#3d3d58',}}>{receivedObj.state.fristName}</span></h1>
      <h1>Welcome to Our Website!</h1>
      <p>This is the home page of our website. We offer a wide range of products/services to meet your needs.</p>
      <p>Explore our website to learn more about what we offer.</p>
    </div>
    </>
  );
}

export default Home;
