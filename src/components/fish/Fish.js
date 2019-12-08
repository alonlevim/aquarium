import React from 'react';
import PropTypes from 'prop-types';
import * as Utils from '../../utils';

import classes from './Fish.module.css';
import FishSvg from '../../assets/fish.svg';

const DIRECTION = {
    RIGHT: "right",
    LEFT: "left"
};

class Fish extends React.PureComponent {
    constructor(props) {
        super(props);

        // Max Aquarium point on screen
        const maxPositionAquarium = {
            x: props.rectAquarium.width,
            y: props.rectAquarium.height
        };
        // Movement fish
        this.movementInterval = {
            interval: null,
            defaultTimeInMilliseconds: 15
        };

        this.state = {
            size: 1,
            fishPosition: Utils.randomPoint(maxPositionAquarium, { width: 30, height: 30 }),
            direction: DIRECTION.LEFT,
            angle: 0,
            speed: this.movementInterval.defaultTimeInMilliseconds,
            maxPositionAquarium: maxPositionAquarium,
            sizeInfoFish: {
                width: 60,
                height: 50,
                default: true
            },
            food: {
                point: null
            }
        };

        // Idle fish
        this.idleTimeout = {
            timeout: null,
            timeInMilliseconds: 1000
        };

        this.maxDistanceToChangeDirectionAndAngle = 10;
    }


    componentDidMount() {
        // Selects by random starting idle mode or move mode
        if (Utils.randomBetweenZeroAndOne() === 1)
            this.idle();
        else {
            this.move();
        }
    }

    componentDidUpdate(props, state) {
        // There is food or after the food destroyed
        if (props.food || state.food.point) {
            this.setState((oldState) => {
                let { food, speed } = { ...oldState };
                // Update food point
                food.point = props.food;
                // Speed fish change to be fast fish if have food or default if there is no
                speed = props.food ? 1 : this.movementInterval.defaultTimeInMilliseconds;

                return { food, speed };
            }, this.move);
        }
    }

    move = () => {
        // Disable move interval if there is
        clearInterval(this.movementInterval.interval);
        // Get target random point that fish will move
        let tempTargetPoint = Utils.randomPoint(this.state.maxPositionAquarium, this.state.sizeInfoFish);

        // Start move fish to target point,
        // stop when fish collision with target point
        // then call to idle function
        this.movementInterval.interval = setInterval(() => {
            // Check if there is food on screen
            // The target point will be food point if there is in aquarium
            // Else temp target point
            const targetPoint = this.state.food.point || tempTargetPoint;

            const { fishPosition } = this.state;
            let { angle, direction } = this.state;

            // The next point fish will move in this run interval to target point
            const nextPoint = Utils.calculateNextPoint(fishPosition, targetPoint);
            // Distance between fish and target point
            const distance = Utils.distanceBetweenTwoPoints(fishPosition, targetPoint);

            // Making sure the direction and angle not change when the distance in less 2 digital
            if (distance > this.maxDistanceToChangeDirectionAndAngle) {
                direction = fishPosition.x < nextPoint.x ? DIRECTION.RIGHT : DIRECTION.LEFT;
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
            const fishObject = { ...newPosition, width: this.state.sizeInfoFish.width, height: this.state.sizeInfoFish.height };
            const targetObject = { ...targetPoint, width: 1, height: 1 };
            // Check if there is collision between fish and target point
            if (Utils.collisionDetection(fishObject, targetObject)) {
                // Disable next run
                clearInterval(this.movementInterval.interval);

                // If the target is food
                if (this.state.food.point) {
                    this.eatFood();
                }
                else {
                    this.idle();
                }
            }
        }, this.state.speed);
    };

    idle = () => {
        this.idleTimeout.timeout = setTimeout(
            // Call to callback after x time
            this.move,
            this.idleTimeout.timeInMilliseconds);
    };

    /**
     * When have collision fish with food, then destroy food
     */
    eatFood = () => {
        this.props.destroyFood();
        // Increase fish size
        this.setState({ size: this.state.size + 1 });
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
        const {fishPosition, angle, size, direction} = this.state;

        return (
            <img
                ref={this.getFishSizeInfo}
                src={FishSvg}
                alt=""
                className={classes.Fish}
                style={
                    {
                        top: fishPosition.y,
                        left: fishPosition.x,
                        transform: `
                        rotate(${angle}deg)
                        scale(${0.9 + (size * 0.1)}, ${direction === DIRECTION.RIGHT ? (0.9 + (size * 0.1)) * (-1) : (0.9 + (size * 0.1))})
                        `
                    }}
            />
        )
    }

    componentWillUnmount() {
        // When this component is destroy, this function will clear interval and timeout
        clearInterval(this.movementInterval.interval);
        clearTimeout(this.idleTimeout.timeout);
    }
}

Fish.propTypes = {
    food: PropTypes.object
}

export default Fish;