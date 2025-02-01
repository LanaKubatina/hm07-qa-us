# Urban Grocers Web App
**Skills:**
- Postman
- API Testing
- JSON
- XML
- DevTools
- Test Design
- Swagger
- Docs
- Test Automation
- Debugging
- Node.js
- JavaScript
- GitHub

## Overview
The Urban Grocers API is a backend service for an online grocery shopping platform. It allows users to:
- Add groceries to their cart,
- Manage shopping kits,
- Check out and arrange delivery,
- View and modify orders,
- Delete carts when needed.

This project also involves **both manual and automated UI testing**, focusing on validating the app's functionality to ensure a seamless user experience. The API is crucial for handling grocery orders efficiently and ensuring seamless interactions between users and the system.

## Manual API Testing ([Checklist](https://docs.google.com/spreadsheets/d/1DrQHm3GEv9J0uyn5pXegBEUGGx84yDLC8GosU0rwt6U/edit?usp=sharing))
I conducted comprehensive API validation to ensure the system handled grocery orders correctly. My testing covered endpoint functionality, input validation, and business logic compliance.
### Achievements
1. **API Endpoint Testing**
- Tested GET, POST, PUT, and DELETE requests for various operations:
- Adding products to kits
- Managing shopping carts
- Checking delivery availability
- Removing items/orders
- Verified status codes (200 OK, 400 Bad Request, 404 Not Found, 409 Conflict) for different cases.
2. **Input Validation Testing**
- Checked system behavior with valid and invalid inputs:
- ID validation: Ensured correct handling of existing, non-existing, long, negative, and string-based IDs.
- Quantity validation: Tested edge cases like negative numbers, long numbers, string values, missing parameters, and empty fields.
- Product list validation: Evaluated responses when empty product lists, incorrect formats, and missing parameters were sent.
3. **Business Logic Testing**
- Checked order limits:
- Verified handling of product count restrictions (1-7 and 8-14 range).
- Ensured the API rejected orders exceeding the maximum allowed items.
- Validated delivery time processing:
- Tested operating hours (07:00-21:00) and system behavior for out-of-hours requests.
- Assessed price calculation based on weight and quantity.
4. **Error Handling and Bug Reporting**
- Identified 57 failed test cases out of 111, highlighting key areas for improvement.
- Reported API failures related to incorrect responses, improper error handling, and inconsistencies in status codes.
### Findings ([Jira Bug Report](https://docs.google.com/document/d/13CVrZqYtd_Sp_6_Jn-fprDup7f8RkrZk66xIUZf5-bQ/edit?usp=sharing))
The Urban Grocers API is functional but has significant input validation, order processing, and error handling flaws. These issues could impact user experience, leading to incorrect order placements and delivery failures. In my test report, I highlighted several key areas for improvement:
- Improve input validation to prevent invalid data from entering the system.
- Standardize API response codes to ensure errors are correctly handled.
- Enhance business logic checks for order limits, delivery times, and product weights.
- Fix cart deletion issues to remove orders from the database entirely.
- Refine error messages to make them more descriptive and useful for debugging.

## Automated API Testing
During the automated test creation, I used the  following technologies and techniques:
- **VSCode:** Integrated Development Environment (IDE) used for writing and managing test scripts.
- **JavaScript:** Programming language used for writing test scripts.
- **Jest:** JavaScript testing framework for writing and executing test cases.
- **Fetch API:** Used for making HTTP requests to the Urban Grocer API.
- **Async/Await:** Asynchronous JavaScript features handle promises and asynchronous code within the tests.

### Test Running
To run the tests, follow these steps:
1. **Set Up Environment:**
- Ensure that Node.js and npm (Node Package Manager) are installed on your machine.
- Install Jest globally using npm: npm install -g jest

2. **Clone the Repository:**
- Clone the repository containing the tests to your local machine.

3. **Install Dependencies:**
- Navigate to the project directory in your terminal.
- Run npm install to install required dependencies.

4. **Run the Tests:**
- Execute the tests by running npx jest in the terminal.
- Jest will automatically find and run all test files.

### Coding Principles and Best Practices

**Naming Conventions**
- Variables: Follow the camelCase convention for variable names (e.g., productCount, responseStatusCode).
- Functions: Function names start with a verb to indicate their actions (e.g., fetchData, updateKit).

**Variable Declaration**
- Use const to declare variables whose values should not change after initialization. This ensures immutability where applicable (e.g., const config = require('../config');).
- Use let for variables whose values are expected to change (e.g., let responseStatusCode;).

**Comments**
- Comments are used to explain the purpose of complex logic or to provide context where necessary. This improves code readability and maintainability.

**Test Structure**
- Each test case is named to describe its purpose and expected outcome.
- Tests are organized logically by HTTP request types (GET, POST, PUT, DELETE).
