import React, { Component } from 'react';

import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/WithClass';
import Aux from '../hoc/Auxiliary';
import AuthContext from '../context/auth-context';
// import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
// import UserInput from './UserInput/UserInput';
// import UserOutput from './UserOutput/UserOutput';
// import CharacterCard from './CharacterCard/CharacterCard';
// import Validation from './Validation/Validation';

class App extends Component {
	//component lifecycle starts with constructor
	constructor(props){
		super(props);
		this.state = {
			persons: [
				{ id: 'vasdf1', name: 'Stu',   age: 25},
				{ id: 'asdf11', name: 'Juan',  age: 69},
				{ id: 'ahre12', name: 'Steph', age: 28}
			],
			showPersons: false,
			showCockpit: true,
			changeCounter: 0,
			authenticated: false
		}
	} 

	//componentWillMount()
		//not used very often, likely won't use
	// render()
	// Render Child components
	// componentDidMount()

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

		this.setState((prevState, props) => {
			return {
				persons: persons, changeCounter: prevState.changeCounter + 1 
			};
		});

	}

	togglePersonsHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState({showPersons: !doesShow});
	}

	loginHandler = () => {
		this.setState({ authenticated: true });
	}

	deletePersonsHandler = (personIndex) => {
		const persons = [...this.state.persons];
		persons.splice(personIndex, 1);
		this.setState({persons: persons});
	}

	render() {
		let persons = null;
		if(this.state.showPersons){
			persons = (
				<Persons persons={this.state.persons} clicked={this.deletePersonsHandler} changed={this.nameChangeHandler} isAuthenticated={this.state.authenticated} />
			);
		}else{
			<div><h1>No results found</h1></div>
		}

		return (
			<Aux className="App">
				<button onClick={() => {this.setState({showCockpit: false });
				}} > Remove Cockpit </button>
				<AuthContext.Provider value={{authenticated: this.state.authenticated, login: this.loginHandler}}>
					{this.state.showCockpit ? (
						<div>
							<Cockpit show={this.state.showPersons} persons={this.state.persons} toggle={this.togglePersonsHandler} /><br/>
						</div>
					) : null}
					{persons}
				</AuthContext.Provider>
			</Aux>
		);
	}
}

//export withclass with component to export and the classname
export default withClass(App, "App");