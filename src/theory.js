// JSX : (Javascript XML)

import { use, useEffect, useRef } from "react"

// JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files.

// KeyPoints :
    // JSX looks like HTML but runs inside JavaScript code.
    // JSX is a syntax extension for JavaScript, not a separate language.

// Rules of JSX :
    // Use className instead of class.
    // Use camelCase for event handlers.
    // Use self-closing tags for single elements.
    // Use JSX expressions inside curly braces.
    // You must return one parent element from a component.

// In html "class" is an attribute
// In js "class" is a keyword
// In react "class" is a component

// So in JSX we use "className" instead of "class"


// // Code with JSX

// import React from 'react'

// export default function App() {
//   return (
//     <div>
//       <h1 className='text-3xl bg-red-500 text-white text-center'>HelloWorld!!!!</h1>
//       <p className='text-xl bg-green-500 text-white text-center'>This is paragraph</p>
//     </div>
//   )
// }

// // Code without JSX
// // import React from 'react'

// // export default function App(){
// //   return(
// //     React.createElement("div", null,
// //       React.createElement("h1",{className:"text-3xl bg-red-500 text-white text-center"},"Hello World!!!!!!" ),
// //       React.createElement("p", {className:"text-xl bg-green-500 text-white text-center"},"This is a paragraph")
// //     )
// //   )
// // } 


// Components :
    // Components are reusable pieces of code that can be used to build user interfaces.
    // Example : buttons, headers, cards...etc.

// Key Points :
// Components are reusable.
// Components returns JSX to render UI.
// Components can be nested.
// Components make code more modular and easier to maintain.

// Types:
    // Functional Components
        // FC are nothing but js functions which optionally recieves props & states as input and returns  JSX as output.
    
    // Class Components :
        // CC are nothing but js classes which optionally recieves props & states as input and returns  JSX as output.
        
// Props : (properties)
    // Props are like inputs passed from one component to another component
    // Props are immutable (Parent ---> Child)
    // Props are like custom attributes present inside HTML Tags

// State :
    // State is like a variable that can be changed inside a component.
    // State is mutable

    // State syntax :

    // Functional Components :   const [initialState, updatedState] = useState(initialState);


// React Events :

// Event Handling in React :

// Event handling in react means writing Js code that runs when user interacts with the UI. (Clicking, typing, submitting forms etc).

// Key Points :

// React Uses camelCase for event names (eg, onClick, onChange etc).
// You pass a function to the event handler.
// You do not use parentheses if you want the function to run only on the event.
// Common events : onClick, onChange, onSubmit, onKeyPress, onMouseOver etc.


// Analogy : 
// Think of event handlers as remote controls
// When you press a button on the remote, it sends a signal to the TV to change the channel.
// React listens for those "button press, typing inside the input field..etc"  and we decide what should happen when that event occurs.


// Conditional Rendering : 
// CR means showing or hiding parts of the UI based on conditions like user actions, data, state...etc.


// Key Points :
// React Lets you use js conditions inside JSX.
// You can use if/else statements, ternary operators, switch statements etc.
// You can use the && (ShortCircuit) operator to conditionally render JSX.
// It's usefull for login/logout, toggle views or form validations.

// Analogy :

// Think of a traffic signal.
// When the traffic signal is green, you can go.
// When the traffic signal is red, you can't go.
// React lets you conditionally render JSX like a traffic signal.


// 1. using If-else (Outside JSX)

if(isLoggedIn){
    return <Dashboard />
}else{
    return <LoginForm />
}

// 2. terinary operator (Inside JSX)

<p> {isLoggedIn ? "WelcomeBack!!!!" : "Please login"} </p>

{isLoggedIn ? <p>WelcomeBack</p> : <p>Please Login</p> }

// 3. ShortCircuit && (Inside JSX)

{isAdmin && <button>Delete</button>}


// 4. Element Variable Method
// Instead of writing a condition directly in JSX, we create a variable that holds JSX based on a condition and then return that variable.

// When ?

// When the condition is complex
// When the condition is long
// When you want to keep your JSX clean and simple



// React Routing : (React Router DOM)


// Routing :
// Routing is the process of mapping URLs to specific components in your application.
// Routing in React means creating a multipage feeling in a SPA using urls to show different components without reloading page.

// Key Theory points
// 1. React apps are SPA, but can use React Router to create a multipage feel.
// 2. React Router is a library that helps you create client-side routes.
// 3. Each URL path shows a specific component like (/home, /about, /contact etc.)
// 4. React Router gives us components like <BrowserRouter>, <Routes> and <Route>, <Link>

// Installation & SetUp
    // npm install react-router-dom
    // import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
    

// ReactJs Forms :

// What is a Form in React ?
// Forms in react are used to collect input from users, just like HTML.
// But instead of working directly with the DOM, React uses controlled components - where the form's data is managed by React State.

// Key Points :
// Every input field in React is usually a controlled component.
// A state variable is linked to the input's value.
// Changes in the input updates the state using onChange event.
// On Form submission, React handles everything with onSubmit.

// Basic Flow :

// Creating a form
// Define state variables
// Bind inputs with value = {state}
// Bind onChange to update state
// Bind onSubmit to handle form submission


// What's Happening ?

// Action                               React Behaviour
// User types in input field          State is updated (name, email) --> onChange --> (setName, setEmail)
// User clicks submit button          Form is submitted (onSubmit) --> handleSubmit function
// handleSubmit function is called    Form data is sent to server(API call) or handled locally (print alert)


// Controlled vs Uncontrolled Components:

// Controlled                                 // Uncontrolled
// uses value from state                         Uses default value or direct DOM value
// React has full control.                       DOM manages its own value.
// Recommended in React Apps                     only for very simple forms.



// React Forms - Advanced :

// Topics We'll cover :

// Multiple Inputs Handling with one state object.
// Form Validations
// Handling Form Errors
// Submitting data for an API or Server



// Topics for Today : 

// What is API integration in React ?

    // API integration means connecting your react app to a sever to get or send data (like Users, posts, products...etc).

    // API stands for Application Programming Interface.

    // API endpoint : https://dummyjson.com/users

    // Examples :
        // Getting a user info from a server
        // Sending a new user to a server
        // Fetching a product info depending on user search.

    // useEffect Hook:
    // useEffect is a hook that allows you to run some code after rendering a component.
    // useEffect hook is used to handle side effects like API calls, setting timers, and more.


// Using Fetch() to get data
// Using Axios to get data
// Handling loading & error states
// Rendering data in a list.


// Axios :
// Axios is a popular JavaScript library used for making HTTP requests from the client-side.
// Axios is a promise-based HTTP client for the browser and node.js.
// Axios is used to make HTTP requests (GET, POST, PUT, DELETE, etc.) to a server or API.

// Steps to work with Axios
    // 1. Install Axios
    // 2. Import Axios
    // 3. Make a request to the API
    // 4. Handle the response
    // 5. Display the data


// useEffect ?
// useEffect is a side-effect hook in React.
// It lets you run some code after rendering a component.
// Like fetching data from an API, setting timers, and DOM updates..etc.


// Key Points :
// useEffect runs after the component renders.
// You can control when it runs using the dependency array.
// You can clean up after it runs using the return function.


// Syntax : 

useEffect(()=>{
    // code runs after the component renders

    return () =>{
        // Optional cleanup code
    }
}, [dependencies])

// Runs only once :

useEffect(()=>{
    console.log("Runs only once");
}, [])

// Runs on specific state change
useEffect(()=>{
    console.log("Likes Count Changed");
},[count])


// Runs on Every Render :
useEffect(()=>{
    console.log("Runs on every render");
})


// CleanUp : Clear Timer or Listener

useEffect(()=>{
    const interval = setInterval(()=>{
        console.log("Running every second");
    }, 1000);

    return () =>{
        clearInterval(interval); // Cleanup
    }
}, [])


// React Lists & keys :

// What is List Rendering in React ?

// In react, list rendering means using .map() to loop through an array and render multiple JSX elements dynamically.

// Key points :

// 1. react uses .map() to iterate over arrays and return components or JSX elements.
// 2. Each item must have a unique key prop for performance and identification.
// 3. Keys help React identify which items have changed, are added, or are removed.
// 4. The key should be unique, consistent ID (not index unless static).

// Real Life Example :

// Think of a class attendance sheet.
// Each student (list item) has a unique ID (key) so you can track who is present, missing or late.

// Syntax : 

{
    array.map((item, index)=>(
        <Component key={item.index}/>
    ))
}


// Common Mistakes with Keys :

// Mistake                      Why it's wrong
// 1. Using index as key        Index changes when items are added or removed.
// 2. Using a non-unique value  Multiple items have the same key.
// 3. Not using a key at all    React can't identify items.


// React Hooks : 

// What are React Hooks ?

// Hooks are functions that let you "hook into" React features like state, lifecycle, and context from functional components.

// Key points :

// Hooks were introduced in React 16.8. in the year 2019.
// Hooks allow you to use state and other React features without writing a class.
// They let us use state and lifecycle methods in functional components. (Which was earlier only possible with class components).
// Hooks do not work inside class components.
// All hooks start with the word "use".

// Most commonly used hooks :

// Hook                 Purpose
// useState()           To add state to functional components.
// useEffect()          To handle side effects like API calls, DOM mutations, and timers.
// useContext()         To access context across functional components.
// useReducer()         To manage complex state changes.(Like Redux).
// useCallback()        To memoize a function so it's not recreated on every render.
// useMemo()            To memoize a value so it's not recalculated on every render.
// useRef()             To access the DOM or a value across multiple renders.


// UseRef :

// useRef is react hook that gives you a box(object) where you can store any value, like numbers, strings, DOM elements...etc.

// This value is stored in .current, and changing it will not re-render the component.

// Quick Break :
// useState - stores values and triggers re-renders
// useRef - stores values and does not trigger re-renders.

// Code example :

const myRef = useRef("Hellooo");
console.log(myRef.current); // Outputs: Hellooo
myRef.current = "World"; // The value will be changed but no re-render occurs,


// UseState vs UseRef :

// What is useState ?
// - useState in React is a hook used to store and update values in functional components.
// - When the value changes using setState, the component re-renders (To show the new value on UI).

// const [count, setCount] = useState(0);


// What is useRef ?
// - useRef is used to store a mutable value or refer to a DOM element.
// - Changing the value of useRef does not trigger a re-render.
// - It's useful for :
    // Accessing DOM nodes (Like a input).
    // Storing values silently (Like a counter or timer).