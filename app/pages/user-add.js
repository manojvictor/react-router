import React from 'react';
import axios from 'axios';

export default class UsersAdd extends React.Component {
	state = {
		name: '',
	}

	// componentDidMount() {
	// 	axios.get('https://jsonplaceholder.typicode.com/users')
	// 	.then((result) => {
	// 		console.log(result);
	// 		this.setState({persons: result.data});
	// 	})
	// }

	handleChange = event => {
		this.setState({
			name: event.target.value
		});
	};


	handleSubmit = event => {
		event.preventDefault();

		const user = {
			name: this.state.name
		}

		axios.post('https://jsonplaceholder.typicode.com/users', {user})
		.then(res => {
			console.log(res);
			console.log(res.data);
		})
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Add User: <input type="text" name="name" onChange={this.handleChange}/>
				</label>
				<button type="submit">Add</button>
			</form>
		)
	}
}