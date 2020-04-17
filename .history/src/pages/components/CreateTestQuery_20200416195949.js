import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { PageDescription } from "../components/";

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
			<image>
				{JSON.stringify(data.allInstaNode.edges.node.id.original, null, 4)}
			</image>
		</div>
	);
};

export default CreateTestQuery;
