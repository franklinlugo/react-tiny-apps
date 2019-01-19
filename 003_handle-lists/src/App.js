import React, { Component } from 'react';
import Item from './Item';

class App extends Component {
  state = {
    persons: [
      { id: 123, name: 'Don Henley', age: 71, description: 'percusión, guitarra y voz' },
      { id: 456, name: 'Joe Walsh', age: 71, description: ' guitarra, teclados y voz ' },
      { id: 789, name: 'Timothy B. Schmit', age: 71, description: 'bajo, guitarra y voz' },
    ],
  };
  handleDeleteItem = idx => {
    // 1. copy array
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    // 2. delete item
    persons.splice(idx, 1);
    // 3. copy array to state
    this.setState({ persons });
  };
  handleEditDescription = (event, id) => {
    // 1. get person index
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    // 2. copy person from state
    // let person = Object.assign({}, this.state.persons[personIndex]);
    let person = { ...this.state.persons[personIndex] };
    // 3. update description of persons
    person.description = event.target.value;
    // 4. copy all persons from state
    let persons = [...this.state.persons];
    // 5. update new person description in array of persons
    persons[personIndex] = person;
    // 6. update the state
    this.setState({ persons });
  };
  render() {
    const { persons } = this.state;
    let items = null;
    items = persons.map((person, idx) => (
      <Item
        {...person}
        delItem={() => this.handleDeleteItem(idx)}
        editDes={() => this.handleDeleteItem(idx)}
        changed={event => this.handleEditDescription(event, person.id)}
        key={person.id}
      />
    ));
    return <div>{items}</div>;
  }
}

export default App;
