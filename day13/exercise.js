// 30-days-of-react: Day13: Uncontrolled Input

// Exercise: Level 1
// 1. What is a controlled input?
// A controlled input is a type of input element in React in which the value is managed by the state of the component.

// 2. What is an uncontrolled input?
// An uncontrolled input is a type of input element in React in which the value is not managed by the React's state and handled directly by the real DOM.
// The input value can be accessed using the ref attribute to refer to the DOM node directly.

// 3. How do you get a content of a certain HTML element in React ?
// We can get a content of a certain HTML element in React by using refs.
/*
Create a ref using the React.createRef() method in your component's constructor or as a class property.
Assign the ref to the target HTML element using the ref attribute.
Access the content of the element using the current property of the ref.
*/

// 4. Why it is not a good idea to touch the DOM directly in React ?
// It is not recommended to directly manipulate the DOM in React because it goes against the declarative nature of React, bypasses optimizations, hinders portability and reusability, complicates debugging and testing, and can lead to inconsistencies between component state and the actual DOM. React's virtual DOM and component lifecycle methods handle efficient rendering and updates, so it's best to rely on React's mechanisms rather than directly manipulating the DOM.

// 5. What is most frequently used in React ? Controlled or Uncontrolled input.
// The controlled input is most frequently used in React compared to Uncontrolled input as it managed in the virtual DOM by the state of the component in a class.
// Controlled inputs provide more control and flexibility in managing the input state and performing validation or manipulation of the input data. They allow you to handle changes and update the input value through state and event handlers, making it easier to maintain a single source of truth for the input data. Controlled inputs are commonly used when you need to perform validation, implement form submission handling, or synchronize input values with other components or data sources. However, there might be situations where uncontrolled inputs can be preferred for simpler scenarios or when integrating with external libraries that require direct access to the DOM.

// 6. What do you need to write uncontrolled input?
// We need to use 'ref' attribute to write uncontrolled input.
// Create an input element without explicitly managing its value through state.
// Use the ref attribute to obtain a reference to the input element.
// Access the input value using the reference when needed.

// 7. Does state require to write uncontrolled input?
// No, state is not required to write uncontrolled input, we simply create refs for every individual element in React and we then later call it by refs to access its values.
/*
you can use ref to directly access the input elements and retrieve their values when needed. By creating a ref for each input element, you can access and manipulate their values without involving React state.

Uncontrolled inputs provide a way to work with form inputs without the need for explicit state management. They can be useful in certain scenarios, such as when dealing with large forms or integrating with third-party libraries that expect direct DOM access.*/


// 8. When do you use uncontrolled input?
// Uncontrolled inputs are typically used in scenarios where you need a simple and lightweight way to retrieve input values without extensive form validation or synchronization with React state.

// 9. When do you use controlled input?
// Controlled inputs are commonly used in React applications, especially for managing form inputs that require validation, synchronization with state, and handling user interactions.

// 10. Do you use a controlled or uncontrolled input to validate form input fields?
// I'd prefer using controlled input as it is handled by React's state.
// Controlled inputs are typically used to validate form input fields. With controlled inputs, I can easily validate user input by capturing the value entered by the user, performing validation checks, and providing feedback or error messages based on the validation results.
