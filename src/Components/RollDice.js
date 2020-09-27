import React, { Component } from 'react';
import Die from './Die';

class RollDice extends Component {

    static defaultProps = {
        sides : ["one", "two", "three", "four", "five", "six"]
    }

    state = {
        face1 : "one",
        face2 : "one",
        isRoll : false
    }



    roll = () => {
        let dice1 = Math.floor(Math.random() * this.props.sides.length);
        let dice2 = Math.floor(Math.random() * this.props.sides.length);
        this.setState({
            face1 : this.props.sides[dice1],
            face2 : this.props.sides[dice2],
            isRoll: true
        });

        setTimeout(() => {
            this.setState({
                isRoll : false
            })
        }, 500);
    }

    render() {
        return (
            <div>
                <div className="flex-container">
                    <Die face={this.state.face1}/>
                    <Die face={this.state.face2}/>
                </div>
                <button className="roll-dice-btn" onClick={this.roll}>
                    { !this.state.isRoll && "Roll Dice !!!!"}
                    { this.state.isRoll && "Rolling ...."}
                </button>
            </div>
        );
    }
}

export default RollDice;