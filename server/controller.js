const axios = require('axios');

const getDistance = (origin, current) => {
  return Math.sqrt(Math.pow(parseFloat(origin.x) - current.x, 2) + Math.pow(parseFloat(origin.y) - current.y, 2));
}

const controller = {
  getClosest: (req, res) => {
    const CLOSE_THRESHHOLD = 10;
    const package = req.body;

    axios.get(`https://60c8ed887dafc90017ffbd56.mockapi.io/robots`)
      .then( response => {
        let bots = response.data;
        let closestDistance = Infinity;
        let closest = null;
        for ( let i = 0; i < bots.length; i++ ) {
          let distance = getDistance(package, bots[i]);
          if ( distance < CLOSE_THRESHHOLD ) {
            console.log('multiple');
            closestDistance = distance;
            closest = closest.batteryLevel > bots[i].batteryLevel ? closest : bots[i];
          } else if ( closestDistance > distance ) {
            closestDistance = distance;
            closest = bots[i];
          }
        }
        let bot = { robotId: closest.robotId, distanceToGoal: closestDistance, batteryLevel: closest.batteryLevel}
        res.status(201).send(bot);
      })
      .catch( err => {
        console.log(err);
        res.status(404).send(err);
      })
  }
}

module.exports = controller;