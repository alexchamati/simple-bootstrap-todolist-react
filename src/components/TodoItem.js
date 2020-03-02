import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup, Form, Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

class TodoItem extends Component  {
    
    // Dynamic Style
    getStyle = () => {
        return {
            textDecoration : this.props.todo.complete ? 'line-through' : 'none',
            textAlign: 'center'
        }
    }
    
    
    render() {
        const { id, title } = this.props.todo;
        return (


            <Alert className="itemList" variant="info">
                
                <Form.Check 
                    inline
                    size="ms" 
                    label={title}
                    id={title}
                    type="checkbox"
                    onChange={this.props.markComplete.bind(this, id)}
                    style={this.getStyle()}
                />

                <a 
                    style={btnStyle}
                    onClick={this.props.delTodo.bind(this, id)} 
                >
                    <FontAwesomeIcon icon={faTrashAlt}  style={{color: '#dc3545', fontSize: '17px'}} />
                </a>

                {/* <ButtonGroup size="sm" aria-label="Basic example" style={{ float: 'right' }}>
                    <Button size="sm" variant="info">!</Button>
                    <Button variant="warning">!!</Button>
                    <Button variant="danger">!!!</Button>
                </ButtonGroup> */}

            </Alert>
        );
    };
}

// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

// Styles
const btnStyle = {
    cursor: 'pointer',
    float: 'right',
}

// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
}

export default TodoItem;
