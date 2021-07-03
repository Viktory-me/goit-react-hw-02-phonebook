import React from "react";
import PropTypes from "prop-types";
import { Sections, TitleSection } from "./Section.styled";

const Section = ({ children, title }) => {
	return (
		<Sections>
			<TitleSection>{title}</TitleSection>
			{children}
		</Sections>
	);
};

Section.propTypes = {
	title: PropTypes.string,
	children: PropTypes.node.isRequired,
};
export default Section;
