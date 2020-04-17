import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const CreateTestQuery = () => {
	const data = useStaticQuery(graphql`
		{
			allInstaNode {
				edges {
					node {
						id
						original
					}
				}
			}
		}
	`);
	return (
		<div>
			<image src={JSON.stringify(data.allInstaNode.edges, null, 4)}></image>
		</div>
	);
};

export default CreateTestQuery;
