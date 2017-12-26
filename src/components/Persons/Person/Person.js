import React, { Component } from 'react';

import classes from './Person.css';
import withClass from '../../../hoc/WithClass';
import Aux from '../../../hoc/Ax';

class Person extends Component {
  constructor(props) {
    super(props);
    console.log("[Person.js] Inside Constructor", props);
    this.state = {
      persons: [
        { id: 'qadf', name: 'Matthieu', age: 21 },
        { id: '55tuu', name: 'Jordyn', age: 18},
        { id: '9gkji', name: 'Cameron', age: 19}
      ],
      otherState: 'some other value',
      showPersons: false
    }
  }

  componentWillMount() {
    console.log('[Person.js] Inside componentWillMount');
  }

  componentDidMount() {
    console.log('[Person.js] Inside componentDidMount');
  }

  render () {
    console.log('[Person.js] Inside render()');
    return (
      <Aux>
          <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
          <p>{this.props.children}</p>
          <input type="text" onChange={this.props.changed} value={this.props.name}/>
      </Aux>
    )
  }
}

export default withClass(Person, classes.Person);
