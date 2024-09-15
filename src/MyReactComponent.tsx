// src/MyReactComponent.jsx
// @ts-nocheck
import React, { useImperativeHandle, forwardRef, useState } from 'react';

const MyReactComponent = forwardRef((props, ref) => {
  const { message, onEvent } = props;

	const [count, setCount] = useState(0)
	const updateCounterFromReact = (value = 0) => {
		setCount((prevValue) => prevValue + 1 + value)
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
      <h2>React Application Embedded via Script</h2>
      <p>{message}</p>
			<p>{count}</p>

			<button onClick={updateCounterFromReact}>Update Counter</button>
      <button onClick={handleClick}>Send Data to Ember</button>
    </div>
  );
});

export default MyReactComponent;
