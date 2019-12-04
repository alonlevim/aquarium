import React from 'react';
import PropTypes from 'prop-types';

import classes from './Food.module.css';

class Food extends React.PureComponent {
    constructor(props){
        super(props);

        this.state = {
            yPosition: 0,
            maxY: window.innerHeight
        };

        this.movementInterval = {
            interval: null,
            timeInMilliseconds: 5
        };
    }

    componentDidMount()
    {
        this.movementInterval.interval = setInterval(
            this.move,
            this.movementInterval.timeInMilliseconds
            );
    }

    move = () => {
        // Check if food at aquarium by y axios
        if( this.state.maxY > this.state.yPosition )
        {
            this.setState({ yPosition: this.state.yPosition+1 });
        }
        else{
            // destroy instance by call aquarium's function
            this.props.destroy();
        }
    };

    render() {
        return (
            <div className={classes.Food} style={{left: this.props.xPosition, top: this.state.yPosition}}>
                Food
            </div>
        )
    }

    componentWillUnmount(){
        clearInterval(this.movementInterval.interval);
    }
}

Food.propTypes = {
    xPosition: PropTypes.number
};

export default Food;