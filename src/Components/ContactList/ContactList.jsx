import React from "react";
import PropTypes from "prop-types";
import { RiContactsLine, RiDeleteBinLine } from "react-icons/ri";
import { BsPhone } from "react-icons/bs";
import {
  ListContact,
  ItemContact,
  Paragraph,
  Button,
} from "./ContactList.styled";

export default function ContactList({ title, contacts, onDeleteContact }) {
  return (
    <>
      <ListContact title='Contacts'>
        {contacts.map((contact) => (
          <ItemContact key={contact.id}>
            <RiContactsLine color='#c21111e2'></RiContactsLine>
            <Paragraph>{contact.name}</Paragraph>{" "}
            <BsPhone color='#c21111e2'></BsPhone>{" "}
            <Paragraph>{contact.number}</Paragraph>
            <Button onClick={() => onDeleteContact(contact.id)}>
              <RiDeleteBinLine></RiDeleteBinLine>
            </Button>
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
