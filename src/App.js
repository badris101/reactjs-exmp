import React, { Component } from 'react';
import List from './List';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: []
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.todoDelete = this.todoDelete.bind(this);
  }

  todoDelete(index){
    this.state.items.splice(index, 1);
    this.setState({
      term: ''
    });
  }

  onChange(event) {
    this.setState({ term: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    });
  }

  render() {
    return (
      <div>
        <form className="App" onSubmit={this.onSubmit}>
          <input value={this.state.term} onChange={this.onChange} />
          <button>Submit</button>
        </form>
        <List items={this.state.items} ToDelete={this.todoDelete}/>
      </div>
    );
  }
}

export default App;
