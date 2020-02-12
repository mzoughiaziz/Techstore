import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Home from "./components/Home";
import Repair from "./components/Repair";
import Footer from './components/Footer';
import SignIn from './components/Signin';
import SignUp from './components/SignUp';
import UserProfile from './components/UserProfile';
import MainFeaturedPost from './components/MainFeaturedPost';


function App() {
  return (
    <div>
      <Navbar />
      <MainFeaturedPost />
      <UserProfile />
      <Home />
      <SignUp />
      <Footer />
    </div>
  );
}

export default App;
