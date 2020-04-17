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
			{data.allInstaNode.edges.map(({ node }, index) => (
				<div key={index} style={{ height: "400px", width: "400px" }}>
					<img src={node.original} alt={node.caption}></img>
				</div>
			))}
		</div>
	);
};

export default CreateTestQuery;
