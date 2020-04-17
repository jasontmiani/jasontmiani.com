import React from "react";
import Header from "gatsby-theme-carbon/src/components/Header";
import { Tabs } from "../../../node_modules/gatsby-theme-carbon/src/components/Tabs/Tabs";

const ShadowedCustomHeader = (props) => {
	return (
		<Header {...props}>
			Kalzad
		</Header>
        <Tabs></Tabs>
        <Header {...props}>
			Kalzad
		</Header>
	);
};

export default ShadowedCustomHeader;
