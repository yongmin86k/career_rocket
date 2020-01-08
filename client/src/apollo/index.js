import ApolloClient from "apollo-boost";

import GLOBAL from "../global";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  headers: {
    Authorization: GLOBAL.PRISMA_TOKEN
  }
});

export default client;
