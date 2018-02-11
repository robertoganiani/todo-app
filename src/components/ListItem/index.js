import React, { Fragment } from 'react';

const ListItem = ({ todo: { todoId, todoText }, handleOnDeleteClick }) => (
  <Fragment>
    <li>
      {todoText}
      <button
        onClick={() => handleOnDeleteClick(todoId)}
        style={{ marginLeft: '10px' }}
      >
        X
      </button>
    </li>
  </Fragment>
);

export default ListItem;
