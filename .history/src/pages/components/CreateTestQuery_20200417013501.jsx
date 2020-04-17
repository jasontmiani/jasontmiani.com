import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import ImageGallery from "../../../node_modules/gatsby-theme-carbon/src/components/ImageGallery";
import ImageGalleryImage from "../../../node_modules/gatsby-theme-carbon/src/components/ImageGallery/ImageGalleryImage";
import Grid from "../../../node_modules/gatsby-theme-carbon/src/components/Grid";

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
		<div>
			<ImageGallery>
				{data.allInstaNode.edges.map(({ node }, index) => (
					<ImageGalleryImage href={} key={index} title={node.caption} alt={node.type}>
						<image src={node.original} alt={node.type}></image>
					</ImageGalleryImage>
				))}
			</ImageGallery>
		</div>
	);
};

export default CreateTestQuery;
