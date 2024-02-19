# Sprint 7 project
API Testing for the Urban Grocer Web App

Project Description
This project involves writing and executing API tests for the Urban Grocer Web Application. The focus is on validating the functionality of various API endpoints, including GET, POST, PUT, and DELETE requests. These tests ensure that the Urban Grocer Web App operates as expected, handling various data operations efficiently and correctly.

Technologies and Techniques Used
VSCode: Integrated Development Environment (IDE) used for writing and managing test scripts.
JavaScript: Programming language used for writing test scripts.
Jest: JavaScript testing framework used for writing and executing test cases.
fetch API: Used for making HTTP requests to the Urban Grocer API.
Async/Await: Asynchronous JavaScript features for handling promises and asynchronous code within the tests.

Running the Tests
To run the tests, follow these steps:

1. Set Up Environment:
- Ensure that Node.js and npm (Node Package Manager) are installed on your machine.
- Install Jest globally using npm: npm install -g jest

2. Clone the Repository:
- Clone the repository containing the tests to your local machine.

3. Install Dependencies:
- Navigate to the project directory in your terminal.
- Run npm install to install required dependencies.

4. Run the Tests:
- Execute the tests by running npx jest in the terminal.
- Jest will automatically find and run all test files.

5. Coding Principles and Best Practices

Naming Conventions
- Variables: Follow the camelCase convention for variable names (e.g., productCount, responseStatusCode).
- Functions: Function names start with a verb to clearly indicate the action they perform (e.g., fetchData, updateKit).

Variable Declaration
let vs const:
- Use const to declare variables whose values should not change after initialization. This ensures immutability where applicable (e.g., const config = require('../config');).
- Use let for variables whose values are expected to change (e.g., let responseStatusCode;).

Comments
- Comments are used to explain the purpose of complex logic or to provide context where necessary. This improves code readability and maintainability.

Test Structure
- Each test case is clearly named to describe its purpose and expected outcome.
- Tests are organized logically by HTTP request types (GET, POST, PUT, DELETE).