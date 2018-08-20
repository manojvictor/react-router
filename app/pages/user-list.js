import React from 'react';

import UsersList from './users';
import UsersAdd from './user-add';
import UsersDelete from './user-delete';

const UserList = React.createClass({
  render: function() {
    return (
    	<div>
	      <UsersList />
	      <UsersAdd />
		</div>
    );
  }
});

export default UserList;
