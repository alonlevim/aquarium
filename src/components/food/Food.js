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

        this.movementInterval = null;
    }

    componentDidMount()
    {
        this.movementInterval = setInterval(this.move, 5);
    }

    move = () => {
        if( this.state.maxY > this.state.yPosition )
        {
            this.setState( (state) => {
                return {yPosition : state.yPosition+1};
            })
        }
        else{
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
        clearInterval(this.movementInterval);
    }
}

Food.propTypes = {
    xPosition: PropTypes.number
};

export default Food;