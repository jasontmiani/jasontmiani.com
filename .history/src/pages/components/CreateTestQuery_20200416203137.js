import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const CreateTestQuery = () => {
	const data = useStaticQuery(graphql`
		{
			allInstaNode {
				edges {
					node {
						original
					}
				}
			}
		}
	`);

	console.log(data);

	return (
		<div>
			<img src={data.allInstaNode.edges[].node.original}></img>
		</div>
	);
};

export default CreateTestQuery;
