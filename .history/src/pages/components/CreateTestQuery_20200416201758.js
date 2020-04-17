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

	return (
		<div>
			<image src={data.allInstaNode.nodel} alt='test'></image>
		</div>
	);
};

export default CreateTestQuery;
