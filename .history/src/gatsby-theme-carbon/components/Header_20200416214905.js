import React from "react";
import Header from "gatsby-theme-carbon/src/components/Header";
import InlineNotification from "../../../node_modules/gatsby-theme-carbon/src/components/InlineNotification";

const ShadowedCustomHeader = (props) => {
	return (
		<div>
			<Header {...props}>Kalzad Test</Header>
			<InlineNotification kind='success'>
				Thanks for Visiting
			</InlineNotification>
		</div>
	);
};

export default ShadowedCustomHeader;
