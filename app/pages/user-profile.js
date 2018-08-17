import React from 'react';

const UserProfile = React.createClass({
  render: function() {
    return (<h5>User Profile for userId: {this.props.params.userId}</h5>);
  }
});

export default UserProfile;