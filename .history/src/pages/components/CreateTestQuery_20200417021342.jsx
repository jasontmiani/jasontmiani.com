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
		<div>
			<Grid className='noGutterMax'>
				<Row className="noGutter">
					{data.allInstaNode.edges.map(({ node }, index) => (
						<div key={index}>
							<img src={node.original} alt={node.type} />
						</div>
					))}
				</Row>
			</Grid>
		</div>
	);
};

function CreateImageGrid() {
	return (
		<ImageGallery>
			<ImageGalleryImage>
				<CreateTestQuery></CreateTestQuery>
			</ImageGalleryImage>
		</ImageGallery>
	);
}

export default CreateTestQuery;
