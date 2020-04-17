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

	const [nodes] = data.allInstaNode.edges;

	return (
		<div>
			{nodes.map(({ node }, i) => (
				<img id={i} src={node.original}></img>
			))}
		</div>
	);
};

export default CreateTestQuery;
