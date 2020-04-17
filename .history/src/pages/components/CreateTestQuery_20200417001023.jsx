import React from "react";
import { useStaticQuery, graphql } from "gatsby";

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
			{data.allInstaNode.edges.forEach(({ node }, i) => (
				<div id={node}>
					<image src={data.allInstaNode.edges[i].node.original}></image>
				</div>
			))}
		</div>
	);
};

export default CreateTestQuery;
