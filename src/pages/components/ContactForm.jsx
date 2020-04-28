import React from "react";
import { useForm } from "react-hook-form";
import {
	Form,
	TextInput,
	Button,
} from "../../../node_modules/carbon-components-react";

const ContactForm = () => {
	const { register, handleSubmit, errors } = useForm();
	const onSubmit = (data) => console.log(data);
	console.log(errors);

	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<FormGroup>
				<TextInput
					id='text-input-1'
					placeholder='First name'
					name='fistName'
					ref={register({ required: true, maxLength: 80 })}
				/>
			</FormGroup>
			<FormGroup>
				<TextInput
					id='text-input-2'
					placeholder='Last name'
					name='lastName'
					ref={register({ required: true, maxLength: 100 })}
				/>
			</FormGroup>
			<FormGroup>
				<TextInput
					id='text-input-3'
					placeholder='Email'
					name='emailAddress'
					ref={register({ required: true, pattern: /^\S+@\S+$/i })}
				/>
			</FormGroup>
			<FormGroup>
				<TextInput
					id='text-input-4'
					placeholder='Phone'
					name='phoneNumber'
					ref={register({ required: true, maxLength: 12 })}
				/>
			</FormGroup>
			<Button type='submit' tabIndex={0} kind='primary'>
				Submit
			</Button>
		</Form>
	);
};

export default ContactForm;
