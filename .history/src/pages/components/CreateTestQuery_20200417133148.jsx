import React, { useState, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import ImageGallery from "../../../node_modules/gatsby-theme-carbon/src/components/ImageGallery";
import ImageGalleryImage from "../../../node_modules/gatsby-theme-carbon/src/components/ImageGallery/ImageGalleryImage";

const CreateTestQuery = () => {
	const output = useStaticQuery(graphql`
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

	const [data, setData] = useState(output);

	useEffect(setData())
	return (
		<div>
			<ImageGallery>
				{data.allInstaNode.edges.map(({ node }, index) => (
					<ImageGalleryImage
						key={index}
						title={node.caption}
						alt={node.type}
						col={2}
					>
						<div>
							<img src={node.original} alt={node.type} />
						</div>
					</ImageGalleryImage>
				))}
			</ImageGallery>
		</div>
	);
};

export default CreateTestQuery;
