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
			<img></img>JSON.stringify(data.allInstaNode.edges[0].node.original)}</pre>
		</div>
	);
};

export default CreateTestQuery;
