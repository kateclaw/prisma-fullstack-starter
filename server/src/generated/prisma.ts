import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    groups: <T = Group[]>(args: { where?: GroupWhereInput, orderBy?: GroupOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    posts: <T = Post[]>(args: { where?: PostWhereInput, orderBy?: PostOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    comments: <T = Comment[]>(args: { where?: CommentWhereInput, orderBy?: CommentOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    group: <T = Group | null>(args: { where: GroupWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    post: <T = Post | null>(args: { where: PostWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    comment: <T = Comment | null>(args: { where: CommentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    groupsConnection: <T = GroupConnection>(args: { where?: GroupWhereInput, orderBy?: GroupOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    postsConnection: <T = PostConnection>(args: { where?: PostWhereInput, orderBy?: PostOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    commentsConnection: <T = CommentConnection>(args: { where?: CommentWhereInput, orderBy?: CommentOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createGroup: <T = Group>(args: { data: GroupCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createPost: <T = Post>(args: { data: PostCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createComment: <T = Comment>(args: { data: CommentCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateGroup: <T = Group | null>(args: { data: GroupUpdateInput, where: GroupWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updatePost: <T = Post | null>(args: { data: PostUpdateInput, where: PostWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateComment: <T = Comment | null>(args: { data: CommentUpdateInput, where: CommentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteGroup: <T = Group | null>(args: { where: GroupWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deletePost: <T = Post | null>(args: { where: PostWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteComment: <T = Comment | null>(args: { where: CommentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertGroup: <T = Group>(args: { where: GroupWhereUniqueInput, create: GroupCreateInput, update: GroupUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertPost: <T = Post>(args: { where: PostWhereUniqueInput, create: PostCreateInput, update: PostUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertComment: <T = Comment>(args: { where: CommentWhereUniqueInput, create: CommentCreateInput, update: CommentUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyGroups: <T = BatchPayload>(args: { data: GroupUpdateInput, where?: GroupWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPosts: <T = BatchPayload>(args: { data: PostUpdateInput, where?: PostWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyComments: <T = BatchPayload>(args: { data: CommentUpdateInput, where?: CommentWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyGroups: <T = BatchPayload>(args: { where?: GroupWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPosts: <T = BatchPayload>(args: { where?: PostWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyComments: <T = BatchPayload>(args: { where?: CommentWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    group: <T = GroupSubscriptionPayload | null>(args: { where?: GroupSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    post: <T = PostSubscriptionPayload | null>(args: { where?: PostSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    comment: <T = CommentSubscriptionPayload | null>(args: { where?: CommentSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  Group: (where?: GroupWhereInput) => Promise<boolean>
  Post: (where?: PostWhereInput) => Promise<boolean>
  Comment: (where?: CommentWhereInput) => Promise<boolean>
  User: (where?: UserWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateComment {
  count: Int!
}

type AggregateGroup {
  count: Int!
}

type AggregatePost {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

type Comment implements Node {
  id: ID!
  author(where: UserWhereInput): User!
  text: String!
  post(where: PostWhereInput): Post!
}

"""A connection to a list of items."""
type CommentConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [CommentEdge]!
  aggregate: AggregateComment!
}

input CommentCreateInput {
  text: String!
  author: UserCreateOneInput!
  post: PostCreateOneWithoutCommentsInput!
}

input CommentCreateManyWithoutPostInput {
  create: [CommentCreateWithoutPostInput!]
  connect: [CommentWhereUniqueInput!]
}

input CommentCreateWithoutPostInput {
  text: String!
  author: UserCreateOneInput!
}

"""An edge in a connection."""
type CommentEdge {
  """The item at the end of the edge."""
  node: Comment!

  """A cursor for use in pagination."""
  cursor: String!
}

enum CommentOrderByInput {
  id_ASC
  id_DESC
  text_ASC
  text_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type CommentPreviousValues {
  id: ID!
  text: String!
}

type CommentSubscriptionPayload {
  mutation: MutationType!
  node: Comment
  updatedFields: [String!]
  previousValues: CommentPreviousValues
}

input CommentSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [CommentSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [CommentSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CommentSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: CommentWhereInput
}

input CommentUpdateInput {
  text: String
  author: UserUpdateOneInput
  post: PostUpdateOneWithoutCommentsInput
}

input CommentUpdateManyWithoutPostInput {
  create: [CommentCreateWithoutPostInput!]
  connect: [CommentWhereUniqueInput!]
  disconnect: [CommentWhereUniqueInput!]
  delete: [CommentWhereUniqueInput!]
  update: [CommentUpdateWithWhereUniqueWithoutPostInput!]
  upsert: [CommentUpsertWithWhereUniqueWithoutPostInput!]
}

input CommentUpdateWithoutPostDataInput {
  text: String
  author: UserUpdateOneInput
}

input CommentUpdateWithWhereUniqueWithoutPostInput {
  where: CommentWhereUniqueInput!
  data: CommentUpdateWithoutPostDataInput!
}

input CommentUpsertWithWhereUniqueWithoutPostInput {
  where: CommentWhereUniqueInput!
  update: CommentUpdateWithoutPostDataInput!
  create: CommentCreateWithoutPostInput!
}

input CommentWhereInput {
  """Logical AND on all given filters."""
  AND: [CommentWhereInput!]

  """Logical OR on all given filters."""
  OR: [CommentWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CommentWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  text: String

  """All values that are not equal to given value."""
  text_not: String

  """All values that are contained in given list."""
  text_in: [String!]

  """All values that are not contained in given list."""
  text_not_in: [String!]

  """All values less than the given value."""
  text_lt: String

  """All values less than or equal the given value."""
  text_lte: String

  """All values greater than the given value."""
  text_gt: String

  """All values greater than or equal the given value."""
  text_gte: String

  """All values containing the given string."""
  text_contains: String

  """All values not containing the given string."""
  text_not_contains: String

  """All values starting with the given string."""
  text_starts_with: String

  """All values not starting with the given string."""
  text_not_starts_with: String

  """All values ending with the given string."""
  text_ends_with: String

  """All values not ending with the given string."""
  text_not_ends_with: String
  author: UserWhereInput
  post: PostWhereInput
}

input CommentWhereUniqueInput {
  id: ID
}

type Group implements Node {
  id: ID!
  name: String!
  admins(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  members(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  allUsers(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  feed(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post!]
}

"""A connection to a list of items."""
type GroupConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [GroupEdge]!
  aggregate: AggregateGroup!
}

input GroupCreateInput {
  name: String!
  admins: UserCreateManyWithoutAdminOfInput
  members: UserCreateManyWithoutMemberOfInput
  allUsers: UserCreateManyWithoutGroupsInput
  feed: PostCreateManyWithoutGroupInput
}

input GroupCreateManyWithoutAdminsInput {
  create: [GroupCreateWithoutAdminsInput!]
  connect: [GroupWhereUniqueInput!]
}

input GroupCreateManyWithoutAllUsersInput {
  create: [GroupCreateWithoutAllUsersInput!]
  connect: [GroupWhereUniqueInput!]
}

input GroupCreateManyWithoutMembersInput {
  create: [GroupCreateWithoutMembersInput!]
  connect: [GroupWhereUniqueInput!]
}

input GroupCreateOneWithoutFeedInput {
  create: GroupCreateWithoutFeedInput
  connect: GroupWhereUniqueInput
}

input GroupCreateWithoutAdminsInput {
  name: String!
  members: UserCreateManyWithoutMemberOfInput
  allUsers: UserCreateManyWithoutGroupsInput
  feed: PostCreateManyWithoutGroupInput
}

input GroupCreateWithoutAllUsersInput {
  name: String!
  admins: UserCreateManyWithoutAdminOfInput
  members: UserCreateManyWithoutMemberOfInput
  feed: PostCreateManyWithoutGroupInput
}

input GroupCreateWithoutFeedInput {
  name: String!
  admins: UserCreateManyWithoutAdminOfInput
  members: UserCreateManyWithoutMemberOfInput
  allUsers: UserCreateManyWithoutGroupsInput
}

input GroupCreateWithoutMembersInput {
  name: String!
  admins: UserCreateManyWithoutAdminOfInput
  allUsers: UserCreateManyWithoutGroupsInput
  feed: PostCreateManyWithoutGroupInput
}

"""An edge in a connection."""
type GroupEdge {
  """The item at the end of the edge."""
  node: Group!

  """A cursor for use in pagination."""
  cursor: String!
}

enum GroupOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type GroupPreviousValues {
  id: ID!
  name: String!
}

type GroupSubscriptionPayload {
  mutation: MutationType!
  node: Group
  updatedFields: [String!]
  previousValues: GroupPreviousValues
}

input GroupSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [GroupSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [GroupSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [GroupSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: GroupWhereInput
}

input GroupUpdateInput {
  name: String
  admins: UserUpdateManyWithoutAdminOfInput
  members: UserUpdateManyWithoutMemberOfInput
  allUsers: UserUpdateManyWithoutGroupsInput
  feed: PostUpdateManyWithoutGroupInput
}

input GroupUpdateManyWithoutAdminsInput {
  create: [GroupCreateWithoutAdminsInput!]
  connect: [GroupWhereUniqueInput!]
  disconnect: [GroupWhereUniqueInput!]
  delete: [GroupWhereUniqueInput!]
  update: [GroupUpdateWithWhereUniqueWithoutAdminsInput!]
  upsert: [GroupUpsertWithWhereUniqueWithoutAdminsInput!]
}

input GroupUpdateManyWithoutAllUsersInput {
  create: [GroupCreateWithoutAllUsersInput!]
  connect: [GroupWhereUniqueInput!]
  disconnect: [GroupWhereUniqueInput!]
  delete: [GroupWhereUniqueInput!]
  update: [GroupUpdateWithWhereUniqueWithoutAllUsersInput!]
  upsert: [GroupUpsertWithWhereUniqueWithoutAllUsersInput!]
}

input GroupUpdateManyWithoutMembersInput {
  create: [GroupCreateWithoutMembersInput!]
  connect: [GroupWhereUniqueInput!]
  disconnect: [GroupWhereUniqueInput!]
  delete: [GroupWhereUniqueInput!]
  update: [GroupUpdateWithWhereUniqueWithoutMembersInput!]
  upsert: [GroupUpsertWithWhereUniqueWithoutMembersInput!]
}

input GroupUpdateOneWithoutFeedInput {
  create: GroupCreateWithoutFeedInput
  connect: GroupWhereUniqueInput
  delete: Boolean
  update: GroupUpdateWithoutFeedDataInput
  upsert: GroupUpsertWithoutFeedInput
}

input GroupUpdateWithoutAdminsDataInput {
  name: String
  members: UserUpdateManyWithoutMemberOfInput
  allUsers: UserUpdateManyWithoutGroupsInput
  feed: PostUpdateManyWithoutGroupInput
}

input GroupUpdateWithoutAllUsersDataInput {
  name: String
  admins: UserUpdateManyWithoutAdminOfInput
  members: UserUpdateManyWithoutMemberOfInput
  feed: PostUpdateManyWithoutGroupInput
}

input GroupUpdateWithoutFeedDataInput {
  name: String
  admins: UserUpdateManyWithoutAdminOfInput
  members: UserUpdateManyWithoutMemberOfInput
  allUsers: UserUpdateManyWithoutGroupsInput
}

input GroupUpdateWithoutMembersDataInput {
  name: String
  admins: UserUpdateManyWithoutAdminOfInput
  allUsers: UserUpdateManyWithoutGroupsInput
  feed: PostUpdateManyWithoutGroupInput
}

input GroupUpdateWithWhereUniqueWithoutAdminsInput {
  where: GroupWhereUniqueInput!
  data: GroupUpdateWithoutAdminsDataInput!
}

input GroupUpdateWithWhereUniqueWithoutAllUsersInput {
  where: GroupWhereUniqueInput!
  data: GroupUpdateWithoutAllUsersDataInput!
}

input GroupUpdateWithWhereUniqueWithoutMembersInput {
  where: GroupWhereUniqueInput!
  data: GroupUpdateWithoutMembersDataInput!
}

input GroupUpsertWithoutFeedInput {
  update: GroupUpdateWithoutFeedDataInput!
  create: GroupCreateWithoutFeedInput!
}

input GroupUpsertWithWhereUniqueWithoutAdminsInput {
  where: GroupWhereUniqueInput!
  update: GroupUpdateWithoutAdminsDataInput!
  create: GroupCreateWithoutAdminsInput!
}

input GroupUpsertWithWhereUniqueWithoutAllUsersInput {
  where: GroupWhereUniqueInput!
  update: GroupUpdateWithoutAllUsersDataInput!
  create: GroupCreateWithoutAllUsersInput!
}

input GroupUpsertWithWhereUniqueWithoutMembersInput {
  where: GroupWhereUniqueInput!
  update: GroupUpdateWithoutMembersDataInput!
  create: GroupCreateWithoutMembersInput!
}

input GroupWhereInput {
  """Logical AND on all given filters."""
  AND: [GroupWhereInput!]

  """Logical OR on all given filters."""
  OR: [GroupWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [GroupWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  admins_every: UserWhereInput
  admins_some: UserWhereInput
  admins_none: UserWhereInput
  members_every: UserWhereInput
  members_some: UserWhereInput
  members_none: UserWhereInput
  allUsers_every: UserWhereInput
  allUsers_some: UserWhereInput
  allUsers_none: UserWhereInput
  feed_every: PostWhereInput
  feed_some: PostWhereInput
  feed_none: PostWhereInput
}

input GroupWhereUniqueInput {
  id: ID
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createGroup(data: GroupCreateInput!): Group!
  createPost(data: PostCreateInput!): Post!
  createComment(data: CommentCreateInput!): Comment!
  createUser(data: UserCreateInput!): User!
  updateGroup(data: GroupUpdateInput!, where: GroupWhereUniqueInput!): Group
  updatePost(data: PostUpdateInput!, where: PostWhereUniqueInput!): Post
  updateComment(data: CommentUpdateInput!, where: CommentWhereUniqueInput!): Comment
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  deleteGroup(where: GroupWhereUniqueInput!): Group
  deletePost(where: PostWhereUniqueInput!): Post
  deleteComment(where: CommentWhereUniqueInput!): Comment
  deleteUser(where: UserWhereUniqueInput!): User
  upsertGroup(where: GroupWhereUniqueInput!, create: GroupCreateInput!, update: GroupUpdateInput!): Group!
  upsertPost(where: PostWhereUniqueInput!, create: PostCreateInput!, update: PostUpdateInput!): Post!
  upsertComment(where: CommentWhereUniqueInput!, create: CommentCreateInput!, update: CommentUpdateInput!): Comment!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  updateManyGroups(data: GroupUpdateInput!, where: GroupWhereInput): BatchPayload!
  updateManyPosts(data: PostUpdateInput!, where: PostWhereInput): BatchPayload!
  updateManyComments(data: CommentUpdateInput!, where: CommentWhereInput): BatchPayload!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  deleteManyGroups(where: GroupWhereInput): BatchPayload!
  deleteManyPosts(where: PostWhereInput): BatchPayload!
  deleteManyComments(where: CommentWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Post implements Node {
  id: ID!
  author(where: UserWhereInput): User!
  text: String!
  group(where: GroupWhereInput): Group!
  comments(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comment!]
}

"""A connection to a list of items."""
type PostConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [PostEdge]!
  aggregate: AggregatePost!
}

input PostCreateInput {
  text: String!
  author: UserCreateOneInput!
  group: GroupCreateOneWithoutFeedInput!
  comments: CommentCreateManyWithoutPostInput
}

input PostCreateManyWithoutGroupInput {
  create: [PostCreateWithoutGroupInput!]
  connect: [PostWhereUniqueInput!]
}

input PostCreateOneWithoutCommentsInput {
  create: PostCreateWithoutCommentsInput
  connect: PostWhereUniqueInput
}

input PostCreateWithoutCommentsInput {
  text: String!
  author: UserCreateOneInput!
  group: GroupCreateOneWithoutFeedInput!
}

input PostCreateWithoutGroupInput {
  text: String!
  author: UserCreateOneInput!
  comments: CommentCreateManyWithoutPostInput
}

"""An edge in a connection."""
type PostEdge {
  """The item at the end of the edge."""
  node: Post!

  """A cursor for use in pagination."""
  cursor: String!
}

enum PostOrderByInput {
  id_ASC
  id_DESC
  text_ASC
  text_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type PostPreviousValues {
  id: ID!
  text: String!
}

type PostSubscriptionPayload {
  mutation: MutationType!
  node: Post
  updatedFields: [String!]
  previousValues: PostPreviousValues
}

input PostSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [PostSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [PostSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PostSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: PostWhereInput
}

input PostUpdateInput {
  text: String
  author: UserUpdateOneInput
  group: GroupUpdateOneWithoutFeedInput
  comments: CommentUpdateManyWithoutPostInput
}

input PostUpdateManyWithoutGroupInput {
  create: [PostCreateWithoutGroupInput!]
  connect: [PostWhereUniqueInput!]
  disconnect: [PostWhereUniqueInput!]
  delete: [PostWhereUniqueInput!]
  update: [PostUpdateWithWhereUniqueWithoutGroupInput!]
  upsert: [PostUpsertWithWhereUniqueWithoutGroupInput!]
}

input PostUpdateOneWithoutCommentsInput {
  create: PostCreateWithoutCommentsInput
  connect: PostWhereUniqueInput
  delete: Boolean
  update: PostUpdateWithoutCommentsDataInput
  upsert: PostUpsertWithoutCommentsInput
}

input PostUpdateWithoutCommentsDataInput {
  text: String
  author: UserUpdateOneInput
  group: GroupUpdateOneWithoutFeedInput
}

input PostUpdateWithoutGroupDataInput {
  text: String
  author: UserUpdateOneInput
  comments: CommentUpdateManyWithoutPostInput
}

input PostUpdateWithWhereUniqueWithoutGroupInput {
  where: PostWhereUniqueInput!
  data: PostUpdateWithoutGroupDataInput!
}

input PostUpsertWithoutCommentsInput {
  update: PostUpdateWithoutCommentsDataInput!
  create: PostCreateWithoutCommentsInput!
}

input PostUpsertWithWhereUniqueWithoutGroupInput {
  where: PostWhereUniqueInput!
  update: PostUpdateWithoutGroupDataInput!
  create: PostCreateWithoutGroupInput!
}

input PostWhereInput {
  """Logical AND on all given filters."""
  AND: [PostWhereInput!]

  """Logical OR on all given filters."""
  OR: [PostWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PostWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  text: String

  """All values that are not equal to given value."""
  text_not: String

  """All values that are contained in given list."""
  text_in: [String!]

  """All values that are not contained in given list."""
  text_not_in: [String!]

  """All values less than the given value."""
  text_lt: String

  """All values less than or equal the given value."""
  text_lte: String

  """All values greater than the given value."""
  text_gt: String

  """All values greater than or equal the given value."""
  text_gte: String

  """All values containing the given string."""
  text_contains: String

  """All values not containing the given string."""
  text_not_contains: String

  """All values starting with the given string."""
  text_starts_with: String

  """All values not starting with the given string."""
  text_not_starts_with: String

  """All values ending with the given string."""
  text_ends_with: String

  """All values not ending with the given string."""
  text_not_ends_with: String
  author: UserWhereInput
  group: GroupWhereInput
  comments_every: CommentWhereInput
  comments_some: CommentWhereInput
  comments_none: CommentWhereInput
}

input PostWhereUniqueInput {
  id: ID
}

type Query {
  groups(where: GroupWhereInput, orderBy: GroupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Group]!
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post]!
  comments(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comment]!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  group(where: GroupWhereUniqueInput!): Group
  post(where: PostWhereUniqueInput!): Post
  comment(where: CommentWhereUniqueInput!): Comment
  user(where: UserWhereUniqueInput!): User
  groupsConnection(where: GroupWhereInput, orderBy: GroupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GroupConnection!
  postsConnection(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostConnection!
  commentsConnection(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CommentConnection!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Subscription {
  group(where: GroupSubscriptionWhereInput): GroupSubscriptionPayload
  post(where: PostSubscriptionWhereInput): PostSubscriptionPayload
  comment(where: CommentSubscriptionWhereInput): CommentSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User implements Node {
  id: ID!
  name: String!
  email: String
  username: String!
  password: String!
  groups(where: GroupWhereInput, orderBy: GroupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Group!]
  adminOf(where: GroupWhereInput, orderBy: GroupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Group!]
  memberOf(where: GroupWhereInput, orderBy: GroupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Group!]
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String!
  email: String
  username: String!
  password: String!
  groups: GroupCreateManyWithoutAllUsersInput
  adminOf: GroupCreateManyWithoutAdminsInput
  memberOf: GroupCreateManyWithoutMembersInput
}

input UserCreateManyWithoutAdminOfInput {
  create: [UserCreateWithoutAdminOfInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutGroupsInput {
  create: [UserCreateWithoutGroupsInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutMemberOfInput {
  create: [UserCreateWithoutMemberOfInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutAdminOfInput {
  name: String!
  email: String
  username: String!
  password: String!
  groups: GroupCreateManyWithoutAllUsersInput
  memberOf: GroupCreateManyWithoutMembersInput
}

input UserCreateWithoutGroupsInput {
  name: String!
  email: String
  username: String!
  password: String!
  adminOf: GroupCreateManyWithoutAdminsInput
  memberOf: GroupCreateManyWithoutMembersInput
}

input UserCreateWithoutMemberOfInput {
  name: String!
  email: String
  username: String!
  password: String!
  groups: GroupCreateManyWithoutAllUsersInput
  adminOf: GroupCreateManyWithoutAdminsInput
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
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
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  email: String
  username: String!
  password: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateDataInput {
  name: String
  email: String
  username: String
  password: String
  groups: GroupUpdateManyWithoutAllUsersInput
  adminOf: GroupUpdateManyWithoutAdminsInput
  memberOf: GroupUpdateManyWithoutMembersInput
}

input UserUpdateInput {
  name: String
  email: String
  username: String
  password: String
  groups: GroupUpdateManyWithoutAllUsersInput
  adminOf: GroupUpdateManyWithoutAdminsInput
  memberOf: GroupUpdateManyWithoutMembersInput
}

input UserUpdateManyWithoutAdminOfInput {
  create: [UserCreateWithoutAdminOfInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  delete: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutAdminOfInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutAdminOfInput!]
}

input UserUpdateManyWithoutGroupsInput {
  create: [UserCreateWithoutGroupsInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  delete: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutGroupsInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutGroupsInput!]
}

input UserUpdateManyWithoutMemberOfInput {
  create: [UserCreateWithoutMemberOfInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  delete: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutMemberOfInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutMemberOfInput!]
}

input UserUpdateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
}

input UserUpdateWithoutAdminOfDataInput {
  name: String
  email: String
  username: String
  password: String
  groups: GroupUpdateManyWithoutAllUsersInput
  memberOf: GroupUpdateManyWithoutMembersInput
}

input UserUpdateWithoutGroupsDataInput {
  name: String
  email: String
  username: String
  password: String
  adminOf: GroupUpdateManyWithoutAdminsInput
  memberOf: GroupUpdateManyWithoutMembersInput
}

input UserUpdateWithoutMemberOfDataInput {
  name: String
  email: String
  username: String
  password: String
  groups: GroupUpdateManyWithoutAllUsersInput
  adminOf: GroupUpdateManyWithoutAdminsInput
}

input UserUpdateWithWhereUniqueWithoutAdminOfInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutAdminOfDataInput!
}

input UserUpdateWithWhereUniqueWithoutGroupsInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutGroupsDataInput!
}

input UserUpdateWithWhereUniqueWithoutMemberOfInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutMemberOfDataInput!
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithWhereUniqueWithoutAdminOfInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutAdminOfDataInput!
  create: UserCreateWithoutAdminOfInput!
}

input UserUpsertWithWhereUniqueWithoutGroupsInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutGroupsDataInput!
  create: UserCreateWithoutGroupsInput!
}

input UserUpsertWithWhereUniqueWithoutMemberOfInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutMemberOfDataInput!
  create: UserCreateWithoutMemberOfInput!
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  username: String

  """All values that are not equal to given value."""
  username_not: String

  """All values that are contained in given list."""
  username_in: [String!]

  """All values that are not contained in given list."""
  username_not_in: [String!]

  """All values less than the given value."""
  username_lt: String

  """All values less than or equal the given value."""
  username_lte: String

  """All values greater than the given value."""
  username_gt: String

  """All values greater than or equal the given value."""
  username_gte: String

  """All values containing the given string."""
  username_contains: String

  """All values not containing the given string."""
  username_not_contains: String

  """All values starting with the given string."""
  username_starts_with: String

  """All values not starting with the given string."""
  username_not_starts_with: String

  """All values ending with the given string."""
  username_ends_with: String

  """All values not ending with the given string."""
  username_not_ends_with: String
  password: String

  """All values that are not equal to given value."""
  password_not: String

  """All values that are contained in given list."""
  password_in: [String!]

  """All values that are not contained in given list."""
  password_not_in: [String!]

  """All values less than the given value."""
  password_lt: String

  """All values less than or equal the given value."""
  password_lte: String

  """All values greater than the given value."""
  password_gt: String

  """All values greater than or equal the given value."""
  password_gte: String

  """All values containing the given string."""
  password_contains: String

  """All values not containing the given string."""
  password_not_contains: String

  """All values starting with the given string."""
  password_starts_with: String

  """All values not starting with the given string."""
  password_not_starts_with: String

  """All values ending with the given string."""
  password_ends_with: String

  """All values not ending with the given string."""
  password_not_ends_with: String
  groups_every: GroupWhereInput
  groups_some: GroupWhereInput
  groups_none: GroupWhereInput
  adminOf_every: GroupWhereInput
  adminOf_some: GroupWhereInput
  adminOf_none: GroupWhereInput
  memberOf_every: GroupWhereInput
  memberOf_some: GroupWhereInput
  memberOf_none: GroupWhereInput
  _MagicalBackRelation_CommentToUser_every: CommentWhereInput
  _MagicalBackRelation_CommentToUser_some: CommentWhereInput
  _MagicalBackRelation_CommentToUser_none: CommentWhereInput
  _MagicalBackRelation_PostToUser_every: PostWhereInput
  _MagicalBackRelation_PostToUser_some: PostWhereInput
  _MagicalBackRelation_PostToUser_none: PostWhereInput
}

input UserWhereUniqueInput {
  id: ID
  email: String
  username: String
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type GroupOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'email_ASC' |
  'email_DESC' |
  'username_ASC' |
  'username_DESC' |
  'password_ASC' |
  'password_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type PostOrderByInput =   'id_ASC' |
  'id_DESC' |
  'text_ASC' |
  'text_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type CommentOrderByInput =   'id_ASC' |
  'id_DESC' |
  'text_ASC' |
  'text_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export interface GroupUpdateInput {
  name?: String
  admins?: UserUpdateManyWithoutAdminOfInput
  members?: UserUpdateManyWithoutMemberOfInput
  allUsers?: UserUpdateManyWithoutGroupsInput
  feed?: PostUpdateManyWithoutGroupInput
}

export interface GroupWhereInput {
  AND?: GroupWhereInput[] | GroupWhereInput
  OR?: GroupWhereInput[] | GroupWhereInput
  NOT?: GroupWhereInput[] | GroupWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  admins_every?: UserWhereInput
  admins_some?: UserWhereInput
  admins_none?: UserWhereInput
  members_every?: UserWhereInput
  members_some?: UserWhereInput
  members_none?: UserWhereInput
  allUsers_every?: UserWhereInput
  allUsers_some?: UserWhereInput
  allUsers_none?: UserWhereInput
  feed_every?: PostWhereInput
  feed_some?: PostWhereInput
  feed_none?: PostWhereInput
}

export interface PostCreateWithoutGroupInput {
  text: String
  author: UserCreateOneInput
  comments?: CommentCreateManyWithoutPostInput
}

export interface PostUpsertWithWhereUniqueWithoutGroupInput {
  where: PostWhereUniqueInput
  update: PostUpdateWithoutGroupDataInput
  create: PostCreateWithoutGroupInput
}

export interface UserCreateOneInput {
  create?: UserCreateInput
  connect?: UserWhereUniqueInput
}

export interface GroupUpdateManyWithoutAllUsersInput {
  create?: GroupCreateWithoutAllUsersInput[] | GroupCreateWithoutAllUsersInput
  connect?: GroupWhereUniqueInput[] | GroupWhereUniqueInput
  disconnect?: GroupWhereUniqueInput[] | GroupWhereUniqueInput
  delete?: GroupWhereUniqueInput[] | GroupWhereUniqueInput
  update?: GroupUpdateWithWhereUniqueWithoutAllUsersInput[] | GroupUpdateWithWhereUniqueWithoutAllUsersInput
  upsert?: GroupUpsertWithWhereUniqueWithoutAllUsersInput[] | GroupUpsertWithWhereUniqueWithoutAllUsersInput
}

export interface UserCreateInput {
  name: String
  email?: String
  username: String
  password: String
  groups?: GroupCreateManyWithoutAllUsersInput
  adminOf?: GroupCreateManyWithoutAdminsInput
  memberOf?: GroupCreateManyWithoutMembersInput
}

export interface PostWhereInput {
  AND?: PostWhereInput[] | PostWhereInput
  OR?: PostWhereInput[] | PostWhereInput
  NOT?: PostWhereInput[] | PostWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  text?: String
  text_not?: String
  text_in?: String[] | String
  text_not_in?: String[] | String
  text_lt?: String
  text_lte?: String
  text_gt?: String
  text_gte?: String
  text_contains?: String
  text_not_contains?: String
  text_starts_with?: String
  text_not_starts_with?: String
  text_ends_with?: String
  text_not_ends_with?: String
  author?: UserWhereInput
  group?: GroupWhereInput
  comments_every?: CommentWhereInput
  comments_some?: CommentWhereInput
  comments_none?: CommentWhereInput
}

export interface CommentCreateManyWithoutPostInput {
  create?: CommentCreateWithoutPostInput[] | CommentCreateWithoutPostInput
  connect?: CommentWhereUniqueInput[] | CommentWhereUniqueInput
}

export interface CommentWhereInput {
  AND?: CommentWhereInput[] | CommentWhereInput
  OR?: CommentWhereInput[] | CommentWhereInput
  NOT?: CommentWhereInput[] | CommentWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  text?: String
  text_not?: String
  text_in?: String[] | String
  text_not_in?: String[] | String
  text_lt?: String
  text_lte?: String
  text_gt?: String
  text_gte?: String
  text_contains?: String
  text_not_contains?: String
  text_starts_with?: String
  text_not_starts_with?: String
  text_ends_with?: String
  text_not_ends_with?: String
  author?: UserWhereInput
  post?: PostWhereInput
}

export interface CommentCreateWithoutPostInput {
  text: String
  author: UserCreateOneInput
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput
  OR?: UserWhereInput[] | UserWhereInput
  NOT?: UserWhereInput[] | UserWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  email?: String
  email_not?: String
  email_in?: String[] | String
  email_not_in?: String[] | String
  email_lt?: String
  email_lte?: String
  email_gt?: String
  email_gte?: String
  email_contains?: String
  email_not_contains?: String
  email_starts_with?: String
  email_not_starts_with?: String
  email_ends_with?: String
  email_not_ends_with?: String
  username?: String
  username_not?: String
  username_in?: String[] | String
  username_not_in?: String[] | String
  username_lt?: String
  username_lte?: String
  username_gt?: String
  username_gte?: String
  username_contains?: String
  username_not_contains?: String
  username_starts_with?: String
  username_not_starts_with?: String
  username_ends_with?: String
  username_not_ends_with?: String
  password?: String
  password_not?: String
  password_in?: String[] | String
  password_not_in?: String[] | String
  password_lt?: String
  password_lte?: String
  password_gt?: String
  password_gte?: String
  password_contains?: String
  password_not_contains?: String
  password_starts_with?: String
  password_not_starts_with?: String
  password_ends_with?: String
  password_not_ends_with?: String
  groups_every?: GroupWhereInput
  groups_some?: GroupWhereInput
  groups_none?: GroupWhereInput
  adminOf_every?: GroupWhereInput
  adminOf_some?: GroupWhereInput
  adminOf_none?: GroupWhereInput
  memberOf_every?: GroupWhereInput
  memberOf_some?: GroupWhereInput
  memberOf_none?: GroupWhereInput
  _MagicalBackRelation_CommentToUser_every?: CommentWhereInput
  _MagicalBackRelation_CommentToUser_some?: CommentWhereInput
  _MagicalBackRelation_CommentToUser_none?: CommentWhereInput
  _MagicalBackRelation_PostToUser_every?: PostWhereInput
  _MagicalBackRelation_PostToUser_some?: PostWhereInput
  _MagicalBackRelation_PostToUser_none?: PostWhereInput
}

export interface PostCreateInput {
  text: String
  author: UserCreateOneInput
  group: GroupCreateOneWithoutFeedInput
  comments?: CommentCreateManyWithoutPostInput
}

export interface GroupWhereUniqueInput {
  id?: ID_Input
}

export interface GroupCreateOneWithoutFeedInput {
  create?: GroupCreateWithoutFeedInput
  connect?: GroupWhereUniqueInput
}

export interface CommentWhereUniqueInput {
  id?: ID_Input
}

export interface GroupCreateWithoutFeedInput {
  name: String
  admins?: UserCreateManyWithoutAdminOfInput
  members?: UserCreateManyWithoutMemberOfInput
  allUsers?: UserCreateManyWithoutGroupsInput
}

export interface GroupSubscriptionWhereInput {
  AND?: GroupSubscriptionWhereInput[] | GroupSubscriptionWhereInput
  OR?: GroupSubscriptionWhereInput[] | GroupSubscriptionWhereInput
  NOT?: GroupSubscriptionWhereInput[] | GroupSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: GroupWhereInput
}

export interface CommentCreateInput {
  text: String
  author: UserCreateOneInput
  post: PostCreateOneWithoutCommentsInput
}

export interface PostUpsertWithoutCommentsInput {
  update: PostUpdateWithoutCommentsDataInput
  create: PostCreateWithoutCommentsInput
}

export interface PostCreateOneWithoutCommentsInput {
  create?: PostCreateWithoutCommentsInput
  connect?: PostWhereUniqueInput
}

export interface PostUpdateOneWithoutCommentsInput {
  create?: PostCreateWithoutCommentsInput
  connect?: PostWhereUniqueInput
  delete?: Boolean
  update?: PostUpdateWithoutCommentsDataInput
  upsert?: PostUpsertWithoutCommentsInput
}

export interface PostCreateWithoutCommentsInput {
  text: String
  author: UserCreateOneInput
  group: GroupCreateOneWithoutFeedInput
}

export interface GroupUpsertWithoutFeedInput {
  update: GroupUpdateWithoutFeedDataInput
  create: GroupCreateWithoutFeedInput
}

export interface UserUpsertWithWhereUniqueWithoutGroupsInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutGroupsDataInput
  create: UserCreateWithoutGroupsInput
}

export interface GroupUpdateOneWithoutFeedInput {
  create?: GroupCreateWithoutFeedInput
  connect?: GroupWhereUniqueInput
  delete?: Boolean
  update?: GroupUpdateWithoutFeedDataInput
  upsert?: GroupUpsertWithoutFeedInput
}

export interface UserUpdateManyWithoutAdminOfInput {
  create?: UserCreateWithoutAdminOfInput[] | UserCreateWithoutAdminOfInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput
  update?: UserUpdateWithWhereUniqueWithoutAdminOfInput[] | UserUpdateWithWhereUniqueWithoutAdminOfInput
  upsert?: UserUpsertWithWhereUniqueWithoutAdminOfInput[] | UserUpsertWithWhereUniqueWithoutAdminOfInput
}

export interface UserUpsertWithWhereUniqueWithoutAdminOfInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutAdminOfDataInput
  create: UserCreateWithoutAdminOfInput
}

export interface UserUpdateWithWhereUniqueWithoutAdminOfInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutAdminOfDataInput
}

export interface UserUpsertWithWhereUniqueWithoutMemberOfInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutMemberOfDataInput
  create: UserCreateWithoutMemberOfInput
}

export interface UserUpdateWithoutAdminOfDataInput {
  name?: String
  email?: String
  username?: String
  password?: String
  groups?: GroupUpdateManyWithoutAllUsersInput
  memberOf?: GroupUpdateManyWithoutMembersInput
}

export interface GroupCreateInput {
  name: String
  admins?: UserCreateManyWithoutAdminOfInput
  members?: UserCreateManyWithoutMemberOfInput
  allUsers?: UserCreateManyWithoutGroupsInput
  feed?: PostCreateManyWithoutGroupInput
}

export interface GroupUpsertWithWhereUniqueWithoutMembersInput {
  where: GroupWhereUniqueInput
  update: GroupUpdateWithoutMembersDataInput
  create: GroupCreateWithoutMembersInput
}

export interface UserCreateWithoutAdminOfInput {
  name: String
  email?: String
  username: String
  password: String
  groups?: GroupCreateManyWithoutAllUsersInput
  memberOf?: GroupCreateManyWithoutMembersInput
}

export interface GroupUpdateWithWhereUniqueWithoutAllUsersInput {
  where: GroupWhereUniqueInput
  data: GroupUpdateWithoutAllUsersDataInput
}

export interface GroupCreateWithoutAllUsersInput {
  name: String
  admins?: UserCreateManyWithoutAdminOfInput
  members?: UserCreateManyWithoutMemberOfInput
  feed?: PostCreateManyWithoutGroupInput
}

export interface GroupUpdateWithoutAllUsersDataInput {
  name?: String
  admins?: UserUpdateManyWithoutAdminOfInput
  members?: UserUpdateManyWithoutMemberOfInput
  feed?: PostUpdateManyWithoutGroupInput
}

export interface UserCreateWithoutMemberOfInput {
  name: String
  email?: String
  username: String
  password: String
  groups?: GroupCreateManyWithoutAllUsersInput
  adminOf?: GroupCreateManyWithoutAdminsInput
}

export interface UserUpdateManyWithoutMemberOfInput {
  create?: UserCreateWithoutMemberOfInput[] | UserCreateWithoutMemberOfInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput
  update?: UserUpdateWithWhereUniqueWithoutMemberOfInput[] | UserUpdateWithWhereUniqueWithoutMemberOfInput
  upsert?: UserUpsertWithWhereUniqueWithoutMemberOfInput[] | UserUpsertWithWhereUniqueWithoutMemberOfInput
}

export interface GroupCreateWithoutAdminsInput {
  name: String
  members?: UserCreateManyWithoutMemberOfInput
  allUsers?: UserCreateManyWithoutGroupsInput
  feed?: PostCreateManyWithoutGroupInput
}

export interface UserUpdateWithWhereUniqueWithoutMemberOfInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutMemberOfDataInput
}

export interface UserCreateWithoutGroupsInput {
  name: String
  email?: String
  username: String
  password: String
  adminOf?: GroupCreateManyWithoutAdminsInput
  memberOf?: GroupCreateManyWithoutMembersInput
}

export interface UserUpdateWithoutMemberOfDataInput {
  name?: String
  email?: String
  username?: String
  password?: String
  groups?: GroupUpdateManyWithoutAllUsersInput
  adminOf?: GroupUpdateManyWithoutAdminsInput
}

export interface GroupCreateWithoutMembersInput {
  name: String
  admins?: UserCreateManyWithoutAdminOfInput
  allUsers?: UserCreateManyWithoutGroupsInput
  feed?: PostCreateManyWithoutGroupInput
}

export interface GroupUpdateManyWithoutAdminsInput {
  create?: GroupCreateWithoutAdminsInput[] | GroupCreateWithoutAdminsInput
  connect?: GroupWhereUniqueInput[] | GroupWhereUniqueInput
  disconnect?: GroupWhereUniqueInput[] | GroupWhereUniqueInput
  delete?: GroupWhereUniqueInput[] | GroupWhereUniqueInput
  update?: GroupUpdateWithWhereUniqueWithoutAdminsInput[] | GroupUpdateWithWhereUniqueWithoutAdminsInput
  upsert?: GroupUpsertWithWhereUniqueWithoutAdminsInput[] | GroupUpsertWithWhereUniqueWithoutAdminsInput
}

export interface CommentSubscriptionWhereInput {
  AND?: CommentSubscriptionWhereInput[] | CommentSubscriptionWhereInput
  OR?: CommentSubscriptionWhereInput[] | CommentSubscriptionWhereInput
  NOT?: CommentSubscriptionWhereInput[] | CommentSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: CommentWhereInput
}

export interface GroupUpdateWithWhereUniqueWithoutAdminsInput {
  where: GroupWhereUniqueInput
  data: GroupUpdateWithoutAdminsDataInput
}

export interface PostWhereUniqueInput {
  id?: ID_Input
}

export interface GroupUpdateWithoutAdminsDataInput {
  name?: String
  members?: UserUpdateManyWithoutMemberOfInput
  allUsers?: UserUpdateManyWithoutGroupsInput
  feed?: PostUpdateManyWithoutGroupInput
}

export interface UserUpdateInput {
  name?: String
  email?: String
  username?: String
  password?: String
  groups?: GroupUpdateManyWithoutAllUsersInput
  adminOf?: GroupUpdateManyWithoutAdminsInput
  memberOf?: GroupUpdateManyWithoutMembersInput
}

export interface UserUpdateManyWithoutGroupsInput {
  create?: UserCreateWithoutGroupsInput[] | UserCreateWithoutGroupsInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput
  update?: UserUpdateWithWhereUniqueWithoutGroupsInput[] | UserUpdateWithWhereUniqueWithoutGroupsInput
  upsert?: UserUpsertWithWhereUniqueWithoutGroupsInput[] | UserUpsertWithWhereUniqueWithoutGroupsInput
}

export interface CommentUpdateInput {
  text?: String
  author?: UserUpdateOneInput
  post?: PostUpdateOneWithoutCommentsInput
}

export interface UserUpdateWithWhereUniqueWithoutGroupsInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutGroupsDataInput
}

export interface PostUpdateInput {
  text?: String
  author?: UserUpdateOneInput
  group?: GroupUpdateOneWithoutFeedInput
  comments?: CommentUpdateManyWithoutPostInput
}

export interface UserUpdateWithoutGroupsDataInput {
  name?: String
  email?: String
  username?: String
  password?: String
  adminOf?: GroupUpdateManyWithoutAdminsInput
  memberOf?: GroupUpdateManyWithoutMembersInput
}

export interface GroupUpsertWithWhereUniqueWithoutAdminsInput {
  where: GroupWhereUniqueInput
  update: GroupUpdateWithoutAdminsDataInput
  create: GroupCreateWithoutAdminsInput
}

export interface GroupUpdateManyWithoutMembersInput {
  create?: GroupCreateWithoutMembersInput[] | GroupCreateWithoutMembersInput
  connect?: GroupWhereUniqueInput[] | GroupWhereUniqueInput
  disconnect?: GroupWhereUniqueInput[] | GroupWhereUniqueInput
  delete?: GroupWhereUniqueInput[] | GroupWhereUniqueInput
  update?: GroupUpdateWithWhereUniqueWithoutMembersInput[] | GroupUpdateWithWhereUniqueWithoutMembersInput
  upsert?: GroupUpsertWithWhereUniqueWithoutMembersInput[] | GroupUpsertWithWhereUniqueWithoutMembersInput
}

export interface GroupCreateManyWithoutAllUsersInput {
  create?: GroupCreateWithoutAllUsersInput[] | GroupCreateWithoutAllUsersInput
  connect?: GroupWhereUniqueInput[] | GroupWhereUniqueInput
}

export interface GroupUpdateWithWhereUniqueWithoutMembersInput {
  where: GroupWhereUniqueInput
  data: GroupUpdateWithoutMembersDataInput
}

export interface GroupCreateManyWithoutAdminsInput {
  create?: GroupCreateWithoutAdminsInput[] | GroupCreateWithoutAdminsInput
  connect?: GroupWhereUniqueInput[] | GroupWhereUniqueInput
}

export interface GroupUpdateWithoutMembersDataInput {
  name?: String
  admins?: UserUpdateManyWithoutAdminOfInput
  allUsers?: UserUpdateManyWithoutGroupsInput
  feed?: PostUpdateManyWithoutGroupInput
}

export interface GroupCreateManyWithoutMembersInput {
  create?: GroupCreateWithoutMembersInput[] | GroupCreateWithoutMembersInput
  connect?: GroupWhereUniqueInput[] | GroupWhereUniqueInput
}

export interface PostUpdateManyWithoutGroupInput {
  create?: PostCreateWithoutGroupInput[] | PostCreateWithoutGroupInput
  connect?: PostWhereUniqueInput[] | PostWhereUniqueInput
  disconnect?: PostWhereUniqueInput[] | PostWhereUniqueInput
  delete?: PostWhereUniqueInput[] | PostWhereUniqueInput
  update?: PostUpdateWithWhereUniqueWithoutGroupInput[] | PostUpdateWithWhereUniqueWithoutGroupInput
  upsert?: PostUpsertWithWhereUniqueWithoutGroupInput[] | PostUpsertWithWhereUniqueWithoutGroupInput
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: UserWhereInput
}

export interface PostUpdateWithWhereUniqueWithoutGroupInput {
  where: PostWhereUniqueInput
  data: PostUpdateWithoutGroupDataInput
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  email?: String
  username?: String
}

export interface PostUpdateWithoutGroupDataInput {
  text?: String
  author?: UserUpdateOneInput
  comments?: CommentUpdateManyWithoutPostInput
}

export interface GroupUpdateWithoutFeedDataInput {
  name?: String
  admins?: UserUpdateManyWithoutAdminOfInput
  members?: UserUpdateManyWithoutMemberOfInput
  allUsers?: UserUpdateManyWithoutGroupsInput
}

export interface UserUpdateOneInput {
  create?: UserCreateInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateDataInput
  upsert?: UserUpsertNestedInput
}

export interface UserCreateManyWithoutAdminOfInput {
  create?: UserCreateWithoutAdminOfInput[] | UserCreateWithoutAdminOfInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
}

export interface UserUpdateDataInput {
  name?: String
  email?: String
  username?: String
  password?: String
  groups?: GroupUpdateManyWithoutAllUsersInput
  adminOf?: GroupUpdateManyWithoutAdminsInput
  memberOf?: GroupUpdateManyWithoutMembersInput
}

export interface UserCreateManyWithoutGroupsInput {
  create?: UserCreateWithoutGroupsInput[] | UserCreateWithoutGroupsInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
}

export interface UserUpsertNestedInput {
  update: UserUpdateDataInput
  create: UserCreateInput
}

export interface PostSubscriptionWhereInput {
  AND?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput
  OR?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput
  NOT?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: PostWhereInput
}

export interface CommentUpsertWithWhereUniqueWithoutPostInput {
  where: CommentWhereUniqueInput
  update: CommentUpdateWithoutPostDataInput
  create: CommentCreateWithoutPostInput
}

export interface CommentUpdateWithoutPostDataInput {
  text?: String
  author?: UserUpdateOneInput
}

export interface CommentUpdateWithWhereUniqueWithoutPostInput {
  where: CommentWhereUniqueInput
  data: CommentUpdateWithoutPostDataInput
}

export interface CommentUpdateManyWithoutPostInput {
  create?: CommentCreateWithoutPostInput[] | CommentCreateWithoutPostInput
  connect?: CommentWhereUniqueInput[] | CommentWhereUniqueInput
  disconnect?: CommentWhereUniqueInput[] | CommentWhereUniqueInput
  delete?: CommentWhereUniqueInput[] | CommentWhereUniqueInput
  update?: CommentUpdateWithWhereUniqueWithoutPostInput[] | CommentUpdateWithWhereUniqueWithoutPostInput
  upsert?: CommentUpsertWithWhereUniqueWithoutPostInput[] | CommentUpsertWithWhereUniqueWithoutPostInput
}

export interface PostUpdateWithoutCommentsDataInput {
  text?: String
  author?: UserUpdateOneInput
  group?: GroupUpdateOneWithoutFeedInput
}

export interface PostCreateManyWithoutGroupInput {
  create?: PostCreateWithoutGroupInput[] | PostCreateWithoutGroupInput
  connect?: PostWhereUniqueInput[] | PostWhereUniqueInput
}

export interface UserCreateManyWithoutMemberOfInput {
  create?: UserCreateWithoutMemberOfInput[] | UserCreateWithoutMemberOfInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
}

export interface GroupUpsertWithWhereUniqueWithoutAllUsersInput {
  where: GroupWhereUniqueInput
  update: GroupUpdateWithoutAllUsersDataInput
  create: GroupCreateWithoutAllUsersInput
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface UserPreviousValues {
  id: ID_Output
  name: String
  email?: String
  username: String
  password: String
}

export interface BatchPayload {
  count: Long
}

export interface Group extends Node {
  id: ID_Output
  name: String
  admins?: User[]
  members?: User[]
  allUsers?: User[]
  feed?: Post[]
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

export interface CommentSubscriptionPayload {
  mutation: MutationType
  node?: Comment
  updatedFields?: String[]
  previousValues?: CommentPreviousValues
}

export interface User extends Node {
  id: ID_Output
  name: String
  email?: String
  username: String
  password: String
  groups?: Group[]
  adminOf?: Group[]
  memberOf?: Group[]
}

export interface AggregateUser {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface AggregateComment {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface GroupConnection {
  pageInfo: PageInfo
  edges: GroupEdge[]
  aggregate: AggregateGroup
}

/*
 * A connection to a list of items.

 */
export interface CommentConnection {
  pageInfo: PageInfo
  edges: CommentEdge[]
  aggregate: AggregateComment
}

export interface CommentPreviousValues {
  id: ID_Output
  text: String
}

/*
 * An edge in a connection.

 */
export interface PostEdge {
  node: Post
  cursor: String
}

export interface GroupSubscriptionPayload {
  mutation: MutationType
  node?: Group
  updatedFields?: String[]
  previousValues?: GroupPreviousValues
}

export interface AggregateGroup {
  count: Int
}

export interface GroupPreviousValues {
  id: ID_Output
  name: String
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

/*
 * An edge in a connection.

 */
export interface CommentEdge {
  node: Comment
  cursor: String
}

export interface Post extends Node {
  id: ID_Output
  author: User
  text: String
  group: Group
  comments?: Comment[]
}

export interface PostPreviousValues {
  id: ID_Output
  text: String
}

export interface PostSubscriptionPayload {
  mutation: MutationType
  node?: Post
  updatedFields?: String[]
  previousValues?: PostPreviousValues
}

export interface Comment extends Node {
  id: ID_Output
  author: User
  text: String
  post: Post
}

export interface AggregatePost {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

/*
 * An edge in a connection.

 */
export interface GroupEdge {
  node: Group
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface PostConnection {
  pageInfo: PageInfo
  edges: PostEdge[]
  aggregate: AggregatePost
}

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string