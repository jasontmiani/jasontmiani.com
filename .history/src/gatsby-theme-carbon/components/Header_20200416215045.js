import React from "react";
import Header from "gatsby-theme-carbon/src/components/Header";
import InlineNotification from "../../../node_modules/gatsby-theme-carbon/src/components/InlineNotification";

const ShadowedCustomHeader = (props) => {
	return (
		<div>
			<Header {...props}>
				<p>Kalzad Test</p>
				<InlineNotification kind='success'>
					(Thanks for Visiting)
				</InlineNotification>
			</Header>
		</div>
	);
};

export default ShadowedCustomHeader;
