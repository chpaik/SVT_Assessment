# SVT_Assessment
SVT Robotics - Take Home Recruiting Assessment
One of SVT's microservices calculates which robot should transport a pallet from point A to point B based on which robot is the closest and has the most battery left if there are multiple in the proximity of the load's location. You'll use a provided API endpoint to create a simplified robot routing API.

This is the endpoint to retrieve a list of robots in our robot fleet: https://60c8ed887dafc90017ffbd56.mockapi.io/robots. Note: if that URL doesn't work, a mirror is available here - https://svtrobotics.free.beeceptor.com/robots.

The provided API returns a list of all 100 robots in our fleet. It gives their current position on an xy-plane along with their battery life. Your job is to write an API with an endpoint which accepts a payload with a load which needs to be moved including its identifier and current x,y coordinates and your endpoint should make an HTTP request to the robots endpoint and return which robot is the best to transport the load based on which one is closest the load's location. If there is more than 1 robot within 10 distance units of the load, return the one with the most battery remaining.

The distance between two points is found with the following formula:

distance formula

If the API receives a payload of:

{
    loadId: 231, //Arbitrary ID of the load which needs to be moved.
    x: 5, //Current x coordinate of the load which needs to be moved.
    y: 3 //Current y coordinate of the load which needs to be moved.
}
It should respond with a payload of (note: this is just an example, your results may be different depending on the data available from the API at the time.):

{
    robotId: 58,
    distanceToGoal: 49.9, //Indicates how far the robot is from the load which needs to be moved.
    batteryLevel: 30 //Indicates current battery level of the robot.
}
Requirements
API with POST endpoint that accepts and returns data per the above task description
POST endpoint must be https://localhost:5001/api/robots/closest/ or http://localhost:5000/api/robots/closest/
API can be run locally and tested using Postman or other similar tools
Description of what features, functionality, etc. you would add next and how you would implement them - you shouldn't spend more than a few hours on this project, so we want to know what you'd do next (and how you'd do it) if you had more time
Use git and GitHub for version control
Have fun! We're interested in seeing how you approach the challenge and how you solve problems with code. The goal is for you to be successful, so if you have any questions or something doesn't seem clear don't hesitate to ask. Asking questions and seeking clarification isn't a negative indicator about your skills - it shows you care and that you want to do well. Asking questions is always encouraged at SVT Robotics, and our hiring process is no different.
Deliverables Checklist

API written in Javascript, Typescript, .NET Core, or a similar language
API accepts POST and returns data per above requirements
Repo README has instructions for running and testing the API
Repo README has information about what you'd do next, per above requirements
Create a new public GitHub repo and upload its url to the link you received in your test invite.