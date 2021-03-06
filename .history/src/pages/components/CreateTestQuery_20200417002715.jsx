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

	const edges = data.allInstaNode.edges;
	const [nodes] = edges.;

	return (
		<div>
			{nodes.map(({ node }, i) => (
				<div id={i}>
					<image src={node.original}></image>
				</div>
			))}
		</div>
	);
};

export default CreateTestQuery;
