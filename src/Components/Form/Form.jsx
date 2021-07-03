import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";

function MyForm({ onSubmit }) {
	return (
		<Formik
			initialValues={{ name: "", number: "" }}
			validate={(values) => {
				const errors = {};
				if (!values.number) {
					errors.number = "Required";
				} else if (
					!/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/i.test(
						values.number
					)
				) {
					errors.number =
						"Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и начинаться с +";
				}
				return errors;
			}}
			onSubmit={(values, { setSubmitting }) => {
				onSubmit(values);
				setSubmitting(false);
			}}
		>
			<Form autoComplete='off'>
				<label htmlFor='name'>Name</label>
				<Field type='name' name='name' />
				<ErrorMessage name='name' />

				<label htmlFor='number'>Number</label>
				<Field type='tel' name='number' />
				<ErrorMessage name='number' />

				<button type='submit'>Add contact</button>
			</Form>
		</Formik>
	);
}

export default MyForm;
