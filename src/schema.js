import gql from "graphql-tag";

const schema = gql`
  type Query {
    hello(name: String): String!
    quantity: Int!
    user(id: ID): [User!]!
    author(
      id: ID
      first: Int
      skip: Int
      orderBy: AuthorOrderByInput
    ): [Author!]!
    book(id: ID, first: Int, skip: Int, orderBy: BookOrderByInput): [Book!]!
  }

  type User {
    id: ID!
    name: String!
    lastname: String!
    email: String!
  }

  type Author {
    id: ID!
    name: String!
    country: String!
    register_by: User!
    books: [Book!]!
  }

  type Book {
    id: ID!
    title: String!
    description: String!
    quantity: Int!
    price: Int!
    writted_by: Author!
    register_by: User!
  }

  type Mutation {
    signUp(data: signUpInput!): AuthPayload!
    login(data: loginInput!): AuthPayload!
    updateUser(id: ID!, data: updateUserInput): User!
    createAuthor(data: createAuthorInput): Author!
    updateAuthor(id: ID!, data: updateAuthorInput): Author!
    createBook(data: createBookInput): Book!
    updateBook(id: ID!, data: updateBookInput): Book!
    deleteBook(id: ID!): Book!
  }

  type Subscription {
    count: Int!
    author: AuthorSubscriptionPayload!
    book(authorId: ID!): BookSubscriptionPayload!
  }

  enum MutationType {
    CREATED
    UPDATED
    DELETED
  }

  type AuthorSubscriptionPayload {
    mutation: MutationType!
    data: Author!
  }

  type BookSubscriptionPayload {
    mutation: MutationType!
    data: Book!
  }

  input AuthorOrderByInput {
    id: OrderByArg
    name: OrderByArg
    country: OrderByArg
  }

  input BookOrderByInput {
    id: OrderByArg
    title: OrderByArg
    description: OrderByArg
    quantity: OrderByArg
    price: OrderByArg
  }

  enum OrderByArg {
    asc
    desc
  }

  input signUpInput {
    name: String!
    lastname: String!
    email: String!
    password: String!
  }

  input loginInput {
    email: String!
    password: String!
  }

  type AuthPayload {
    user: User!
    token: String!
  }

  input updateUserInput {
    name: String
    lastname: String
    email: String
    password: String
  }

  input createAuthorInput {
    name: String!
    country: String!
    register_by: ID!
  }

  input updateAuthorInput {
    name: String
    country: String
    register_by: ID
  }

  input createBookInput {
    title: String!
    description: String!
    quantity: Int!
    price: Int!
    writted_by: ID!
    register_by: ID!
  }

  input updateBookInput {
    title: String
    description: String
    quantity: Int
    price: Int
    writted_by: ID
    register_by: ID
  }
`;

export default schema;
