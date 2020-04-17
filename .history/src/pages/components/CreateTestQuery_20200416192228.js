import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const CreateTestQuery = () => {
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

	return <pre>{JSON.stringify(data.allInstaNode.nodes)}</pre>;
};

export default CreateTestQuery;
