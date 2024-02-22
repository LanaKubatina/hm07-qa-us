// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
	"productsList": [
		{
		  "id": 3,
		  "quantity": 1
		}
	  ],
	  "name": "Anniversary"
}

test('Should return 200 status code', async () => {
	let responseStatusCode;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/9`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		responseStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(responseStatusCode).toBe(200);
});

test('Should check if the kit is updated', async () => {
	let updateValue;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/9`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		updateValue = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(updateValue.ok).toBe(true);
});