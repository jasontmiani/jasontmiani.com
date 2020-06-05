const axios = require("axios");

function kanyeTest() {
	const kanyeRes = axios
		.get("https://api.kanye.rest")
		.then((kanyeData) => {
			console.log(kanyeData.data.quote);
			const kanye = kanyeData.data.quote;
			return kanye;
		})
		.catch((err) => console.error(err.message));

	
	return kanyeRes;
}

kanyeTest();
