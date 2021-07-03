import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import Section from "./Components/Section/Section";
import Container from "./Components/Container/Container";
import MyForm from "./Components/Form/Form";

class App extends Component {
	state = {
		contacts: [],
		name: "",
		number: "",
	};

	addContact = (name, number) => {
		const contact = { id: uuidv4(), name, number };
		this.setState(({ contacts }) => ({
			contacts: [contact, ...contacts],
		}));
	};

	render() {
		const { contacts, name, number } = this.state;

		return (
			<Container>
				<Section title='Phonebook'>
					<MyForm
						onSubmit={({ name, number }) => console.log(number, name)}
						contacts={contacts}
					/>
				</Section>
				<Section title='Contacts'>{name}</Section>
			</Container>
		);
	}
}

export default App;
