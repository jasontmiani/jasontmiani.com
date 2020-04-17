import React from "react";
import Header from "gatsby-theme-carbon/src/components/Header";
import { Tabs } from "../../../node_modules/gatsby-theme-carbon/src/components/Tabs/Tabs";

const ShadowedCustomHeader = (props) => {
	return (
		<div>
			<Header {...props}>Kalzad</Header>
			<Tabs displayName='Kalzad'>
				<Header {...props}>Kalzad</Header>
			</Tabs>
			<Tabs displayName='Kalzad'>
				<Header {...props}>Kalzad</Header>
			</Tabs>
		</div>
	);
};

export default ShadowedCustomHeader;
