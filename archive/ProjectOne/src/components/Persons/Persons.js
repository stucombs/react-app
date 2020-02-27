import React, { PureComponent } from 'react';

import Person from './Person/Person';

class Persons extends PureComponent {

	// shouldComponentUpdate(nextProps, nextState){
	// 	console.log('[Persons.js] shouldComponentUpdate');
	// 	if(nextProps.persons !== this.props.persons ||
	// 		 nextProps.changed !== this.props.changed ||
	// 		 nextProps.clicked !== this.props.clicked){
	// 		return true;
	// 	}else{
	// 		return false;
	// 	}
	// }

	getSnapshotBeforeUpdate(prevProps, prevState){
		// console.log('[Persons.js] getSnapshotBeforeUpdate');
		return { message: 'Snapshot!' };
	}

	componentDidUpdate(prevProps, prevState, snapshot){ //for handle side effects
		// console.log('[Persons.js] componentDidUpdate');
	}

	render(){
		// console.log('[Persons.js] rendering...');
		return this.props.persons.map((person, index) => {
				return (
					<Person name={person.name} value={person.name} click={() => this.props.clicked(index)} key={person.id} age={person.age} changed={(event) => this.props.changed(event, person.id)}/>
				);
			})
	}
}

export default Persons;