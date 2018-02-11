import React from 'react';

const ListItem = ({ todo: { todoId, todoText }, handleOnRemoveClick }) => (
  <li>
    {todoText}
    <button
      onClick={() => handleOnRemoveClick(todoId)}
      style={{ marginLeft: '10px' }}
    >
      X
    </button>
  </li>
);

export default ListItem;
