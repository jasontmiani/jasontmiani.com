import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { ImageGallery } from "../../../node_modules/gatsby-theme-carbon/src/components/";

const CreateTestQuery = () => {
	const data = useStaticQuery(graphql`
		{
			allInstaNode(sort: { fields: timestamp, order: DESC }) {
				edges {
					node {
						id
						caption
						original
						type
						timestamp
						preview
					}
				}
				totalCount
			}
		}
	`);

	return (
		<ImageGallery>
			{data.allInstaNode.edges.map(({ node }, index) => (
				<div key={index}>
					<img src={node.original} alt={node.caption}></img>
				</div>
			))}
		</ImageGallery>
	);
};

export default CreateTestQuery;
