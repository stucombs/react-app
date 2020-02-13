import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
// import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
// import UserInput from './UserInput/UserInput';
// import UserOutput from './UserOutput/UserOutput';
// import CharacterCard from './CharacterCard/CharacterCard';
// import Validation from './Validation/Validation';

class App extends Component {
	constructor(props){
		super(props);
		console.log('[App.js] constructor');
		this.state = {
			persons: [
				{ id: 'vasdf1', name: 'Stu',   age: 25},
				{ id: 'asdf11', name: 'Juan',  age: 69},
				{ id: 'ahre12', name: 'Steph', age: 28}
			],
			showPersons: false
		}
	}

	static getDerivedStateFromProps(props, state){
		console.log('[App.js] getDerivedStateFromProps', props);
		return state;
	}

	componentWillMount(){
		console.log('[App.js] componentWillMount');
	}

	componentDidMount(){
		console.log('[App.js] componentDidMount');
	}

	nameChangeHandler = (event, id) => {
		const personIndex = this.state.persons.findIndex(p => {
			return p.id === id; 
		});

		const person = {
			...this.state.persons[personIndex]
		};

		// const person = Object.assign({}, this.state.persons[personIndex]);
		person.name = event.target.value;
		const persons = [...this.state.persons];
		persons[personIndex] = person;
		this.setState( { persons: persons});

		this.setState({
			persons: [
				{ id: 'vasdf1', name: 'Stuart', age: 25},
				{ id: 'asdf11', name: event.target.value, age: 69},
				{ id: 'ahre12', name: 'Stephanie', age: 27}
			]
		})
	}

	togglePersonsHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState({showPersons: !doesShow});
	}

	deletePersonsHandler = (personIndex) => {
		const persons = [...this.state.persons];
		persons.splice(personIndex, 1);
		this.setState({persons: persons});
	}

	render() {
		console.log('[App.js] render');
		let persons = null;
		if(this.state.showPersons){
			persons = (
				<Persons persons={this.state.persons} clicked={this.deletePersonsHandler} changed={this.nameChangeHandler}/>
			);
		}else{
			<div><h1>No results found</h1></div>
		}

		return (
			<div className="App">
				<Cockpit show={this.state.showPersons} persons={this.state.persons} toggle={this.togglePersonsHandler} />
				{persons}
			</div>
		);
	}
}

export default App;