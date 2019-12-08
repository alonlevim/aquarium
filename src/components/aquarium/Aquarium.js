import React from 'react';
import Fish from '../fish/Fish';
import Food from '../food/Food';
import GithubIcon from '../githubIcon/GithubIcon';
import * as Utils from '../../utils';

import classes from './Aquarium.module.css';
import LandSvg from '../../assets/land.svg';
import RocksSvg from '../../assets/rocks.svg';
import RockSvg from '../../assets/rock.svg';
import StandingSvg from '../../assets/standing.svg';
import Standing2Svg from '../../assets/standing2.svg';
import sunlightSvg from '../../assets/sunlight.svg';
import SeaKelpSvg from '../../assets/sea-kelp.svg';
import BlueShapeSvg from '../../assets/blue-shape.svg';
import BlueShape2Svg from '../../assets/blue-shape2.svg';
import GreenShapeSvg from '../../assets/green-shape.svg';
import GreenShape2Svg from '../../assets/green-shape2.svg';
import PurpleShapeSvg from '../../assets/purple-shape.svg';
import RedShapeSvg from '../../assets/red-shape.svg';
import BubbleSvg from '../../assets/bubble.svg';
import Rock2Svg from '../../assets/rock2.svg';
import { clearInterval } from 'timers';


class Aquarium extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            bubbles: {
                current: 0,
                list: new Array(50)
            },
            fish: {
                count: 5,
                list: []
            },
            food: {
                instance: null,
                slowDownTimeInMilliseconds: 25
            },
            rectAquarium: null
        };

        this.addBubbleInterval = {
            interval: null,
            timeInMilliseconds: 250
        };

        this.borderRadius = 30;
        this.scaleBubble = { min: 0.1, max: 1.5 };

        this.foodPoint = null;

        // When click on aquarium show one food
        document.addEventListener("click", this.handleClick);
    }

    componentDidMount() {
        this.addBubbleToScreen();
    }

    handleClick = (event) => {
        // Check if there is no food in aquarium
        if (!this.state.food.instance) {
            // Check mouse clicked on this aquarium
            const mousePoint = { x:event.pageX, y: event.pageY, width: 1, height: 1 };
            const { rectAquarium } = this.state;

            if( Utils.collisionDetection(mousePoint, rectAquarium) )
            {
                const food = { ...this.state.food };

                food.instance = <Food
                    xPosition={event.pageX - this.state.rectAquarium.x}
                    destroy={this.destroyFood}
                    rectAquarium={this.state.rectAquarium}
                    init={this.state.food}
                    update={this.updateFood}
                />;
    
                this.setState({ food });
            }
        }
    };

    /**
     * Remove food from state
     */
    destroyFood = () => {
        const food = { ...this.state.food };
        food.instance = this.foodPoint = null;

        this.setState({ food });
    };

    addBubbleToScreen = () => {
        this.addBubbleInterval.interval = setInterval(() => {
            this.setState((state) => {
                // New assign to object bubbles
                const bubbles = { ...state.bubbles };

                // If current find in last bubble in list
                if (bubbles.current >= bubbles.list.length) {
                    bubbles.current = 0;
                }

                // Get random point to instance bubble
                const xPosition = Math.floor(Math.random() * window.innerWidth);
                // Get random scale of bubble
                const scale = (Math.random() + this.scaleBubble.min) * this.scaleBubble.max;

                // Reset next bubble in list
                bubbles.list[bubbles.current + 1 < bubbles.list.length ? bubbles.current + 1 : 0] = null;
                // New assign bubble in current index in bubble list
                bubbles.list[bubbles.current] = <img
                    key={bubbles.current}
                    src={BubbleSvg}
                    alt=""
                    className={classes.Bubble}
                    style={{ bottom: "50px", right: `${xPosition}px`, transform: `scale(${scale})` }}
                />;
                // Plus current index bubble
                bubbles.current++;

                // Update state
                return { bubbles };
            });
        }, this.addBubbleInterval.timeInMilliseconds);
    }

    /**
     * When food position changed, will update food point without state in this component
     */
    updateFood = (food) => {
        this.foodPoint = food;
    };

    /**
     * Get width, height and position of aquarium by reference React
     */
    getAquariumSizeInfo = (element) => {
        // Check if aquarium detail overwrite at state
        this.setState((state) => {
            if (!state.rectAquarium) {

                const elementAquarium = element.getBoundingClientRect();
                const rectAquarium = {
                    x: elementAquarium.x + this.borderRadius/2,
                    y: elementAquarium.y + this.borderRadius/2,
                    width: elementAquarium.width - this.borderRadius,
                    height: elementAquarium.height - this.borderRadius
                };

                return { rectAquarium };
            }
            // Callback add fish on game
        }, this.initInstanceFish());
    }

    initInstanceFish = () => {
        this.setState((state) => {
            const fish = { ...state.fish };

            for (var i = 0; i < fish.count; i++) {
                fish.list.push((index, rectAquarium) =>
                    <Fish
                        key={index}
                        rectAquarium={rectAquarium}
                        food={this.foodPoint}
                        destroyFood={this.destroyFood}
                    />);
            }

            return state;
        });
    }

    render() {
        return (
            <div className={classes.Aquarium}>
                <div className={classes.Background} ref={this.getAquariumSizeInfo}>
                    <GithubIcon />
                    <img src={StandingSvg} alt="" className={classes.Standing} />
                    <img src={Standing2Svg} alt="" className={classes.Standing2} />
                    <img src={SeaKelpSvg} alt="" className={classes.SeaKelp} />
                    <img src={RockSvg} alt="" className={classes.Rock} />
                    <img src={RocksSvg} alt="" className={classes.Rocks} />
                    <img src={BlueShapeSvg} alt="" className={classes.BlueShape} />
                    <img src={BlueShape2Svg} alt="" className={classes.BlueShape2} />
                    <img src={Rock2Svg} alt="" className={classes.Rock2} />
                    <img src={Rock2Svg} alt="" className={classes.Rock3} />
                    <img src={GreenShapeSvg} alt="" className={classes.GreenShape} />
                    <img src={GreenShape2Svg} alt="" className={classes.GreenShape2} />
                    <img src={PurpleShapeSvg} alt="" className={classes.PurpleShape} />
                    <img src={RedShapeSvg} alt="" className={classes.RedShape} />
                    {this.state.bubbles.list.map(item => item)}
                    {this.state.food.instance}

                    {this.state.fish.list.map((item, index) => item(index, this.state.rectAquarium))}

                    <img src={LandSvg} alt="" className={classes.Land} />
                    <img src={sunlightSvg} alt="" className={classes.Sunlight} />
                </div>
            </div>
        )
    }

    componentWillUnmount() {
        // When this component is destroy, this function will clear interval and click event listener
        document.removeEventListener("click", this.handleClick);
        clearInterval(this.addBubbleInterval.interval);
    }
}

export default Aquarium;