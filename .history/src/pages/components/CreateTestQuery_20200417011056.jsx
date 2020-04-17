import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { ImageGallery } from "../../../node_modules/gatsby-theme-carbon/src/components/ImageGallery";
import { ImageCard from "../../../node_modules/gatsby-theme-carbon/src/components/ImageCard";

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
					<ImageCard src={node.original} alt={node.caption}></ImageCard>
				</div>
			))}
		</ImageGallery>
	);
};

export default CreateTestQuery;
