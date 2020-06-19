/* import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import ImageGallery from "../../../node_modules/gatsby-theme-carbon/src/components/ImageGallery";
import ImageGalleryImage from "../../../node_modules/gatsby-theme-carbon/src/components/ImageGallery/ImageGalleryImage";

const CreateTestQuery = () => {
	const data = useStaticQuery(graphql`
		{
			allInstaNode {
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
					<ImageGalleryImage
						key={index}
						title={node.caption}
						alt={node.caption}
						col={2}
					>
						<div>
							<img src={node.original} alt={node.caption} />
						</div>
					</ImageGalleryImage>
				))}
			</ImageGallery>
		</div>
	);
};


 */