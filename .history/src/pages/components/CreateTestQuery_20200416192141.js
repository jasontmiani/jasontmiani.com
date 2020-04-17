import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const createTest = () => {
	const data = useStaticQuery(graphql`
		{
			allInstaNode {
				totalCount
				nodes {
					caption
					comments
					id
					mediaType
					original
					preview
					timestamp
					type
					username
					likes
					dimensions {
						height
						width
					}
				}
			}
		}
	`);

	console.log(data);

	return <pre>{JSON.stringify(data.allInstaNode.nodes)}</pre>;
};

export default CreateTestQuery;
