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
			{data.allInstaNode.edges.map((item) => (
				<div id={node}>
					<img src={data.allInstaNode.edges[i].node.original}></img>
				</div>
			))}
		</div>
	);
};

export default CreateTestQuery;
