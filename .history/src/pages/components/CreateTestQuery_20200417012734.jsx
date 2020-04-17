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
				<ImageGallery row={math(index / 2)} col={index}>
					<div key={index}>
						<ImageGalleryImage title={node.caption} alt={node.type}>
							<img src={node.original} alt={node.type}></img>
						</ImageGalleryImage>
					</div>
				</ImageGallery>
			))}
		</div>
	);
};

export default CreateTestQuery;
