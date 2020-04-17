import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import ImageGallery, {
	ImageGalleryImage,
} from "../../../node_modules/gatsby-theme-carbon/src/components/ImageGallery";
import ImageCard from "../../../node_modules/gatsby-theme-carbon/src/components/ImageCard";

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
					<ImageGalleryImage src={node.original} title={node.caption}
				</div>
			))}
		</ImageGallery>
	);
};

export default CreateTestQuery;
