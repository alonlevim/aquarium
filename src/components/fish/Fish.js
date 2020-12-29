import React from 'react';
import PropTypes from 'prop-types';
import * as Utils from '../../utils';

import classes from './Fish.module.css';
import FishSvg from '../../assets/fish.svg';

const DIRECTION = {
    RIGHT: "right",
    LEFT: "left"
};

const MAX_DISTANCE_TO_CHANGE_DIRECTION_AND_ANGLE = 10;
const INCREASE_THE_FISH_BY = 5;
const FOOD_LIMIT = 20;
// Frames
const MAX_FPS = 60;
const FRAME_RATE_DEFAULT = 24;
const FRAME_RATE_FOOD_MODE = (MAX_FPS - 15);

class Fish extends React.PureComponent {
    constructor(props) {
        super(props);

        // Max Aquarium point on screen
        const maxPositionAquarium = {
            x: props.rectAquarium.width,
            y: props.rectAquarium.height
        };

        this.state = {
            size: 0,
            fishPosition: Utils.randomPoint(maxPositionAquarium, { width: 30, height: 30 }),
            direction: DIRECTION.LEFT,
            angle: 0,
            frameRate: FRAME_RATE_DEFAULT,
            rectAquarium: {
                width: 60,
                height: 50,
                default: true
            },
            foodPoint: null,
            move: false,
        };

        // Idle fish
        this.idleTimeout = {
            timeout: null,
            timeInMilliseconds: 1000
        };

        this.frameCount = 0;
        this.tempTargetPoint = null;
        this.requestAnimationFrameStarted = false;
    }

    componentDidMount() {
        this.start();
    }

    componentDidUpdate(props, state) {
        // There is food or after the food destroyed
        if (props.food || state.foodPoint) {
            this.setState((oldState) => {
                let { foodPoint, frameRate } = { ...oldState };
                // Update food point
                foodPoint = props.food;
                // Speed fish change to be fast fish if have food or default if there is no
                frameRate = props.food ? FRAME_RATE_FOOD_MODE : FRAME_RATE_DEFAULT;

                return { foodPoint, frameRate };
            }, this.start);
        }
    }

    init = (CouldToBeIdle = true) => {
        const { foodPoint } = this.state;

        // Selects by random starting idle mode or move mode
        if (foodPoint === null && CouldToBeIdle && Utils.randomBetweenZeroAndOne() === 1)
            return this.idle();

        // Get target random point that fish will move
        const { rectAquarium } = this.props;
        const maxPositionAquarium = {
            x: rectAquarium.width,
            y: rectAquarium.height
        };

        this.tempTargetPoint = Utils.randomPoint(maxPositionAquarium, this.state.rectAquarium);

        // start move
        this.setState({ move: true });
    }

    move = () => {
        const { move, frameRate } = this.state;

        this.frameCount++;

        // Start move fish to target point,
        // stop when fish collision with target point
        // then call to idle function
        if (move && this.frameCount >= Math.round(MAX_FPS / frameRate)) {
            // Check if there is food on screen
            // The target point will be food
            // Else random target point
            const targetPoint = this.state.foodPoint || this.tempTargetPoint;

            const { fishPosition } = this.state;
            let { angle, direction } = this.state;

            // The next point fish will move in this step to target point
            const nextPoint = Utils.calculateNextPoint(fishPosition, targetPoint);
            // Distance between fish and target point
            const distance = Utils.distanceBetweenTwoPoints(fishPosition, targetPoint);

            // Making sure the direction and angle not change when the distance in less 2 digital
            if (distance > MAX_DISTANCE_TO_CHANGE_DIRECTION_AND_ANGLE) {
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
            const fishObject = { ...newPosition, width: this.state.rectAquarium.width, height: this.state.rectAquarium.height };
            const targetObject = { ...targetPoint, width: 1, height: 1 };
            // Check if there is collision between fish and target point
            if (Utils.collisionDetection(fishObject, targetObject)) {
                // Disable next run
                this.setState({ move: false });

                // If the target is food
                if (this.state.foodPoint) {
                    this.eatFood();
                }
                else {
                    this.idle();
                }
            }

            this.frameCount = 0;
        }

        window.requestAnimationFrame(this.move);
    };

    idle = () => {
        this.setState({ move: false });
        this.idleTimeout.timeout = setTimeout(
            // Call to callback after x time
            () => {
                this.start(false);
            },
            this.idleTimeout.timeInMilliseconds);
    };

    start = (CouldToBeIdle) => {
        this.init(CouldToBeIdle);

        if (!this.requestAnimationFrameStarted) {
            this.requestAnimationFrameStarted = true;
            window.requestAnimationFrame(this.move);
        }
    }

    /**
     * When have collision fish with food, then destroy food
     */
    eatFood = () => {
        this.props.destroyFood();
        // Increase fish size
        if (this.state.size < FOOD_LIMIT)
            this.setState({ size: this.state.size + 1 });
    };

    /**
     * Get width, height and position of fish by reference React
     */
    getFishSizeInfo = (element) => {
        // Check if fish detail overwrite at state
        if (this.state.rectAquarium.default) {
            const rectAquarium = element.getBoundingClientRect();
            rectAquarium.default = false;

            this.setState({ rectAquarium })
        }
    }

    render() {
        const { fishPosition, rectAquarium, angle, size, direction } = this.state;

        return (
            <img
                ref={this.getFishSizeInfo}
                src={FishSvg}
                alt=""
                className={classes.Fish}
                style={
                    {
                        width: rectAquarium.width + (size * INCREASE_THE_FISH_BY),
                        height: rectAquarium.height + (size * INCREASE_THE_FISH_BY),
                        top: fishPosition.y,
                        left: fishPosition.x,
                        transform: `
                        rotate(${angle}deg)
                        scaleY(${direction === DIRECTION.RIGHT ? -1 : 1})
                        `
                    }}
            />
        )
    }

    componentWillUnmount() {
        // When this component is destroy, this function will clear timeout
        clearTimeout(this.idleTimeout.timeout);
    }
}

Fish.propTypes = {
    food: PropTypes.object,
    rectAquarium: PropTypes.object,
    destroyFood: PropTypes.func
}

export default Fish;