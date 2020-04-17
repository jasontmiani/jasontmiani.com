import React from "react";
import Header from "gatsby-theme-carbon/src/components/Header";
import Tabs from "../../../node_modules/gatsby-theme-carbon/src/components/Tabs/Tabs";

const ShadowedCustomHeader = (props) => {
	return (
		<Header {...props}>
			Kalzad Test
			<Tabs></Tabs>
		</Header>
	);
};

export default ShadowedCustomHeader;
