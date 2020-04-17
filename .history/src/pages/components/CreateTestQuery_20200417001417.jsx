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

	const outputArray

	return (
		<div>
			{data.allInstaNode.edges.map(({ node }, i) => (
				<div id={i}>
					<image src={data.allInstaNode.edges[i].node.original}></image>
				</div>
			))}
		</div>
	);
};

export default CreateTestQuery;
