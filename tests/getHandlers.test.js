// eslint-disable-next-line no-undef
const config = require('../config');

test('Should return 200 status code', async () => {
	let responseStatusCode;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/3`);
		responseStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(responseStatusCode).toBe(200);
});

test('Body should contain the product count', async () => {
	let productCount
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/3`);
		productCount = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(productCount.productsCount).toBe(19);
});