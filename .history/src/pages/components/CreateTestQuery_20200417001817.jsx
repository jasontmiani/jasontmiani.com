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

	const [outputArray] = data.allInstaNode.edges.node;

	return (
		<div>
			{outputArray.map(({ node }, i) => (
				<div id={i}>
					<image src={node.original}></image>
				</div>
			))}
		</div>
	);
};

export default CreateTestQuery;
