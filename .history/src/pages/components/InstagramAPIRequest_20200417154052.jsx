import React, { useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import ImageGallery from "gatsby-theme-carbon/src/components/ImageGallery";
import ImageGalleryImage from "gatsby-theme-carbon/src/components/ImageGallery/ImageGalleryImage";

const CreateTestQuery = () => {
	const data = useEffect () = useStaticQuery(graphql`
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
		`),
		[]
	);

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
