module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateStudent {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

enum GenderType {
  MALE
  FEMALE
  RATHER_NOT_SAY
}

scalar Long

type Mutation {
  createStudent(data: StudentCreateInput!): Student!
  updateStudent(data: StudentUpdateInput!, where: StudentWhereUniqueInput!): Student
  updateManyStudents(data: StudentUpdateManyMutationInput!, where: StudentWhereInput): BatchPayload!
  upsertStudent(where: StudentWhereUniqueInput!, create: StudentCreateInput!, update: StudentUpdateInput!): Student!
  deleteStudent(where: StudentWhereUniqueInput!): Student
  deleteManyStudents(where: StudentWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  student(where: StudentWhereUniqueInput!): Student
  students(where: StudentWhereInput, orderBy: StudentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Student]!
  studentsConnection(where: StudentWhereInput, orderBy: StudentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): StudentConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Student {
  id: ID!
  profileImg: String
  name: String!
  gender: GenderType!
  birthDate: DateTime!
  email: String!
}

type StudentConnection {
  pageInfo: PageInfo!
  edges: [StudentEdge]!
  aggregate: AggregateStudent!
}

input StudentCreateInput {
  id: ID
  profileImg: String
  name: String!
  gender: GenderType!
  birthDate: DateTime!
  email: String!
}

type StudentEdge {
  node: Student!
  cursor: String!
}

enum StudentOrderByInput {
  id_ASC
  id_DESC
  profileImg_ASC
  profileImg_DESC
  name_ASC
  name_DESC
  gender_ASC
  gender_DESC
  birthDate_ASC
  birthDate_DESC
  email_ASC
  email_DESC
}

type StudentPreviousValues {
  id: ID!
  profileImg: String
  name: String!
  gender: GenderType!
  birthDate: DateTime!
  email: String!
}

type StudentSubscriptionPayload {
  mutation: MutationType!
  node: Student
  updatedFields: [String!]
  previousValues: StudentPreviousValues
}

input StudentSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: StudentWhereInput
  AND: [StudentSubscriptionWhereInput!]
  OR: [StudentSubscriptionWhereInput!]
  NOT: [StudentSubscriptionWhereInput!]
}

input StudentUpdateInput {
  profileImg: String
  name: String
  gender: GenderType
  birthDate: DateTime
  email: String
}

input StudentUpdateManyMutationInput {
  profileImg: String
  name: String
  gender: GenderType
  birthDate: DateTime
  email: String
}

input StudentWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  profileImg: String
  profileImg_not: String
  profileImg_in: [String!]
  profileImg_not_in: [String!]
  profileImg_lt: String
  profileImg_lte: String
  profileImg_gt: String
  profileImg_gte: String
  profileImg_contains: String
  profileImg_not_contains: String
  profileImg_starts_with: String
  profileImg_not_starts_with: String
  profileImg_ends_with: String
  profileImg_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  gender: GenderType
  gender_not: GenderType
  gender_in: [GenderType!]
  gender_not_in: [GenderType!]
  birthDate: DateTime
  birthDate_not: DateTime
  birthDate_in: [DateTime!]
  birthDate_not_in: [DateTime!]
  birthDate_lt: DateTime
  birthDate_lte: DateTime
  birthDate_gt: DateTime
  birthDate_gte: DateTime
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  AND: [StudentWhereInput!]
  OR: [StudentWhereInput!]
  NOT: [StudentWhereInput!]
}

input StudentWhereUniqueInput {
  id: ID
}

type Subscription {
  student(where: StudentSubscriptionWhereInput): StudentSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  name: String!
  email: String!
  username: String!
  password: String!
  createdAt: DateTime!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  name: String!
  email: String!
  username: String!
  password: String!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  username_ASC
  username_DESC
  password_ASC
  password_DESC
  createdAt_ASC
  createdAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  email: String!
  username: String!
  password: String!
  createdAt: DateTime!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  name: String
  email: String
  username: String
  password: String
}

input UserUpdateManyMutationInput {
  name: String
  email: String
  username: String
  password: String
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  username: String
  username_not: String
  username_in: [String!]
  username_not_in: [String!]
  username_lt: String
  username_lte: String
  username_gt: String
  username_gte: String
  username_contains: String
  username_not_contains: String
  username_starts_with: String
  username_not_starts_with: String
  username_ends_with: String
  username_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
  username: String
}
`
      }
    