import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const CreateInstagramQuery = () => {
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
			<pre>{JSON.stringify(data, null, 4)}</pre>
		</div>
	);
};

const CreateTestQuery = () => {
	return <CreateInstagramQuery></CreateInstagramQuery>;
};

export default CreateTestQuery;
