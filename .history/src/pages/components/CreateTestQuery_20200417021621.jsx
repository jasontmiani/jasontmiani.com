import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import ImageGallery from "../../../node_modules/gatsby-theme-carbon/src/components/ImageGallery";
import ImageGalleryImage from "../../../node_modules/gatsby-theme-carbon/src/components/ImageGallery/ImageGalleryImage";
import {
	Grid,
	Row,
	Column,
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
			<Grid className="">
				{data.allInstaNode.edges.map(({ node }, index) => (
					<Column className='colSm'>
						<div key={index}>
							<img src={node.original} alt={node.type} />
						</div>
					</Column>
				))}
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
