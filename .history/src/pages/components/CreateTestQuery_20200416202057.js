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
			<image src={`${JSON.stringify(data.)}`} alt='test'></image>
		</div>
	);
};

export default CreateTestQuery;
