import React from "react";
import { HomepageBanner } from "gatsby-theme-carbon";
import HomepageTemplate from "gatsby-theme-carbon/src/templates/Homepage";
import ShadowedCustomHeader from "../components/Header";
import Carbon from "../../images/carbon.jpg";

const BannerText = () => <h1>Jason T. Miani | Kalzad</h1>;

const customProps = {
	Banner: <HomepageBanner renderText={BannerText} image={Carbon} />,
	FirstCallout: null,
	SecondCallout: null,
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
	return (
		<div>
			<ShadowedCustomHeader></ShadowedCustomHeader>
			<HomepageTemplate {...props} {...customProps} />
		</div>
	);
}

export default ShadowedHomepage;
