import React from 'react';
import axios from 'axios';

export default class UsersList extends React.Component {
	state = {
		users: []
	}

	componentDidMount() {
		axios.get('https://jsonplaceholder.typicode.com/users')
		.then((result) => {
			console.log(result);
			this.setState({users: result.data});
		})
	}

	render() {
		return (
			<ul className="user-list">
				{this.state.users.map(user => (
					<li key={user.id}>{user.name}</li>
				))}
			</ul>
		)
	}
}