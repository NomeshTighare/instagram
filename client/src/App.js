import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import {BrowserRouter,Route} from 'react-router-dom'

import Home from './components/screens/home';
import Signin from './components/screens/signin';
import Signup from './components/screens/signup';
import Profile from './components/screens/profile';
import CreatePost from './components/screens/createpost';


function App() {
  return (
    <BrowserRouter>
  <Navbar/>
  <Route exact path="/">
    <Home/>
  </Route>
  <Route path='/signin'>
      <Signin />
    </Route>
    <Route path='/signup'>
      <Signup />
    </Route>
    <Route path='/createpost'>
      <CreatePost />
    </Route>
    <Route exact path='/profile'>
      <Profile />
    </Route>
  </BrowserRouter>
  );
}

export default App;
