import React from "react";
import Footer from "gatsby-theme-carbon/src/components/Footer";

const Content = ({ buildTime }) => (
	<>
		<p>
			Site recently updated: <code>{buildTime}</code>
		</p>
		<p>Copyright and Property of Kalzad | jasontmiani.com {buildTime.slice(buildTime.length - 4)}</p>
	</>
);

const links = {
	secondCol: [
		{
			href: "/privacy",
			linkText: "Privacy Policy",
		},
		{
			href: "https://github.com/jasontmiani",
			linkText: "Github",
		},
		{
			href: "https://twitch.tv/thekalzad",
			linkText: "Twitch",
		},
	],
};

const Logo = () => <svg src='../../images/profile-pic.svg'></svg>;

const CustomFooter = () => (
	<Footer links={links} Content={Content} Logo={Logo} />
);

export default CustomFooter;
