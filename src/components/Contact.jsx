import React, { useState } from 'react'

export default function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleNameChange = (e) =>{
    setName(e.target.value);
    console.log(name);
  }
  const handleEmailChange = (e) =>{
    setEmail(e.target.value);
    console.log(email);
    }

    const handleSubmit = (e) =>{
      e.preventDefault();   // stops page reload
      alert(` Name: ${name} \n Email: ${email}`);

      // clear form
      setName("");
      setEmail("");
    }

  return (
    <div className='mx-48 my-4 w-full'>
        <form className='p-4 border w-[400px] rounded' onSubmit={handleSubmit}>
          <h2 className='text-xl font-bold mb-2'>Contact Us</h2>

          <input type="text" placeholder='Your Name' className='w-full p-2 mb-2 border rounded' value={name} onChange={handleNameChange}/>

          <input type="email" placeholder='Your email' className='w-full p-2 mb-2 border rounded' value={email} onChange={handleEmailChange}/>

          <button type='submit' className='bg-blue-600 text-white px-3 py-1 rounded w-full'>Submit</button>
        </form>
    </div>
  )
}
