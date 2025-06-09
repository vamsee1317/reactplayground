import React, { useState } from 'react';

export default function SignUp() {

    // form date state object

    const [formData, setFormData] = useState({
        username : "",
        password : "",
        confirmPassword : ""
    });

    // For error state
    const [formErrors, setFormErrors] = useState({});

    // Validate Function 

    const validateForm = () => {
        const errors = {};

        if(!/^[A-Z][a-z]{3,10}$/.test(formData.username)){
            errors.username = "username must start with capital letter and contain 3-10 characters";
        }

        if(!/^[#\w@_-]{8,20}$/.test(formData.password)){
            errors.password = "Password must contain 8-20 characters and contain at least one special character";
        }

        if(formData.confirmPassword !== formData.password){
            errors.confirmPassword = "Password and Confirm Password must be same";
        }

        return errors;
    }

    // Submit Function :

    const handleSubmit = (e) =>{
        e.preventDefault();

        const errors = validateForm();
        setFormErrors(errors);


        if(Object.keys(errors).length === 0){
            console.log(formData);
            alert("Form submitted successfully");
            // API call or server trigger
            
        }else{
            alert("Please fill the form correctly");
        }
    }

    console.log(formErrors);




    // Updating the form state object

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev)=>({...prev, [name] : value}));
    }


  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-white rounded shadow">
      <form className="space-y-4">
        {/* Username */}
        <div>
          <label htmlFor="username" className="block mb-1 font-medium">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter username"
            className="w-full border border-gray-300 p-2 rounded"
            value={formData.username}
            onChange={handleInputChange}
          />
          {formErrors.username && <p className='text-red-600'>{formErrors.username}</p>}
        </div>

        {/* Password */}
        <div>
          <label htmlFor="password" className="block mb-1 font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter password"
            className="w-full border border-gray-300 p-2 rounded"
            value={formData.password}
            onChange={handleInputChange}
          />
          {formErrors.password && <p className='text-red-600'>{formErrors.password}</p>}
        </div>

        {/* Confirm Password */}
        <div>
          <label htmlFor="confirmPassword" className="block mb-1 font-medium">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm password"
            className="w-full border border-gray-300 p-2 rounded"
            value={formData.confirmPassword}
            onChange={handleInputChange}
          />
          {formErrors.confirmPassword && <p className='text-red-600'>{formErrors.confirmPassword}</p>}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          onClick={handleSubmit}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
