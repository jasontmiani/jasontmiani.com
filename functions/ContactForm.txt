import React from "react";
import {
	Form,
	TextInput,
	Button
} from "carbon-components-react";
import axios from 'axios';


function ContactForm() {

	const contactData = {
		firstName: "Jason",
		lastName: "Miani",
		emailAddress: "jasontmiani@gmail.com",
		phone: "1234567890"
	};

	const onSubmit = (e) => {
		e.preventDefault();

		axios({
			method: "POST",
			url: "/",
			headers: { 
				"Content-Type": "application/x-www-form-urlencoded" 
			},
			body: { "form-name": "contact"}
		  })
			.then(() => alert("Success!"))
			.catch(error => alert(error));
	
		};
	

	return (
		<div>
			<Form onSubmit={onSubmit} className="contact" netlify netlify-honeypot="bot-field" hidden>
				<TextInput
					id='text-input-1'
					placeholder={contactData.firstName}
					name='fistName'
					
				/>

				<TextInput
					id='text-input-2'
					placeholder={contactData.lastName}
					name='lastName'
				/>

				<TextInput
					id='text-input-3'
					placeholder={contactData.emailAddress}
					name='emailAddress'
				/>

				<TextInput
					id='text-input-4'
					placeholder={contactData.phone}
					name='phoneNumber'
				/>
				<input type="hidden" name="form-name" value="contact" />

				<Button type='submit' tabIndex={0} kind='Secondary'>
					Submit
				</Button>
			</Form>
		</div>
	);
}

