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
			<p>
				<pre>{JSON.stringify(data.allInstaNode.edges)}</pre>
			</p>
		</div>
	);
};

export default CreateTestQuery;
