import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Pricing from './components/Pricing'
import Services from './components/Services'
import Contact from './components/Contact'
import { Routes, Route } from 'react-router-dom'
import SignUp from './components/SignUp'
import UserList from './components/UserList'
import Counter from './components/Counter'
import ProductList from './components/ProductList'
import CourseList from './components/CourseList'
import FocusInput from './components/FocusInput'
import Timer from './components/Timer'
import TimerWithRef from './components/TimerWithRef'

export default function App() {
  return (
    <div>
      <Navbar />
      {/* <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/services" element={<Services />}/>
        <Route path="/pricing" element={<Pricing />}/>
        <Route path="/contact" element={<Contact />}/>  
      </Routes> */}
            <FocusInput />
            <Timer />
            <TimerWithRef />
      <SignUp />
      <UserList />
      <Counter />
      <ProductList />
      <CourseList />

    </div>
  )
}
