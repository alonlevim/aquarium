import React from 'react';
import Fish from '../fish/Fish';
import Food from '../food/Food';

import classes from './Aquarium.module.css';

class Aquarium extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            foodInstance: null
        };

        document.addEventListener("click", this.handleClick);
    }

    handleClick = (event) => {
        if (!this.state.foodInstance)
            this.setState(
                {
                    foodInstance:
                        <Food
                            xPosition={event.pageX}
                            destroy={this.destroyFood} />
                });
    };

    destroyFood = () => {
        this.setState(
            { foodInstance: null });
    };

    render() {
        return (
            <div className={classes.Aquarium}>
                {this.state.foodInstance}
                <Fish />
            </div>
        )
    }

    componentWillUnmount() {
        document.removeEventListener("click", this.handleClick);
    }
}

export default Aquarium;