import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const CreateTestQuery = () => {
	const data = useStaticQuery(graphql`
		{
			allInstaNode(sort: { fields: timestamp, order: DESC }) {
				edges {
					node {
						timestamp
						dimensions {
							height
							width
						}
						original
					}
				}
			}
		}
	`);

	return (
		<div>
		{data.allInstaNode.edges.map((node, id) => (
			<div id={id}>
			<img src={data.allInstaNode.edges[0].node.original}></img>
			</div>
				
			)}
		</div>
	);
};

export default CreateTestQuery;
