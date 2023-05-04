import React from "react";

const Blogs = () => {
  return (
    <div className="container mx-auto">
      <div className="bg-black p-4 rounded-xl m-4">
        <h1 className="text-2xl font-semi-bold mb-4 text-white">
          Tell us the differences between uncontrolled and controlled
          components.
        </h1>
        <h2 className="text-white">
          Answer: The main difference between controlled and uncontrolled
          components is that controlled components rely on external state
          management, while uncontrolled components manage their own state
          internally. Controlled components are more predictable and easier to
          manage, while uncontrolled components are more flexible and can update
          their state more frequently with less overhead.
        </h2>
      </div>
      <div className="bg-black p-4 rounded-xl m-4">
        <h1 className="text-2xl font-semi-bold mb-4 text-white">
          How to validate React props using PropTypes?
        </h1>
        <h2 className="text-white">
          Answer: In the propTypes object, you define the expected types and
          constraints for each prop. PropTypes supports a wide variety of data
          types, including custom data types, and allows for specifying required
          vs. optional props. For example, in the code above, we're specifying
          that the name prop should be a string, and the age prop should be a
          number, and it is required. Using PropTypes in your components can
          improve your development experience by providing you with a way to
          catch errors early on and make your code more reliable.
        </h2>
      </div>
      <div className="bg-black p-4 rounded-xl m-4">
        <h1 className="text-2xl font-semi-bold mb-4 text-white">
        What is a custom hook, and why will you create a custom hook?

</h1>
        <h2 className="text-white">
          Answer: n React, a custom hook is a JavaScript function that uses one or more of the built-in React hooks and returns stateful logic that can be reused across multiple components. Custom hooks allow developers to extract and share common stateful logic between components, making it easier to manage complex application state.
        </h2>
      </div>
      <div className="bg-black p-4 rounded-xl m-4">
        <h1 className="text-2xl font-semi-bold mb-4 text-white">
        Tell us the difference between nodejs and express js.        </h1>
        <h2 className="text-white">
          Answer: 
Node.js is a JavaScript runtime that allows developers to write server-side code using JavaScript. It provides an environment for executing JavaScript code on the server and gives access to system-level resources.

Express.js is a web framework for Node.js that simplifies the process of building web applications. It provides a set of tools and utilities for handling requests and responses, routing, and rendering views. Express.js is built on top of Node.js and leverages its features to provide a more streamlined development experience for building web applications.

In short, Node.js is a runtime environment for executing JavaScript code on the server, while Express.js is a web framework built on top of Node.js that simplifies the process of building web applications.
        </h2>
      </div>
    </div>
  );
};

export default Blogs;
