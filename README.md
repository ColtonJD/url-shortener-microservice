# URL Shortener Microservice

URL Shortening service project for freeCodeCamp.com. Shout out to Coding Tutorials 360 for the help. 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

-Node.js
-Express.js: npm install express
-MongoDB for Node.js: npm install mongodb
-mongoosedb: https://www.npmjs.com/package/mongoose || npm install mongoose
-shortid: https://www.npmjs.com/package/shortid || npm install shortid
-Your Favorite Editor
-A Shell

### Installing

1. Download project
2. Install Dependecies 
3. Create a file named config.js in the root directory
4. Copy code from demo-config.js into config.js and add in your db url with credentials
5. Run connect.js (node connect.js): console.log response should be "Connection establish to, <your db url>"
6. Open server.js in your editor.
  1. Update PORT in app.listen() on line 57 as well as the console.log("Connectted on port: " + <yourport>)
  2. Add host name to string output on line 36. 
7. Run server.js (node server.js): console should log out "Connect on Port <yourport>"

## Running the tests

1. <yourhost>/ should respond with index.html
2. <yourhost>/new/test should respond "test is not a valid URL. Please return to home and try again."
3. <yourhost>/new/www.facebook.com should respond with "Success! Your new short url is: <yourhost>/someid"
  - Copy the short URL and paste into browser. This should automatically redirect to facebook.com

## Authors

* **Colton Dale** *Initial work* -(https://github.com/ColtonJD)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* freeCodeCamp
* Coding Tutoirials 360 - https://www.youtube.com/user/pizzapokerguy87
