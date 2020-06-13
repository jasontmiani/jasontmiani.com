/* //<script src="https://unpkg.com/axios/dist/axios.min.js"></script>

const sendSMS = async (
	customerPhoneNumber,
	agentEmail,
	businessID,
	businessAPIKey
) => {
	const axios = require("axios");

	axios.post(
		`https://apig.kixie.com/app/sms/send?apikey=${businessAPIKey}&businessid=${businessID}`,
		{
			sender: {
				email: `${agentEmail}`,
			},
			data: {
				fname: "James",
				lname: "Jones",
				name: "James Jones",
			},
			destination: {
				phone: "TARGET_PHONE_NUMBER",
				cc: "US",
			},
			message:
				"Hi [lname], Want to improve your SMS-game?Here's Kixie's best practice guide for SMS: https://kixie.zendesk.com/hc/en-us/articles/360040209593-SMS-Best-Practices",
		}
	);
};
 */