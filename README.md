
# Autodesk Assignment - takehome_apichallenge

In this assignment Node.js Express was used as the web development framework.
Mocha library was chosen for the unit testing and Winston library was customized for logging.





## Installation and running locally

1- Install the Node.js  (Please refer to to he following link for the installation: https://nodejs.org/en/download/)

2- Extract the folder to an appropriate path

3- Add the dependencies by using npm command

```bash

  cd $(PROJECT_PATH)/apitest
  npm install express
  npm install winston
  npm install supertest
  npm install bodyparser
  npm install chai
  npm install mocha --save-dev
```

4- Start the application by executing the following command inside the apitest folder.

```bash
  cd $(PROJECT_PATH)/apitest
  node .
```
![App Screenshot](https://github.com/berkeoz/takehome_apichallenge/blob/main/screenshots/appstart.JPG?raw=true)

## Logging

A custom logging function is defined and used in the project.

![App Screenshot](https://github.com/berkeoz/takehome_apichallenge/blob/main/screenshots/logger.JPG?raw=true)
## Running Tests

To run tests, run the following command in the project folder

```bash
  cd $(PROJECT_PATH)/apitest
  npm test
```
![App Screenshot](https://github.com/berkeoz/takehome_apichallenge/blob/main/screenshots/testingusecases.JPG?raw=true)

### Commands to Test

In addition to the unit tests  you may use the following curl commands to test it directly from the command line.

Use Case 1:
Get request with an Accept header
```bash
  curl -v http://localhost:8080/ -H "Accept: abc"
```
![App Screenshot](https://github.com/berkeoz/takehome_apichallenge/blob/main/screenshots/getwithheader.JPG?raw=true)

Get request without an Accept header
Use Case 2:
```bash
  curl -v http://localhost:8080
```
![App Screenshot](https://github.com/berkeoz/takehome_apichallenge/blob/main/screenshots/getwithoutheader.JPG?raw=true)

Use Case 3:
Get request to a different path
```bash
  curl -v http://localhost:8080/test
```
![App Screenshot](https://github.com/berkeoz/takehome_apichallenge/blob/main/screenshots/gettoadifferentpath.JPG?raw=true)

Use Case 4:
Post request with an Accept header
```bash
  curl  -v http://localhost:8080 -d 'id=9' -H "Accept: abc" 
```
![App Screenshot](https://github.com/berkeoz/takehome_apichallenge/blob/main/screenshots/postwithheader.JPG?raw=true)

Use Case 5:
Post request without an Accept header
```bash
  curl  -v http://localhost:8080 -d 'id=9' 
```
![App Screenshot](https://github.com/berkeoz/takehome_apichallenge/blob/main/screenshots/postwithoutheader.JPG?raw=true)

Use Case 6:
Post request to a different path
```bash
  curl -v http://localhost:8080/test -H "Accept: abc" 
```
![App Screenshot](https://github.com/berkeoz/takehome_apichallenge/blob/main/screenshots/posttoadifferentpath.JPG?raw=true)