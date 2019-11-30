import React from 'react';
import PropTypes from 'prop-types';

import classes from './Fish.module.css';

class Fish extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            size: 1,
            color: 'orange',
            position: {
                x: 0, y: 0
            },
            maxPosition: {
                x: window.innerWidth,
                y: window.innerHeight
            }
        };

        this.movementInterval = null;
        this.idleTimeout = null;
        this.situations = ['move', 'idle'];
    }

    componentDidMount() {
        this.idle();
    }

    move = () => {
        const positionToMove = {
            x: Math.floor(Math.random() * this.state.maxPosition.x),
            y: Math.floor(Math.random() * this.state.maxPosition.y)
        };

        this.movementInterval = setInterval(() => {
            const position = { ...this.state.position };

            if (positionToMove.x !== position.x) {
                position.x = positionToMove.x > position.x ? position.x + 1 : position.x - 1;
            }
            if (positionToMove.y !== position.y) {
                position.y = positionToMove.y > position.y ? position.y + 1 : position.y - 1;
            }


            this.setState({ position });

            if (position.x === positionToMove.x && position.y === positionToMove.y) {
                clearInterval(this.movementInterval);
                this.idle();
            }
        }, 15);
    };

    idle = () => {
        const time = 1000;
        console.log(`Idle for ${time} milliseconds`);

        this.idleTimeout = setTimeout(this.move, time);
    };

    render() {
        return (
            <div
                className={classes.Fish}
                style={{ top: this.state.position.y, left: this.state.position.x }}
            >
                Fish
            </div>
        )
    }

    componentWillUnmount() {
        clearInterval(this.movementInterval);
        clearTimeout(this.idleTimeout);
    }
}

Fish.propTypes = {
    food: PropTypes.bool
}

export default Fish;