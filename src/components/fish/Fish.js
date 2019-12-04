import React from 'react';
import PropTypes from 'prop-types';
import * as Utils from '../../utils';

import classes from './Fish.module.css';
import FishSvg from '../../assets/fish.svg';

class Fish extends React.PureComponent {
    constructor(props) {
        super(props);

        // Max position by aquarium minus border
        const maxPositionAquarium = {
            x: props.sizeInfoAquarium.width - props.sizeInfoAquarium.borderRadius,// minus border right and left
            y: props.sizeInfoAquarium.height - props.sizeInfoAquarium.borderRadius// minus border top and bottom
        };

        this.state = {
            size: 1,
            fishPosition: Utils.randomPoint(maxPositionAquarium, { width: 30, height: 30 }),
            direction: "left",
            angle: 0,
            maxPositionAquarium: maxPositionAquarium,
            sizeInfoFish: {
                width: 60,
                height: 50,
                default: true
            }
        };

        this.movementInterval = {
            interval : null,
            timeInMilliseconds: 15
        };
        this.idleTimeout = {
            timeout : null,
            timeInMilliseconds: 1000
        };

        this.maxDistanceToChangeDirectionAndAngle = 10;
    }


    componentDidMount() {
        // Selects by random starting idle mode or move mode
        if( Utils.randomBetweenZeroAndOne() === 1 )
            this.idle();
        else
        {
            this.move();
        }
    }

    move = () => {
        // Get target random point that fish will move
        let targetPoint = Utils.randomPoint(this.state.maxPositionAquarium, this.state.sizeInfoFish);

        // Start move fish to target point,
        // stop when fish collision with target point
        // then call to idle function
        this.movementInterval.interval = setInterval(() => {
            const { fishPosition } = this.state;
            let { angle, direction } = this.state;

            // The next point fish will move in this run interval to target point
            const nextPoint = Utils.calculateNextPoint(fishPosition, targetPoint);
            // Distance between fish and target point
            const distance = Utils.distanceBetweenTwoPoints(fishPosition, targetPoint);

            // Making sure the direction and angle not change when the distance in less 2 digital
            if (distance > this.maxDistanceToChangeDirectionAndAngle) {
                direction = fishPosition.x < nextPoint.x ? "right" : "left";
                // Angle
                angle = Utils.getAngleBetweenTwoPoints(fishPosition, nextPoint) - 180;
            }

            const newPosition = {
                x: nextPoint.x,
                y: nextPoint.y
            };

            // Update state
            this.setState({ fishPosition: newPosition, direction, angle });

            // For check collision detection between fish and target point
            const fishObject = {...newPosition, width: this.state.sizeInfoFish.width, height: this.state.sizeInfoFish.height};
            const targetObject = { ...targetPoint, width: 1, height: 1 };
            // Check if there is collision between fish and target point
            if (Utils.collisionDetection(fishObject, targetObject)) {
                clearInterval(this.movementInterval.interval);
                this.idle();
            }
        }, this.movementInterval.timeInMilliseconds);
    };

    idle = () => {
        this.idleTimeout.timeout = setTimeout(
            // Call to callback after x time
            this.move,
            this.idleTimeout.timeInMilliseconds);
    };

    /**
     * Get width, height and position of fish by reference React
     */
    getFishSizeInfo = (element) => {
        // Check if fish detail overwrite at state
        if (this.state.sizeInfoFish.default) {
            const sizeInfoFish = element.getBoundingClientRect();
            sizeInfoFish.default = false;

            this.setState({ sizeInfoFish })
        }
    }

    render() {
        return (
            <img
                ref={this.getFishSizeInfo}
                src={FishSvg}
                alt=""
                className={classes.Fish}
                style={
                    {
                        top: this.state.fishPosition.y,
                        left: this.state.fishPosition.x,
                        transform: `rotate(${this.state.angle}deg) scaleY(${this.state.direction === "right" ? -1 : 1})`
                    }}
            />
        )
    }

    componentWillUnmount() {
        clearInterval(this.movementInterval.interval);
        clearTimeout(this.idleTimeout.timeout);
    }
}

Fish.propTypes = {
    food: PropTypes.bool
}

export default Fish;