import { gql } from "apollo-boost";

const StudentFields = gql`
  fragment StudentFields on Student {
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
`;

const TrainingFields = gql`
  fragment TrainingFields on Training {
    id
    title
    dateStart
    dateEnd
    maxStudents
    createdAt
  }
`;

export const CLIENTS_QUERY = gql`
  {
    students {
      ...StudentFields
      trainingInfo {
        trainingCourse {
          ...TrainingFields
        }
        statusType
      }
    }
  }
  ${StudentFields}
  ${TrainingFields}
`;

export const TRAININGS_QUERY = gql`
  {
    trainings {
      ...TrainingFields
      studentsInfo {
        student {
          ...StudentFields
        }
        statusType
      }
    }
  }
  ${StudentFields}
  ${TrainingFields}
`;

export const TRAININGS_BY_TITLE_QUERY = gql`
  query trainingByTitle($title: String) {
    trainingByTitle(title: $title) {
      ...TrainingFields
      studentsInfo {
        student {
          ...StudentFields
        }
        statusType
      }
    }
  }
  ${StudentFields}
  ${TrainingFields}
`;
