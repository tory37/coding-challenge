Waitr Coding Challenge
==================================

This application allows a user to create drivers and reviews
for said drivers who make deliveries.  It also allows for creating
reviews of the deliveries. 

Application
===========
https://lit-plateau-64652.herokuapp.com/

How to Run Locally
==========
* Assuming mongodb and node are installed:
* npm install in /frontend and /backend
* make sure mongo is running locally
* In /frontend, npm run build
* In /backend, npm run start
* go to localhost:3000

Solution
=======
* This is a full stack implementation, using the MEAN stack.
* I chose this stack because of my experience with Angular, and the ability to create a project quickly with node, express and mongo. This being a small application, these technologies seemed to be the most appropriate for quickly creating a solution, while allowing it to be easily scaled in the future.
* I had never written a node api before, so this took the most time.
* I wrote a simple front end angular application, styling with Bootstrap 4, as I have experience with it. I used the angular-cli to generate the framework, then created the components and service from there.  The front end is minimal, allowing for the needed commands to show the backend working
* Grunt is used to copy the compiled angular application to the backend directory, which forms the whole app.  This allows me to keep a separation during development.
* I deployed mongo to Google Cloud Platform, using mLab as it provided 500 MB of storage for free
* I deployed the application to Heroku, which seemed to be the best choice as far as ease of use and the free tier

Further Improvement
===================
* The biggest thing missing from this solution was a way to create deliveries.  This was left out as a time constraint, and could be easily implemented in the future.  The delivery reviews currently have a delivery id, but these do not reference to specific deliveries as they do not exist in the database.
* The models are unit tested.  Trouble was had unit testing the controllers, while mocking out mongoose queries. 

Resume
======
https://docs.google.com/document/d/1UGMEqBfI7VEo1AYKWEqr4RHzGCz1lei9dX4DVomlq_A/pub