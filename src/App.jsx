import React from 'react'
import Header from './components/Header'
import { Greeting as Greet } from './components/Greeting'
import Counter from './components/Counter';
import LikesCounter from './components/LikesCounter';

export default function App() {

  const brandName = "BSSReact";

  const navbarData = ["Home", "About", "Contact", "Login", "Register", "Logout"];

  const userName = "John Doe";


  return (
    <div>
      <Header brand={brandName} navData={navbarData}/>
      <Greet name = {userName}/>
      <Counter />
      <LikesCounter />

    </div>
  )
}
