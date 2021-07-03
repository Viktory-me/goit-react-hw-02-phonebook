import React from "react";
import PropTypes from "prop-types";
import { ListContact, TitleSection, ItemContact } from "./ContactList.styled";

export default function ContactList({ title, contacts }) {
	return (
		<>
			<TitleSection>{title}</TitleSection>
			<ListContact title='Contacts'>
				{contacts.map((contact) => (
					<ItemContact key={contact.id}>
						{contact.name + ":" + contact.number}{" "}
					</ItemContact>
				))}
			</ListContact>
		</>
	);
}
ContactList.propTypes = {
	contacts: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			number: PropTypes.string.isRequired,
		})
	),
};
