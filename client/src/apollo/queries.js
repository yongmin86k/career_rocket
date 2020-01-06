import { gql } from "apollo-boost";

export const CLIENTS_QUERY = gql`
  {
    students {
      id
      profileImg
      name
      gender
      birthDate
      email
      consulting {
        process
        createdAt
      }
      studentState {
        statusType
        createdAt
      }
    }
  }
`;
