// eslint-disable-next-line no-undef
const config = require('../config');

test('Should return 200 status code', async () => {
	let responseStatusCode;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
			method: 'DELETE',
		});
		responseStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(responseStatusCode).toBe(200);
});

test('Should check if the kit is deleted', async () => {
	let updateValue;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
			method: 'DELETE',
		});
		updateValue = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(updateValue.ok).toBe(true);
});