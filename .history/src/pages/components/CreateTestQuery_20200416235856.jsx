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
			{data.allInstaNode.edges.forEch((node, i) => (
				<div id={i}>
					<img src={data.allInstaNode.edges[i].node.original}></img>
				</div>
			))}
		</div>
	);
};

export default CreateTestQuery;
