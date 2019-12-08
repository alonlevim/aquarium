import React from 'react';
import PropTypes from 'prop-types';
import * as Utils from '../../utils';

import classes from './Food.module.css';
import YellowFoodSvg from '../../assets/yellow-food.svg';
import GreenFoodSvg from '../../assets/green-food.svg';

const FOOD_COLOR = {
    GREEN: {
        src: GreenFoodSvg,
        class: 'green'
    },
    YELLOW: {
        src: YellowFoodSvg,
        class: 'yellow'
    }
};

class Food extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            yPosition: 0,
            maxY: props.rectAquarium.height,
            color: Utils.randomBetweenZeroAndOne() ? FOOD_COLOR.GREEN : FOOD_COLOR.YELLOW
        };

        this.movementInterval = {
            interval: null,
            timeInMilliseconds: props.init.slowDownTimeInMilliseconds
        };
    }

    componentDidMount() {
        this.movementInterval.interval = setInterval(
            this.move,
            this.movementInterval.timeInMilliseconds
        );
    }

    move = () => {
        // Check if food at aquarium by y axios
        if (this.state.maxY > this.state.yPosition) {
            const newYPosition = this.state.yPosition + 1;

            this.setState({ yPosition: newYPosition });

            this.props.update({
                y: newYPosition,
                x: this.props.xPosition
            });
        }
        else {
            // destroy instance by call aquarium's function
            this.props.destroy();
        }
    };

    render() {
        const { xPosition } = this.props;
        const { yPosition, color } = this.state;

        return (
            <img
                src={color.src}
                alt=""
                className={[classes.Food, classes[color.class]].join(" ")}
                style={{ left: xPosition, top: yPosition }}
            />
        )
    }

    componentWillUnmount() {
        // When this component is destroy, this function will clear interval
        clearInterval(this.movementInterval.interval);
    }
}

Food.propTypes = {
    xPosition: PropTypes.number
};

export default Food;