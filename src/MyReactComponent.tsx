// src/MyReactComponent.jsx
// @ts-nocheck
import React, { useImperativeHandle, forwardRef, useState } from 'react';

const MyReactComponent = forwardRef((props, ref) => {
  const { message, onEvent } = props;

	const [count, setCount] = useState(0)
	const updateCounterFromReact = (value = 1) => {
		setCount((prevValue) => prevValue + value)
	}

  // Expose methods via ref
  useImperativeHandle(ref, () => ({
    reactMethod(data) {
			updateCounterFromReact(data)
      // Additional logic...
    },
  }));

  const handleClick = () => {
    if (onEvent) {
      onEvent('Data from React');
    }
  };

  return (
    <div>
      <h1>React Application Embedded via Script</h1>
      <p>{message}</p>
			<h2>Counter:</h2>
			<p>{count}</p>

			<button onClick={() => updateCounterFromReact(1)}>Update Counter</button>
      <button onClick={handleClick}>Send Data to Ember</button>
    </div>
  );
});

export default MyReactComponent;
