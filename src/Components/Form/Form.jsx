import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./Form.module.css";

function MyForm({ onSubmit }) {
	return (
		<Formik
			initialValues={{ name: "", number: "" }}
			validate={(values) => {
				const errors = {};
				if (!values.name) {
					errors.name = "Введите ваше имя";
				} else if (!values.number) {
					errors.number = "Введите ваш номер";
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
			onSubmit={(values, { setSubmitting, resetForm }) => {
				// console.log(values);
				onSubmit(values);
				setSubmitting(false);
				resetForm();
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
