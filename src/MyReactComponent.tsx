/* eslint-disable @typescript-eslint/no-explicit-any */
// src/MyReactComponent.jsx
// @ts-nocheck
import React, { useState } from 'react';

const MyReactComponent = (props: any) => {
	const [count, setCount] = useState(0)
  const { message, onEvent } = props;

  const handleClick = () => {
    if (onEvent) {
      onEvent('Data from React');
    }
  };

	const updateCounterFromReact = () => {
		setCount((prevValue) => prevValue + 1)
	}

  return (
    <div>
      <h2>React Application Embedded via Script</h2>
      <p>{message}</p>
			<p>{count}</p>

			<button onClick={updateCounterFromReact}>Update Counter</button>
      <button onClick={handleClick}>Send Data to Ember</button>
    </div>
  );
};

export default MyReactComponent;
