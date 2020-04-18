const activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV;

console.log(`Using environment config: ${activeEnv}`);

module.exports = {
	siteMetadata: {
		title: "Jason Miani | Kalzad",
		description: "My Personal Website",
		keywords: "kalzad,jason miani, miani",
	},
	pathPrefix: `/gtc`,
	plugins: [
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				name: "Jason Miani | Kalzad",
				short_name: "Jason Miani Site",
				start_url: "/",
				background_color: "#282c34",
				theme_color: "#0062ff",
				display: "browser",
			},
		},
		{
			resolve: "gatsby-theme-carbon",
			options: {
				repository: {
					baseUrl:
						"https://github.com/carbon-design-system/gatsby-theme-carbon",
					subDirectory: "/packages/example",
				},
			},
		},
		{
			resolve: `gatsby-source-instagram`,
			options: {
				username: `jasontmiani`,
			},
		},
	],
};
