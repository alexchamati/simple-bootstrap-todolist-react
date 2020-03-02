import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, InputGroup, } from 'react-bootstrap';


class AddTodo extends Component {

    state = {
        title: ''
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.AddTodo(this.state.title);
        this.setState({title: ''}); 
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

  render () {
    return (
        <Form onSubmit={this.onSubmit}>
            <InputGroup className="mb-3">
                <Form.Control
                    type="text"
                    name="title"
                    style={{flex: '1', padding: '5px'}}
                    placeholder="Add todo ..."
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <InputGroup.Append>
                <Button type="submit" variant="primary">Valider</Button>
                </InputGroup.Append>
            </InputGroup>
        </Form>
    );
  }
  
}

// PropTypes
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}

export default AddTodo;
