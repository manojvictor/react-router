import React from 'react';
import axios from 'axios';

export default class PersonInput extends React.Component {
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


	handleSubmit = event => {
		event.preventDefault();

		const user = {
			name: this.state.name
		}

		axios.post('')
	}

	render() {
		return (
			<ul>
				{this.state.persons.map(person => (
					<li key={person.id}>{person.phone}</li>
				))}
			</ul>
		)
	}
}