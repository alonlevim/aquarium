/**
 * Calculate equation of linear by 2 different points.
 * return m (slope) and b
 */
export const equationOfLinear = (point1, point2) => {
    const xDistance = point1.x - point2.x;
    const yDistance = point1.y - point2.y;

    const m = xDistance !== 0 ? (yDistance / xDistance) : 0;
    const b = point1.y - (m * point1.x);

    return { m, b };
};

/**
 * Return distance between 2 different points.
 */
export const distanceBetweenTwoPoints = (point1, point2) => {
    return Math.sqrt(Math.pow((point2.x - point1.x), 2) + Math.pow((point2.y - point1.y), 2));
};

/**
 * Return angle between 2 different points.
 */
export const getAngleBetweenTwoPoints = (point1, point2) => {
    return (Math.atan2(point2.y - point1.y, point2.x - point1.x) * 180 / Math.PI).toFixed(3);
};

/**
 * Return random point that between 0 to max position of aquarium minus fish size.
 */
export const randomPoint = (maxPosition, sizeInfoFish) => {
    return {
        x: Math.floor(Math.random() * (maxPosition.x - sizeInfoFish.width)),
        y: Math.floor(Math.random() * (maxPosition.y - sizeInfoFish.height))
    };
};

/**
 * Return next point on linear equation, advanced by plus pixel
 */
export const calculateNextPoint = (point1, point2) => {
    // Get b and m (slope)
    const { m, b } = equationOfLinear(point1, point2);

    // Calculate distance on axios
    const dx = Math.abs(point1.x - point2.x);
    const dy = Math.abs(point1.y - point2.y);

    let newX;
    let newY;
    // If distance x bigger than distance y, changing x position and accordingly changing y position
    if (dx > dy) {
        // If x of point1 is smaller from x point2
        if (point1.x < point2.x) {
            // Add pixel at x axios
            newX = point1.x + 1;
        }
        else {
            // Less pixel at x axios
            newX = point1.x - 1;
        }

        // Calculate y position by new x position
        newY = m * newX + b;
    }
    else {
        // If y of point1 is smaller from y point2
        if (point1.y < point2.y) {
            // Add pixel at y axios
            newY = point1.y + 1;
        }
        else {
            // Less pixel at y axios
            newY = point1.y - 1;
        }

        // Calculate x position by new y position, if m is 0 then copy value for old x point2
        newX = m !== 0 ? (newY - b) / m : point2.x;
    }

    return {
        x: newX,
        y: newY
    }
};

/**
 * Check if 2 different objects collision each other
 */
export const collisionDetection = (rect1, rect2) => {
    return (rect1.x < rect2.x + rect2.width &&
        rect1.x + rect1.width > rect2.x &&
        rect1.y < rect2.y + rect2.height &&
        rect1.y + rect1.height > rect2.y)
}

/**
 * Return zero or one by random math function
 */
export const randomBetweenZeroAndOne = () => {
    return Math.round( Math.random() );
};