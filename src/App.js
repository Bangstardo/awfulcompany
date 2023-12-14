import React from 'react';
import './App.css'
import NavBar from './components/header';
import EmailLogIn from './components/emaillogin';

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <section className='horriblesec1'>
      </section>
      <EmailLogIn></EmailLogIn>
        
      <section className='horriblesec2'></section>
      <section className='horriblesec3'>
        
      </section>
    </div>     
    );
}

export default App;