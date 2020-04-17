import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const CreateTestQuery = () => {
	const data = useStaticQuery(graphql`
		{
			allInstaNode {
				edges {
					node {
						localFile {
							publicURL
						}
					}
				}
			}
		}
	`);

	return (
		<div>
			<image
				src={data.allInstaNode.edges.node.localFile.publicURL}}
			></image>
		</div>
	);
};

export default CreateTestQuery;
