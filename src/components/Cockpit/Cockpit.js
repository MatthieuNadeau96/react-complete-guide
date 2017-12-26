import React from 'react';

import classes from './Cockpit.css';
import Aux from '../../hoc/Ax';

const cockpit = ( props ) => {

  const assignedClasses = ['transition'];
  let btnClass = classes.Button;
  if(props.showPersons) {
    btnClass = [classes.Button, classes.Red].join(' ');
  }

  if (props.persons.length <= 2) {
    assignedClasses.push( classes.red );
  }
  if (props.persons.length <= 1) {
    assignedClasses.push( classes.bold );
  }
  if (props.persons.length === 0) {
    assignedClasses.push( classes.big );
  }

  return (
    <Aux>
      <h1>{ props.appTitle }</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button
        className={btnClass}
        onClick={props.clicked}>Toggle Persons</button>
    </Aux>
  );
}

export default cockpit;
