/* eslint-disable @typescript-eslint/no-explicit-any */
// src/MyReactComponent.jsx
// @ts-nocheck
import React from 'react';

const MyReactComponent = (props: any) => {
  const { message, onEvent } = props;

  const handleClick = () => {
    if (onEvent) {
      onEvent('Data from React');
    }
  };

  return (
    <div>
      <h2>React Application</h2>
      <p>{message}</p>
      <button onClick={handleClick}>Send Data to Ember</button>
    </div>
  );
};

export default MyReactComponent;
