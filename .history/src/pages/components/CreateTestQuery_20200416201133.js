import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const CreateTestQuery = () => {
	const data = useStaticQuery(graphql`
		{
			allInstaNode {
				nodes {
					localFile {
						publicURL
					}
				}
			}
		}
	`);

	return (
		<div>
			<image
				src={JSON.stringify(
					data.allInstaNode.nodes.localFile.publicURL,
					null,
					4
				)}
			></image>
		</div>
	);
};

export default CreateTestQuery;
