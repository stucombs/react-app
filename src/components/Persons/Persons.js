import React from 'react';
import Person from './Person/Person';

const persons = (props) => {
	return props.persons.map((person, index) => {
		return <Person name={person.name} value={person.name} click={() => props.clicked(index)} key={person.id} age={person.age} changed={(event) => props.changed(event, person.id)} />
	});
};

export default persons;