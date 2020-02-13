import React from 'react';
import Person from './Person/Person';

const Persons = (props) => {

	props.persons.map((person, index) => {
					//Error boundary components should wraop person component (Put key in parent component) [Error catches don't work in development]
					return <Person name={person.name} value={person.name} click={() => props.clicked} key={person.id} age={person.age} changed={(event) => props.changed(event,person.id)}/>
				})}
			);
		}else{
			persons = (
				<div>
					<h3>No Results found</h3>
				</div>
			);
		}
}