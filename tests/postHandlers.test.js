// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
    "cardId": 2, 
    "name": "Birthday"
} 

test('Should return 201 status code', async () => {
	let responseStatusCode;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		}); 
		responseStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(responseStatusCode).toBe(201);
});

test('Body should contain the name of the card', async () => {
	let cardName;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		}); 
		cardName = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(cardName.card.name).toBe("Prepare a dish");
});