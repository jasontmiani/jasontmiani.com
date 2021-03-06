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

	const { edges } = data.allInstaNode;
	const [nodes] = edges.node;

	return (
		<div>
			{nodes.map(({ node }, index) => (
				<div key={index}></div><img id={index} src={node.original}></img>
			))}
		</div>
	);
};

export default CreateTestQuery;
