import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import ImageGallery from "../../../node_modules/gatsby-theme-carbon/src/components/ImageGallery";
import { ImageGalleryImage } from "../../../node_modules/gatsby-theme-carbon/src/components/ImageGallery/ImageGalleryImage";

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
					<ImageGalleryImage
						title={node.caption}
						alt={node.type}
					><img src={node.original} alt={}></img></ImageGalleryImage>
				</div>
			))}
		</ImageGallery>
	);
};

export default CreateTestQuery;
