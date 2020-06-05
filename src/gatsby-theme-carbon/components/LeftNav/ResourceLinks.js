import React from "react";

import ResourceLinks from "gatsby-theme-carbon/src/components/LeftNav";

const links = [
	{
		title: "Github",
		href: "https://github.com/jasontmiani",
	},
	{
		title: "Twitch",
		href: "https://twitch.tv/thekalzad",
	},
];

// shouldOpenNewTabs: true if outbound links should open in a new tab
const CustomResources = () => <ResourceLinks shouldOpenNewTabs links={links} />;

export default CustomResources;
