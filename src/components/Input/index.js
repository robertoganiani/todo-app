import React from 'react';

const Input = ({ value, disabled, onInputChange, handleOnAddClick }) => (
  <div>
    <input
      value={value}
      onChange={e => onInputChange(e.target.value)}
      onKeyPress={e =>
        e.key === 'Enter' && !disabled ? handleOnAddClick() : null
      }
      type="text"
    />
    <button
      style={{ marginLeft: '10px' }}
      disabled={disabled}
      onClick={() => handleOnAddClick()}
    >
      Add
    </button>
  </div>
);

export default Input;
