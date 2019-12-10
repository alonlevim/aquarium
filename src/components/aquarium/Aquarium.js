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

const BORDER_RADIUS = 30;
const SCALE_BUBBLE = { min: 0.1, max: 1.5 };

class Aquarium extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            currentBubbles: 0,
            bubblesList: new Array(50),
            fishCount: 0,
            fishList: [],
            foodInstance: null,
            rectAquarium: null
        };

        this.addBubbleInterval = {
            interval: null,
            timeInMilliseconds: 250
        };

        this.aquariumRef = React.createRef();

        this.foodPoint = null;

        // When click on aquarium show one food
        document.addEventListener("click", this.handleClick);
        window.addEventListener('resize', this.handleResize);
    }

    componentDidMount() {
        this.getAquariumSizeInfo();
        this.addBubbleToScreen();
    }

    handleClick = (event) => {
        // Check if there is no food in aquarium
        if (!this.state.foodInstance) {
            // Check mouse clicked on this aquarium
            const mousePoint = { x: event.pageX, y: event.pageY, width: 1, height: 1 };
            const { rectAquarium } = this.state;

            if (Utils.collisionDetection(mousePoint, rectAquarium)) {
                const foodInstance = <Food
                    xPosition={event.pageX - this.state.rectAquarium.x}
                    destroy={this.destroyFood}
                    rectAquarium={this.state.rectAquarium}
                    update={this.updateFood}
                />;

                this.setState({ foodInstance });
            }
        }
    };
    handleResize = (event) => {
        this.getAquariumSizeInfo();
    };

    /**
     * Remove food from state
     */
    destroyFood = () => {
        // Clear food point
        this.foodPoint = null;
        this.setState({ foodInstance: null });
    };

    addBubbleToScreen = () => {
        this.addBubbleInterval.interval = setInterval(() => {
            this.setState((state) => {
                // New assign to object bubbles
                const { bubblesList } = state;
                let { currentBubbles } = state;

                // If current find in last bubble in list
                if (currentBubbles >= bubblesList.length) {
                    currentBubbles = 0;
                }

                // Get random point to instance bubble
                const xPosition = Math.floor(Math.random() * window.innerWidth);
                // Get random scale of bubble
                const scale = (Math.random() + SCALE_BUBBLE.min) * SCALE_BUBBLE.max;

                // Reset next bubble in list
                bubblesList[currentBubbles + 1 < bubblesList.length ? currentBubbles + 1 : 0] = null;
                // New assign bubble in current index in bubble list
                bubblesList[currentBubbles] = <img
                    key={currentBubbles}
                    src={BubbleSvg}
                    alt=""
                    className={classes.Bubble}
                    style={{ bottom: "50px", right: `${xPosition}px`, transform: `scale(${scale})` }}
                />;
                // Plus current index bubble
                currentBubbles++;

                // Update state
                return { bubblesList, currentBubbles };
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
    getAquariumSizeInfo = () => {
        // Check if aquarium detail override at state
        const elementAquarium = this.aquariumRef.current.getBoundingClientRect();
        const rectAquarium = {
            x: elementAquarium.x + BORDER_RADIUS / 2,
            y: elementAquarium.y + BORDER_RADIUS / 2,
            width: elementAquarium.width - BORDER_RADIUS,
            height: elementAquarium.height - BORDER_RADIUS
        };

        const numberOfFish = elementAquarium.width < 1000 ? 2 : 5;
        this.setState({ rectAquarium, fishCount: numberOfFish }
            // Callback add fish on game
            , this.initInstanceFish);
    }

    initInstanceFish = () => {
        const { fishCount, fishList } = this.state;
        if (fishList.length === 0) {
            for (var i = 0; i < fishCount; i++) {
                fishList.push((index, rectAquarium) =>
                    <Fish
                        key={index}
                        rectAquarium={rectAquarium}
                        food={this.foodPoint}
                        destroyFood={this.destroyFood}
                    />);
            }

            this.setState({ fishList });
        }
    }

    render() {
        return (
            <div className={classes.Aquarium}>
                <GithubIcon />
                <div className={classes.Background} ref={this.aquariumRef}>
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
                    {this.state.bubblesList.map(item => item)}
                    {this.state.foodInstance}
                    {this.state.fishList.map((item, index) => item(index, this.state.rectAquarium))}
                    <img src={LandSvg} alt="" className={classes.Land} />
                    <img src={sunlightSvg} alt="" className={classes.Sunlight} />
                </div>
            </div>
        )
    }

    componentWillUnmount() {
        // When this component is destroy, this function will clear interval and click event listener
        document.removeEventListener("click", this.handleClick);
        document.removeEventListener("resize", this.handleResize);
        clearInterval(this.addBubbleInterval.interval);
    }
}

export default Aquarium;