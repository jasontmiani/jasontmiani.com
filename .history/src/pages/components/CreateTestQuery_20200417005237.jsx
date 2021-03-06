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

	const { edges } = data.allInstaNode.edges[index];
	const { nodes } = edges;
	const {index} = edges.
	return (
		<div>
			{nodes.map((node, index) => (
				<div key={index}>
					<img src={node.original} alt={node.caption}></img>
				</div>
			))}
		</div>
	);
};

export default CreateTestQuery;
