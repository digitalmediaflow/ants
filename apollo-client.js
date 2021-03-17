
import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://guarded-shore-81814.herokuapp.com/graphql",
    cache: new InMemoryCache(),
});

export default client;