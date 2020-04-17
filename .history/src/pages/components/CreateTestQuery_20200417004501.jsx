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

	const {edges} = 
	const edges = { node };

	return (
		<div>
			{edges.map(({ node }, index) => (
				<img id={index} src={node.original}></img>
			))}
		</div>
	);
};

export default CreateTestQuery;
