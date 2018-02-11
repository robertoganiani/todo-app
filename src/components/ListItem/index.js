import React, { Fragment } from 'react';

const ListItem = ({ todo: { todoId, todoText }, handleOnRemoveClick }) => (
  <Fragment>
    <li>
      {todoText}
      <button
        onClick={() => handleOnRemoveClick(todoId)}
        style={{ marginLeft: '10px' }}
      >
        X
      </button>
    </li>
  </Fragment>
);

export default ListItem;
