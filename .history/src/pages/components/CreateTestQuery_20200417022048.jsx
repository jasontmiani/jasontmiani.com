import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import ImageGallery from "../../../node_modules/gatsby-theme-carbon/src/components/ImageGallery";
import ImageGalleryImage from "../../../node_modules/gatsby-theme-carbon/src/components/ImageGallery/ImageGalleryImage";
import {
	Grid,
	Row,
	Col,
} from "../../../node_modules/gatsby-theme-carbon/src/components/Grid";

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
		<Grid>
			<ImageGallery>
				{data.allInstaNode.edges.map(({ node }, index) => (
					<div key={index} col={4}>
						<ImageGalleryImage title={node.caption} alt={node.type}>
							<img src={node.original} alt={node.type} />
						</ImageGalleryImage>
					</div>
				))}
			</ImageGallery>
		</Grid>
	);
};

export default CreateTestQuery;
