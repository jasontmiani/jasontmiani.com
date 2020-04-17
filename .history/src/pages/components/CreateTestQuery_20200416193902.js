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
	return <pre>{JSON.stringify(data, null, 4)}</pre>;
};

const CreateTestQuery = ({ data }) => {
	return (
		<div>
			<image src={}</image>
		</div>
	);
};

export default CreateTestQuery;
