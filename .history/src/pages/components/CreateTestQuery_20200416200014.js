import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const CreateTestQuery = () => {
	const data = useStaticQuery(graphql`
		{
			allInstaNode {
				edges {
					node {
						id
						original
					}
				}
			}
		}
	`);
	return (
		<div>
			<image>
				{JSON.stringify(data.allInstaNode.edges.node.original, null, 4)}
			</image>
		</div>
	);
};

export default CreateTestQuery;
