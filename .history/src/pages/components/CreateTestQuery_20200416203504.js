import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const CreateTestQuery = () => {
	const data = useStaticQuery(graphql`
    {
      allInstaNode(sort: {fields: timestamp, order: DESC}) {
        edges {
          node {
            timestamp
            dimensions {
              height
              width
            }
            original
          }
        }
      }
    }
  `)

	console.log(data);

	return (
		<div>
			<img src={data.allInstaNode.edges[].node.original}></img>
		</div>
	);
};

export default CreateTestQuery;
