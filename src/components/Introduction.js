import React, { Component } from 'react'

export default class Introduction extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: 'Hi',
            userInput: ''
        }
    }

    handleInput = (e) => {
        const { value } = e.target;
        this.setState({ userInput: value });
    }

    render() {
        return (
            <div>
                <input value={this.state.userInput} onChange={this.handleInput.bind(this)} />
                <h1>{this.state.userInput}</h1>
            </div>
        );
    }

}