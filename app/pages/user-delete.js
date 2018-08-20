import React from 'react';
import axios from 'axios';

export default class UsersDelete extends React.Component {
	state = {
		id: 0,
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
			id: event.target.value
		});
	};


	handleSubmit = event => {
		event.preventDefault();

		const id = {
			id: this.state.name
		}

		axios.delete('https://jsonplaceholder.typicode.com/posts/id', {id})
		.then(res => {
			console.log(res);
			console.log(res.data);
		})
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Delete by ID: <input type="number" name="name" onChange={this.handleChange}/>
				</label>
				<button type="submit">Delete</button>
			</form>
		)
	}
}