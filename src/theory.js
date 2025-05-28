// JSX : (Javascript XML)

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