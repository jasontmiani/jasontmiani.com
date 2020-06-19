const activeEnv = process.env.GATSBY_ACTIVE_ENV || 'development'

require("dotenv").config({
	path: `.env.${activeEnv}`,
});

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
			resolve: `gatsby-source-instagram-all`,
			options: {
				access_token:`EAAeMToZAuRzQBALs141ll5zQBaoRWsLLAXpc18ldgkVOfn3sHHh3pH2CrOG1UjUVTrjJQQzZBBfoa64vuhwR01LeFGwsV9HOTPMiwkMx8pEKlEaSDtTOZARSVYrRSwZCAPB5YOQEQfyuCg1YeV3guUcIOe11aCSAAYJCZB5ZAcZAUEIjHQNPBE8XZA4MBZBWuRqZCTbfiD8hcZAi92X0zG8NEdgPkym5eqHfplLaZBNtRZBKSNAZDZD`

			},
		},
	],
};