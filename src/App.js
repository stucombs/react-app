import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
// import {hot} from 'react-hot-loader';
import Person from './Person/Person';
// import UserInput from './UserInput/UserInput';
// import UserOutput from './UserOutput/UserOutput';
// import CharacterCard from './CharacterCard/CharacterCard';
// import Validation from './Validation/Validation';

const StyledButton = styled.button`
					background-color: ${props => props.alt ? 'red' : 'green'};
					color: white;
					font: inherit;
					border: 1px solid blue;
					padding: 8px;
					cursor: pointer;
					
					&:hover {
						background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
						color: black;
					}`

class App extends Component {

	state = {
		persons: [
			{ id: 'vasdf1', name: 'Stu',   age: 25},
			{ id: 'asdf11', name: 'Juan',  age: 69},
			{ id: 'ahre12', name: 'Steph', age: 28}
		],
		otherState: 'some other value',
		showPersons: false
	}

	switchNameHandler = (getName) => {
		// DONT DO THIS(directly edit state): this.state.persons[0].name = 'Stuart';
		this.setState({
			persons: [
				{ name: getName, age: 25},
				{ name: 'Juan',  age: 69},
				{ name: getName, age: 27}			 
			]
		} );
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
				{ name: 'Stuart', age: 25},
				{ name: event.target.value, age: 69},
				{ name: 'Stephanie', age: 27}
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
		let persons = null;

		if(this.state.showPersons){
			persons = (
				<div>
				{this.state.persons.map((person, index) => {
					return <Person name={person.name} click={() => this.deletePersonsHandler(index)} age={person.age} key={person.id} chnaged={(event) => this.nameChangeHandler(event, person.id)}/>
				})}
				</div>
			);
		}else{
			persons = (
				<div>
					<h3>No Results found</h3>
				</div>
			);
		}

		const subtextClass = [];

		if(this.state.persons.length <= 2){
			subtextClass.push('subtext_red'); //subtextClass = ['red']
		}
		if(this.state.persons.length <= 1){
			subtextClass.push('bold'); //subtextClass = ['red', 'bold']
		}
		return (
			<div className="App">
				<h1>Hello from App, this is a component</h1>
				<p className={subtextClass.join(' ')}>Here is some subtext </p>
				<StyledButton alt={this.state.showPersons} onClick={this.togglePersonsHandler}>Toggle Persons</StyledButton>
			{persons}
			</div>
		);
	}
}
export default App;
//hot(module)(
//Assignment 2
	// state = {
	// 	currentText: ''
	// }

	// changeCurrentTextHandler = (event) => {
	// 	this.setState({
	// 		currentText: event.target.value
	// 	});
	// }

	// removeCharHandler = (characterIndex) => {
	// 	const text = this.state.currentText.split('');
	// 	text.splice(characterIndex, 1);
	// 	const updatedText = text.join('');
	// 	this.setState({currentText: updatedText});
	// }

	// render(){

	// 	const characters = this.state.currentText.split('').map((ch, index) => {
	// 		return <CharacterCard character={ch} key={index} click={() => this.removeCharHandler(index)}/>; 
	// 	});

	// 	return(
	// 		<div className="App">
	// 			Enter Text: <input type='text' value={this.state.currentText} onChange={this.changeCurrentTextHandler.bind(this)}/>
	// 			<p>Word length: {this.state.currentText.length}</p>
	// 			<Validation textlength={this.state.currentText.length} />
	// 			{characters}
	// 		</div> 
	// 	);
	// }