import React, { Component } from 'react';

class Die extends Component {
    render() {
        return (
            <div>
                <i className={`fas fa-dice-${this.props.face}`}></i>
            </div>
        );
    }
}

export default Die;