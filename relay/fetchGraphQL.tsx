import fetch from "isomorphic-fetch";
import type { Variables } from "relay-runtime";

const fetchGraphQL = async (query: string | null, variables: Variables) => {
  const response = await fetch("http://localhost:52733", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  return await response.json();
};

export default fetchGraphQL;
