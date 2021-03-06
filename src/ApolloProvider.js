import React from "react";
import App from "./App";
import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { ApolloProvider } from "@apollo/react-hooks";

// uri: "http://localhost:5001/"

const httpLink = createHttpLink({
	uri: "https://react-shopping-list-server.herokuapp.com/",
});

const client = new ApolloClient({
	link: httpLink,
	cache: new InMemoryCache(),
});

export default (
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>
);
