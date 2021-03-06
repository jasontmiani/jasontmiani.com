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

	const [edges] = data.allInstaNode.edges;

	return (
		<div>
			{[edges].map(({ node }, i) => (
				<div id={i}>
					<img src={node.original}></img>
				</div>
			))}
		</div>
	);
};

export default CreateTestQuery;
