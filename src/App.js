import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';
import About from './components/pages/About';

// import { v4 as uuidv4 } from 'uuid';
import Axios from 'axios';

import './App.css';

class App extends Component {

  state = {
    todos: []
  }

  componentDidMount() {
    Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').then(res => this.setState({todos: res.data}) );
  }

  // Toggle Complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.complete = !todo.complete
      }
      return todo;
    })});
  };

  // Delete toDo
  delTodo = (id) => {
    Axios.delete('https://jsonplaceholder.typicode.com/todos/${id}').then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }));
  }

  // Add Todo
  AddTodo = (title) => {
    if (title !== '') {
      Axios.post('https://jsonplaceholder.typicode.com/todos', {
        title,
        complete: false,
      }).then(res => this.setState({ todos: [res.data, ...this.state.todos] }));
    }
  }

  render () {
    console.log(this.state);
    return (

      <Router>
        <div className="App">

          
              <div className="container">

                <Header />

                <div className="container">
                <Route exact path="/" render={props => (
                  <React.Fragment>
                    <AddTodo AddTodo={this.AddTodo}/>
                    <Todos 
                      todos={this.state.todos} 
                      markComplete={this.markComplete} 
                      delTodo={this.delTodo} />
                  </React.Fragment>
                )} />
                <Route path="/about" component={About} />
                </div>

            </div>
        
        </div>

      </Router>
    );
  }
  
}

export default App;
