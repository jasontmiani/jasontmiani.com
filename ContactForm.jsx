/* import React from "react";
import { useForm } from "react-hook-form";
import {
	Form,
	TextInput,
	Button
} from "carbon-components-react";

function ContactForm() {
	const { register, handleSubmit, errors } = useForm();

	const onSubmit = (data) => {
		console.log(data);
	};

	console.log(errors);

	return (
		<div>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<TextInput
					id='text-input-1'
					placeholder='First name'
					name='fistName'
					ref={register({ required: true, maxLength: 80 })}
				/>

				<TextInput
					id='text-input-2'
					placeholder='Last name'
					name='lastName'
					ref={register({ required: true, maxLength: 100 })}
				/>

				<TextInput
					id='text-input-3'
					placeholder='Email'
					name='emailAddress'
					ref={register({ required: true, pattern: "/^+@+$/i" })}
				/>

				<TextInput
					id='text-input-4'
					placeholder='Phone'
					name='phoneNumber'
					ref={register({ required: true, maxLength: 12 })}
				/>

				<Button type='submit' tabIndex={0} kind='Secondary'>
					Submit
				</Button>
			</Form>
		</div>
	);
}

 */
