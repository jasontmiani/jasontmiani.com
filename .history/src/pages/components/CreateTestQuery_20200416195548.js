import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import {PageDescription} from '../components/'

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
			<pre>{JSON.stringify(data, null, 4)}</pre>
		</div>
	);
};

export default CreateTestQuery;
