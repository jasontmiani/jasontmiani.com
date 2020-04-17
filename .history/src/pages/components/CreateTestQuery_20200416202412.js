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
			<pre>{JSON.stringify(data.edges[0])}`}</pre>
		</div>
	);
};

export default CreateTestQuery;
