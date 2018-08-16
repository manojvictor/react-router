import React from 'react';
import { Link } from 'react-router';

const UserList = React.createClass({
  render: function() {
    return (
      <ul className="user-list">
        <li><Link to="users/2">User 1</Link></li>
        <li><Link to="users/1">User 2</Link></li>
        <li><Link to="users/3">User 3</Link></li>
        <li><Link to="users/4">User 4</Link></li>
        <li><Link to="users/5">User 5</Link></li>
        <li><Link to="users/6">User 6</Link></li>
      </ul>
    );
  }
});

export default UserList;
