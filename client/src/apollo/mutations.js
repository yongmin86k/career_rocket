import { gql } from "apollo-boost";

export const LOGIN_MUTATION = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        id
        name
        email
        username
      }
    }
  }
`;

export const SIGNUP_MUTATION = gql`
  mutation signup(
    $email: String!
    $username: String!
    $password: String!
    $name: String!
  ) {
    signup(
      username: $username
      name: $name
      email: $email
      password: $password
    ) {
      token
      user {
        id
        name
        email
        username
      }
    }
  }
`;
