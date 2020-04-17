import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import ImageGallery from "../../../node_modules/gatsby-theme-carbon/src/components/ImageGallery";
import ImageGalleryImage from "../../../node_modules/gatsby-theme-carbon/src/components/ImageGallery/ImageGalleryImage";

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
	
				{data.allInstaNode.edges.map(({ node }, index) => (
					<ImageGallery>
					<div key={index}>
						<ImageGalleryImage title={node.caption} alt={node.type} col={4}>
							<img src={node.original} alt={node.type}></img>
						</ImageGalleryImage>
					</div>
				))}
			
		</div>
	);
};

export default CreateTestQuery;