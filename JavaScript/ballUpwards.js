// You throw a ball vertically upwards with an initial speed v (in km per hour). 
//The height h of the ball at each time t is given by h = v*t - 0.5*g*t*t where g is Earth's gravity 
//(g ~ 9.81 m/s**2). A device is recording at every tenth of second the height of the ball. 
//For example with v = 15 km/h the device gets something of the following form: 
//(0, 0.0), (1, 0.367...), (2, 0.637...), (3, 0.808...), (4, 0.881..) ... 
//where the first number is the time in tenth of second and the second number the height in meter.

// Task
// Write a function max_ball with parameter v (in km per hour) that returns the time in tenth of second 
//of the maximum height recorded by the device.

// Examples:
// max_ball(15) should return 4
// max_ball(25) should return 7

//solution
function maxBall(v0) {
    v0 *= 1000 / 360;
    const gravity = 9.81, secondsToTenths = 10;
    return Math.round(v0 / gravity);
}

//others solutions
function maxBall(v0) {
    const g = 9.81, mpsToKph = 3.6, secondsToTenths = 10;
    return Math.round(secondsToTenths * v0 / mpsToKph / g);
}

function maxBall(v0) {

    // Linear coefficient - initial speed, unit conversion form km/h to m/s
    v0 *= 1000 / 3600;

    // Quadratic coefficient - Earth's gravity constant, in m/s**2
    const g = 0.5 * 9.81;

    // Solving linear equation: (v0 - g * t) * t = 0
    // Converting time from seconds to tenths of second
    return Math.round(v0 / g * 5);
}