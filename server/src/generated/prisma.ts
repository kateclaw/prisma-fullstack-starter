import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    groups: <T = Group[]>(args: { where?: GroupWhereInput, orderBy?: GroupOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    feeds: <T = Feed[]>(args: { where?: FeedWhereInput, orderBy?: FeedOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    posts: <T = Post[]>(args: { where?: PostWhereInput, orderBy?: PostOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    comments: <T = Comment[]>(args: { where?: CommentWhereInput, orderBy?: CommentOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    group: <T = Group | null>(args: { where: GroupWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    feed: <T = Feed | null>(args: { where: FeedWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    groupsConnection: <T = GroupConnection>(args: { where?: GroupWhereInput, orderBy?: GroupOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    feedsConnection: <T = FeedConnection>(args: { where?: FeedWhereInput, orderBy?: FeedOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    postsConnection: <T = PostConnection>(args: { where?: PostWhereInput, orderBy?: PostOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    commentsConnection: <T = CommentConnection>(args: { where?: CommentWhereInput, orderBy?: CommentOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createGroup: <T = Group>(args: { data: GroupCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createFeed: <T = Feed>(args: { data: FeedCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createPost: <T = Post>(args: { data: PostCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createComment: <T = Comment>(args: { data: CommentCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateGroup: <T = Group | null>(args: { data: GroupUpdateInput, where: GroupWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateFeed: <T = Feed | null>(args: { data: FeedUpdateInput, where: FeedWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteGroup: <T = Group | null>(args: { where: GroupWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteFeed: <T = Feed | null>(args: { where: FeedWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertGroup: <T = Group>(args: { where: GroupWhereUniqueInput, create: GroupCreateInput, update: GroupUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertFeed: <T = Feed>(args: { where: FeedWhereUniqueInput, create: FeedCreateInput, update: FeedUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyGroups: <T = BatchPayload>(args: { data: GroupUpdateInput, where?: GroupWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyFeeds: <T = BatchPayload>(args: { data: FeedUpdateInput, where?: FeedWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPosts: <T = BatchPayload>(args: { data: PostUpdateInput, where?: PostWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyComments: <T = BatchPayload>(args: { data: CommentUpdateInput, where?: CommentWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyGroups: <T = BatchPayload>(args: { where?: GroupWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyFeeds: <T = BatchPayload>(args: { where?: FeedWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPosts: <T = BatchPayload>(args: { where?: PostWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyComments: <T = BatchPayload>(args: { where?: CommentWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    group: <T = GroupSubscriptionPayload | null>(args: { where?: GroupSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    feed: <T = FeedSubscriptionPayload | null>(args: { where?: FeedSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    post: <T = PostSubscriptionPayload | null>(args: { where?: PostSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    comment: <T = CommentSubscriptionPayload | null>(args: { where?: CommentSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  Group: (where?: GroupWhereInput) => Promise<boolean>
  Feed: (where?: FeedWhereInput) => Promise<boolean>
  Post: (where?: PostWhereInput) => Promise<boolean>
  User: (where?: UserWhereInput) => Promise<boolean>
  Comment: (where?: CommentWhereInput) => Promise<boolean>
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

type AggregateFeed {
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

type Comment {
  author(where: UserWhereInput): User!
  text: String!
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
}

input CommentCreateManyInput {
  create: [CommentCreateInput!]
}

"""An edge in a connection."""
type CommentEdge {
  """The item at the end of the edge."""
  node: Comment!

  """A cursor for use in pagination."""
  cursor: String!
}

enum CommentOrderByInput {
  text_ASC
  text_DESC
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type CommentPreviousValues {
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
}

input CommentUpdateManyInput {
  create: [CommentCreateInput!]
}

input CommentWhereInput {
  """Logical AND on all given filters."""
  AND: [CommentWhereInput!]

  """Logical OR on all given filters."""
  OR: [CommentWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CommentWhereInput!]
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
  _MagicalBackRelation_CommentToPost_every: PostWhereInput
  _MagicalBackRelation_CommentToPost_some: PostWhereInput
  _MagicalBackRelation_CommentToPost_none: PostWhereInput
}

type Feed implements Node {
  id: ID!
  canPost(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  canView(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post!]
  group(where: GroupWhereInput): Group!
  name: String!
}

"""A connection to a list of items."""
type FeedConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [FeedEdge]!
  aggregate: AggregateFeed!
}

input FeedCreateInput {
  name: String!
  canPost: UserCreateManyWithoutFeedsCanPostInInput
  canView: UserCreateManyWithoutFeedsCanViewInput
  posts: PostCreateManyInput
  group: GroupCreateOneWithoutThreadsInput!
}

input FeedCreateManyWithoutCanPostInput {
  create: [FeedCreateWithoutCanPostInput!]
  connect: [FeedWhereUniqueInput!]
}

input FeedCreateManyWithoutCanViewInput {
  create: [FeedCreateWithoutCanViewInput!]
  connect: [FeedWhereUniqueInput!]
}

input FeedCreateManyWithoutGroupInput {
  create: [FeedCreateWithoutGroupInput!]
  connect: [FeedWhereUniqueInput!]
}

input FeedCreateWithoutCanPostInput {
  name: String!
  canView: UserCreateManyWithoutFeedsCanViewInput
  posts: PostCreateManyInput
  group: GroupCreateOneWithoutThreadsInput!
}

input FeedCreateWithoutCanViewInput {
  name: String!
  canPost: UserCreateManyWithoutFeedsCanPostInInput
  posts: PostCreateManyInput
  group: GroupCreateOneWithoutThreadsInput!
}

input FeedCreateWithoutGroupInput {
  name: String!
  canPost: UserCreateManyWithoutFeedsCanPostInInput
  canView: UserCreateManyWithoutFeedsCanViewInput
  posts: PostCreateManyInput
}

"""An edge in a connection."""
type FeedEdge {
  """The item at the end of the edge."""
  node: Feed!

  """A cursor for use in pagination."""
  cursor: String!
}

enum FeedOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type FeedPreviousValues {
  id: ID!
  name: String!
}

type FeedSubscriptionPayload {
  mutation: MutationType!
  node: Feed
  updatedFields: [String!]
  previousValues: FeedPreviousValues
}

input FeedSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [FeedSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [FeedSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [FeedSubscriptionWhereInput!]

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
  node: FeedWhereInput
}

input FeedUpdateInput {
  name: String
  canPost: UserUpdateManyWithoutFeedsCanPostInInput
  canView: UserUpdateManyWithoutFeedsCanViewInput
  posts: PostUpdateManyInput
  group: GroupUpdateOneWithoutThreadsInput
}

input FeedUpdateManyWithoutCanPostInput {
  create: [FeedCreateWithoutCanPostInput!]
  connect: [FeedWhereUniqueInput!]
  disconnect: [FeedWhereUniqueInput!]
  delete: [FeedWhereUniqueInput!]
  update: [FeedUpdateWithWhereUniqueWithoutCanPostInput!]
  upsert: [FeedUpsertWithWhereUniqueWithoutCanPostInput!]
}

input FeedUpdateManyWithoutCanViewInput {
  create: [FeedCreateWithoutCanViewInput!]
  connect: [FeedWhereUniqueInput!]
  disconnect: [FeedWhereUniqueInput!]
  delete: [FeedWhereUniqueInput!]
  update: [FeedUpdateWithWhereUniqueWithoutCanViewInput!]
  upsert: [FeedUpsertWithWhereUniqueWithoutCanViewInput!]
}

input FeedUpdateManyWithoutGroupInput {
  create: [FeedCreateWithoutGroupInput!]
  connect: [FeedWhereUniqueInput!]
  disconnect: [FeedWhereUniqueInput!]
  delete: [FeedWhereUniqueInput!]
  update: [FeedUpdateWithWhereUniqueWithoutGroupInput!]
  upsert: [FeedUpsertWithWhereUniqueWithoutGroupInput!]
}

input FeedUpdateWithoutCanPostDataInput {
  name: String
  canView: UserUpdateManyWithoutFeedsCanViewInput
  posts: PostUpdateManyInput
  group: GroupUpdateOneWithoutThreadsInput
}

input FeedUpdateWithoutCanViewDataInput {
  name: String
  canPost: UserUpdateManyWithoutFeedsCanPostInInput
  posts: PostUpdateManyInput
  group: GroupUpdateOneWithoutThreadsInput
}

input FeedUpdateWithoutGroupDataInput {
  name: String
  canPost: UserUpdateManyWithoutFeedsCanPostInInput
  canView: UserUpdateManyWithoutFeedsCanViewInput
  posts: PostUpdateManyInput
}

input FeedUpdateWithWhereUniqueWithoutCanPostInput {
  where: FeedWhereUniqueInput!
  data: FeedUpdateWithoutCanPostDataInput!
}

input FeedUpdateWithWhereUniqueWithoutCanViewInput {
  where: FeedWhereUniqueInput!
  data: FeedUpdateWithoutCanViewDataInput!
}

input FeedUpdateWithWhereUniqueWithoutGroupInput {
  where: FeedWhereUniqueInput!
  data: FeedUpdateWithoutGroupDataInput!
}

input FeedUpsertWithWhereUniqueWithoutCanPostInput {
  where: FeedWhereUniqueInput!
  update: FeedUpdateWithoutCanPostDataInput!
  create: FeedCreateWithoutCanPostInput!
}

input FeedUpsertWithWhereUniqueWithoutCanViewInput {
  where: FeedWhereUniqueInput!
  update: FeedUpdateWithoutCanViewDataInput!
  create: FeedCreateWithoutCanViewInput!
}

input FeedUpsertWithWhereUniqueWithoutGroupInput {
  where: FeedWhereUniqueInput!
  update: FeedUpdateWithoutGroupDataInput!
  create: FeedCreateWithoutGroupInput!
}

input FeedWhereInput {
  """Logical AND on all given filters."""
  AND: [FeedWhereInput!]

  """Logical OR on all given filters."""
  OR: [FeedWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [FeedWhereInput!]
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
  canPost_every: UserWhereInput
  canPost_some: UserWhereInput
  canPost_none: UserWhereInput
  canView_every: UserWhereInput
  canView_some: UserWhereInput
  canView_none: UserWhereInput
  posts_every: PostWhereInput
  posts_some: PostWhereInput
  posts_none: PostWhereInput
  group: GroupWhereInput
}

input FeedWhereUniqueInput {
  id: ID
}

type Group implements Node {
  id: ID!
  password: String!
  name: String!
  admins(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  members(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  threads(where: FeedWhereInput, orderBy: FeedOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Feed!]
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
  password: String!
  name: String!
  admins: UserCreateManyWithoutAdminOfInput
  members: UserCreateManyWithoutMemberOfInput
  threads: FeedCreateManyWithoutGroupInput
}

input GroupCreateManyWithoutAdminsInput {
  create: [GroupCreateWithoutAdminsInput!]
  connect: [GroupWhereUniqueInput!]
}

input GroupCreateManyWithoutMembersInput {
  create: [GroupCreateWithoutMembersInput!]
  connect: [GroupWhereUniqueInput!]
}

input GroupCreateOneWithoutThreadsInput {
  create: GroupCreateWithoutThreadsInput
  connect: GroupWhereUniqueInput
}

input GroupCreateWithoutAdminsInput {
  password: String!
  name: String!
  members: UserCreateManyWithoutMemberOfInput
  threads: FeedCreateManyWithoutGroupInput
}

input GroupCreateWithoutMembersInput {
  password: String!
  name: String!
  admins: UserCreateManyWithoutAdminOfInput
  threads: FeedCreateManyWithoutGroupInput
}

input GroupCreateWithoutThreadsInput {
  password: String!
  name: String!
  admins: UserCreateManyWithoutAdminOfInput
  members: UserCreateManyWithoutMemberOfInput
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
  password_ASC
  password_DESC
  name_ASC
  name_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type GroupPreviousValues {
  id: ID!
  password: String!
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
  password: String
  name: String
  admins: UserUpdateManyWithoutAdminOfInput
  members: UserUpdateManyWithoutMemberOfInput
  threads: FeedUpdateManyWithoutGroupInput
}

input GroupUpdateManyWithoutAdminsInput {
  create: [GroupCreateWithoutAdminsInput!]
  connect: [GroupWhereUniqueInput!]
  disconnect: [GroupWhereUniqueInput!]
  delete: [GroupWhereUniqueInput!]
  update: [GroupUpdateWithWhereUniqueWithoutAdminsInput!]
  upsert: [GroupUpsertWithWhereUniqueWithoutAdminsInput!]
}

input GroupUpdateManyWithoutMembersInput {
  create: [GroupCreateWithoutMembersInput!]
  connect: [GroupWhereUniqueInput!]
  disconnect: [GroupWhereUniqueInput!]
  delete: [GroupWhereUniqueInput!]
  update: [GroupUpdateWithWhereUniqueWithoutMembersInput!]
  upsert: [GroupUpsertWithWhereUniqueWithoutMembersInput!]
}

input GroupUpdateOneWithoutThreadsInput {
  create: GroupCreateWithoutThreadsInput
  connect: GroupWhereUniqueInput
  delete: Boolean
  update: GroupUpdateWithoutThreadsDataInput
  upsert: GroupUpsertWithoutThreadsInput
}

input GroupUpdateWithoutAdminsDataInput {
  password: String
  name: String
  members: UserUpdateManyWithoutMemberOfInput
  threads: FeedUpdateManyWithoutGroupInput
}

input GroupUpdateWithoutMembersDataInput {
  password: String
  name: String
  admins: UserUpdateManyWithoutAdminOfInput
  threads: FeedUpdateManyWithoutGroupInput
}

input GroupUpdateWithoutThreadsDataInput {
  password: String
  name: String
  admins: UserUpdateManyWithoutAdminOfInput
  members: UserUpdateManyWithoutMemberOfInput
}

input GroupUpdateWithWhereUniqueWithoutAdminsInput {
  where: GroupWhereUniqueInput!
  data: GroupUpdateWithoutAdminsDataInput!
}

input GroupUpdateWithWhereUniqueWithoutMembersInput {
  where: GroupWhereUniqueInput!
  data: GroupUpdateWithoutMembersDataInput!
}

input GroupUpsertWithoutThreadsInput {
  update: GroupUpdateWithoutThreadsDataInput!
  create: GroupCreateWithoutThreadsInput!
}

input GroupUpsertWithWhereUniqueWithoutAdminsInput {
  where: GroupWhereUniqueInput!
  update: GroupUpdateWithoutAdminsDataInput!
  create: GroupCreateWithoutAdminsInput!
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
  threads_every: FeedWhereInput
  threads_some: FeedWhereInput
  threads_none: FeedWhereInput
}

input GroupWhereUniqueInput {
  id: ID
  password: String
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createGroup(data: GroupCreateInput!): Group!
  createFeed(data: FeedCreateInput!): Feed!
  createPost(data: PostCreateInput!): Post!
  createUser(data: UserCreateInput!): User!
  createComment(data: CommentCreateInput!): Comment!
  updateGroup(data: GroupUpdateInput!, where: GroupWhereUniqueInput!): Group
  updateFeed(data: FeedUpdateInput!, where: FeedWhereUniqueInput!): Feed
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  deleteGroup(where: GroupWhereUniqueInput!): Group
  deleteFeed(where: FeedWhereUniqueInput!): Feed
  deleteUser(where: UserWhereUniqueInput!): User
  upsertGroup(where: GroupWhereUniqueInput!, create: GroupCreateInput!, update: GroupUpdateInput!): Group!
  upsertFeed(where: FeedWhereUniqueInput!, create: FeedCreateInput!, update: FeedUpdateInput!): Feed!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  updateManyGroups(data: GroupUpdateInput!, where: GroupWhereInput): BatchPayload!
  updateManyFeeds(data: FeedUpdateInput!, where: FeedWhereInput): BatchPayload!
  updateManyPosts(data: PostUpdateInput!, where: PostWhereInput): BatchPayload!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  updateManyComments(data: CommentUpdateInput!, where: CommentWhereInput): BatchPayload!
  deleteManyGroups(where: GroupWhereInput): BatchPayload!
  deleteManyFeeds(where: FeedWhereInput): BatchPayload!
  deleteManyPosts(where: PostWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyComments(where: CommentWhereInput): BatchPayload!
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

type Post {
  author(where: UserWhereInput): User!
  text: String!
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
  comments: CommentCreateManyInput
}

input PostCreateManyInput {
  create: [PostCreateInput!]
}

"""An edge in a connection."""
type PostEdge {
  """The item at the end of the edge."""
  node: Post!

  """A cursor for use in pagination."""
  cursor: String!
}

enum PostOrderByInput {
  text_ASC
  text_DESC
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type PostPreviousValues {
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
  comments: CommentUpdateManyInput
}

input PostUpdateManyInput {
  create: [PostCreateInput!]
}

input PostWhereInput {
  """Logical AND on all given filters."""
  AND: [PostWhereInput!]

  """Logical OR on all given filters."""
  OR: [PostWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PostWhereInput!]
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
  comments_every: CommentWhereInput
  comments_some: CommentWhereInput
  comments_none: CommentWhereInput
  _MagicalBackRelation_FeedToPost_every: FeedWhereInput
  _MagicalBackRelation_FeedToPost_some: FeedWhereInput
  _MagicalBackRelation_FeedToPost_none: FeedWhereInput
}

type Query {
  groups(where: GroupWhereInput, orderBy: GroupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Group]!
  feeds(where: FeedWhereInput, orderBy: FeedOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Feed]!
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post]!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  comments(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comment]!
  group(where: GroupWhereUniqueInput!): Group
  feed(where: FeedWhereUniqueInput!): Feed
  user(where: UserWhereUniqueInput!): User
  groupsConnection(where: GroupWhereInput, orderBy: GroupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GroupConnection!
  feedsConnection(where: FeedWhereInput, orderBy: FeedOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FeedConnection!
  postsConnection(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostConnection!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  commentsConnection(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CommentConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Subscription {
  group(where: GroupSubscriptionWhereInput): GroupSubscriptionPayload
  feed(where: FeedSubscriptionWhereInput): FeedSubscriptionPayload
  post(where: PostSubscriptionWhereInput): PostSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  comment(where: CommentSubscriptionWhereInput): CommentSubscriptionPayload
}

type User implements Node {
  id: ID!
  name: String!
  email: String
  username: String!
  password: String!
  feedsCanPostIn(where: FeedWhereInput, orderBy: FeedOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Feed!]
  feedsCanView(where: FeedWhereInput, orderBy: FeedOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Feed!]
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
  feedsCanPostIn: FeedCreateManyWithoutCanPostInput
  feedsCanView: FeedCreateManyWithoutCanViewInput
  adminOf: GroupCreateManyWithoutAdminsInput
  memberOf: GroupCreateManyWithoutMembersInput
}

input UserCreateManyWithoutAdminOfInput {
  create: [UserCreateWithoutAdminOfInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutFeedsCanPostInInput {
  create: [UserCreateWithoutFeedsCanPostInInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutFeedsCanViewInput {
  create: [UserCreateWithoutFeedsCanViewInput!]
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
  feedsCanPostIn: FeedCreateManyWithoutCanPostInput
  feedsCanView: FeedCreateManyWithoutCanViewInput
  memberOf: GroupCreateManyWithoutMembersInput
}

input UserCreateWithoutFeedsCanPostInInput {
  name: String!
  email: String
  username: String!
  password: String!
  feedsCanView: FeedCreateManyWithoutCanViewInput
  adminOf: GroupCreateManyWithoutAdminsInput
  memberOf: GroupCreateManyWithoutMembersInput
}

input UserCreateWithoutFeedsCanViewInput {
  name: String!
  email: String
  username: String!
  password: String!
  feedsCanPostIn: FeedCreateManyWithoutCanPostInput
  adminOf: GroupCreateManyWithoutAdminsInput
  memberOf: GroupCreateManyWithoutMembersInput
}

input UserCreateWithoutMemberOfInput {
  name: String!
  email: String
  username: String!
  password: String!
  feedsCanPostIn: FeedCreateManyWithoutCanPostInput
  feedsCanView: FeedCreateManyWithoutCanViewInput
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
  feedsCanPostIn: FeedUpdateManyWithoutCanPostInput
  feedsCanView: FeedUpdateManyWithoutCanViewInput
  adminOf: GroupUpdateManyWithoutAdminsInput
  memberOf: GroupUpdateManyWithoutMembersInput
}

input UserUpdateInput {
  name: String
  email: String
  username: String
  password: String
  feedsCanPostIn: FeedUpdateManyWithoutCanPostInput
  feedsCanView: FeedUpdateManyWithoutCanViewInput
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

input UserUpdateManyWithoutFeedsCanPostInInput {
  create: [UserCreateWithoutFeedsCanPostInInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  delete: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutFeedsCanPostInInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutFeedsCanPostInInput!]
}

input UserUpdateManyWithoutFeedsCanViewInput {
  create: [UserCreateWithoutFeedsCanViewInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  delete: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutFeedsCanViewInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutFeedsCanViewInput!]
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
  feedsCanPostIn: FeedUpdateManyWithoutCanPostInput
  feedsCanView: FeedUpdateManyWithoutCanViewInput
  memberOf: GroupUpdateManyWithoutMembersInput
}

input UserUpdateWithoutFeedsCanPostInDataInput {
  name: String
  email: String
  username: String
  password: String
  feedsCanView: FeedUpdateManyWithoutCanViewInput
  adminOf: GroupUpdateManyWithoutAdminsInput
  memberOf: GroupUpdateManyWithoutMembersInput
}

input UserUpdateWithoutFeedsCanViewDataInput {
  name: String
  email: String
  username: String
  password: String
  feedsCanPostIn: FeedUpdateManyWithoutCanPostInput
  adminOf: GroupUpdateManyWithoutAdminsInput
  memberOf: GroupUpdateManyWithoutMembersInput
}

input UserUpdateWithoutMemberOfDataInput {
  name: String
  email: String
  username: String
  password: String
  feedsCanPostIn: FeedUpdateManyWithoutCanPostInput
  feedsCanView: FeedUpdateManyWithoutCanViewInput
  adminOf: GroupUpdateManyWithoutAdminsInput
}

input UserUpdateWithWhereUniqueWithoutAdminOfInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutAdminOfDataInput!
}

input UserUpdateWithWhereUniqueWithoutFeedsCanPostInInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutFeedsCanPostInDataInput!
}

input UserUpdateWithWhereUniqueWithoutFeedsCanViewInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutFeedsCanViewDataInput!
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

input UserUpsertWithWhereUniqueWithoutFeedsCanPostInInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutFeedsCanPostInDataInput!
  create: UserCreateWithoutFeedsCanPostInInput!
}

input UserUpsertWithWhereUniqueWithoutFeedsCanViewInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutFeedsCanViewDataInput!
  create: UserCreateWithoutFeedsCanViewInput!
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
  feedsCanPostIn_every: FeedWhereInput
  feedsCanPostIn_some: FeedWhereInput
  feedsCanPostIn_none: FeedWhereInput
  feedsCanView_every: FeedWhereInput
  feedsCanView_some: FeedWhereInput
  feedsCanView_none: FeedWhereInput
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
  'password_ASC' |
  'password_DESC' |
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

export type FeedOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type PostOrderByInput =   'text_ASC' |
  'text_DESC' |
  'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type CommentOrderByInput =   'text_ASC' |
  'text_DESC' |
  'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export interface GroupUpdateInput {
  password?: String
  name?: String
  admins?: UserUpdateManyWithoutAdminOfInput
  members?: UserUpdateManyWithoutMemberOfInput
  threads?: FeedUpdateManyWithoutGroupInput
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
  threads_every?: FeedWhereInput
  threads_some?: FeedWhereInput
  threads_none?: FeedWhereInput
}

export interface UserCreateWithoutFeedsCanPostInInput {
  name: String
  email?: String
  username: String
  password: String
  feedsCanView?: FeedCreateManyWithoutCanViewInput
  adminOf?: GroupCreateManyWithoutAdminsInput
  memberOf?: GroupCreateManyWithoutMembersInput
}

export interface GroupUpsertWithWhereUniqueWithoutMembersInput {
  where: GroupWhereUniqueInput
  update: GroupUpdateWithoutMembersDataInput
  create: GroupCreateWithoutMembersInput
}

export interface GroupCreateManyWithoutMembersInput {
  create?: GroupCreateWithoutMembersInput[] | GroupCreateWithoutMembersInput
  connect?: GroupWhereUniqueInput[] | GroupWhereUniqueInput
}

export interface FeedUpdateManyWithoutCanPostInput {
  create?: FeedCreateWithoutCanPostInput[] | FeedCreateWithoutCanPostInput
  connect?: FeedWhereUniqueInput[] | FeedWhereUniqueInput
  disconnect?: FeedWhereUniqueInput[] | FeedWhereUniqueInput
  delete?: FeedWhereUniqueInput[] | FeedWhereUniqueInput
  update?: FeedUpdateWithWhereUniqueWithoutCanPostInput[] | FeedUpdateWithWhereUniqueWithoutCanPostInput
  upsert?: FeedUpsertWithWhereUniqueWithoutCanPostInput[] | FeedUpsertWithWhereUniqueWithoutCanPostInput
}

export interface GroupCreateWithoutMembersInput {
  password: String
  name: String
  admins?: UserCreateManyWithoutAdminOfInput
  threads?: FeedCreateManyWithoutGroupInput
}

export interface CommentWhereInput {
  AND?: CommentWhereInput[] | CommentWhereInput
  OR?: CommentWhereInput[] | CommentWhereInput
  NOT?: CommentWhereInput[] | CommentWhereInput
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
  _MagicalBackRelation_CommentToPost_every?: PostWhereInput
  _MagicalBackRelation_CommentToPost_some?: PostWhereInput
  _MagicalBackRelation_CommentToPost_none?: PostWhereInput
}

export interface FeedCreateManyWithoutGroupInput {
  create?: FeedCreateWithoutGroupInput[] | FeedCreateWithoutGroupInput
  connect?: FeedWhereUniqueInput[] | FeedWhereUniqueInput
}

export interface PostWhereInput {
  AND?: PostWhereInput[] | PostWhereInput
  OR?: PostWhereInput[] | PostWhereInput
  NOT?: PostWhereInput[] | PostWhereInput
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
  comments_every?: CommentWhereInput
  comments_some?: CommentWhereInput
  comments_none?: CommentWhereInput
  _MagicalBackRelation_FeedToPost_every?: FeedWhereInput
  _MagicalBackRelation_FeedToPost_some?: FeedWhereInput
  _MagicalBackRelation_FeedToPost_none?: FeedWhereInput
}

export interface FeedCreateWithoutGroupInput {
  name: String
  canPost?: UserCreateManyWithoutFeedsCanPostInInput
  canView?: UserCreateManyWithoutFeedsCanViewInput
  posts?: PostCreateManyInput
}

export interface FeedWhereInput {
  AND?: FeedWhereInput[] | FeedWhereInput
  OR?: FeedWhereInput[] | FeedWhereInput
  NOT?: FeedWhereInput[] | FeedWhereInput
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
  canPost_every?: UserWhereInput
  canPost_some?: UserWhereInput
  canPost_none?: UserWhereInput
  canView_every?: UserWhereInput
  canView_some?: UserWhereInput
  canView_none?: UserWhereInput
  posts_every?: PostWhereInput
  posts_some?: PostWhereInput
  posts_none?: PostWhereInput
  group?: GroupWhereInput
}

export interface PostCreateManyInput {
  create?: PostCreateInput[] | PostCreateInput
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
  feedsCanPostIn_every?: FeedWhereInput
  feedsCanPostIn_some?: FeedWhereInput
  feedsCanPostIn_none?: FeedWhereInput
  feedsCanView_every?: FeedWhereInput
  feedsCanView_some?: FeedWhereInput
  feedsCanView_none?: FeedWhereInput
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
  comments?: CommentCreateManyInput
}

export interface GroupWhereUniqueInput {
  id?: ID_Input
  password?: String
}

export interface UserCreateOneInput {
  create?: UserCreateInput
  connect?: UserWhereUniqueInput
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  email?: String
  username?: String
}

export interface UserCreateInput {
  name: String
  email?: String
  username: String
  password: String
  feedsCanPostIn?: FeedCreateManyWithoutCanPostInput
  feedsCanView?: FeedCreateManyWithoutCanViewInput
  adminOf?: GroupCreateManyWithoutAdminsInput
  memberOf?: GroupCreateManyWithoutMembersInput
}

export interface CommentUpdateInput {
  text?: String
  author?: UserUpdateOneInput
}

export interface CommentCreateManyInput {
  create?: CommentCreateInput[] | CommentCreateInput
}

export interface UserUpsertNestedInput {
  update: UserUpdateDataInput
  create: UserCreateInput
}

export interface CommentCreateInput {
  text: String
  author: UserCreateOneInput
}

export interface UserUpdateOneInput {
  create?: UserCreateInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateDataInput
  upsert?: UserUpsertNestedInput
}

export interface GroupCreateOneWithoutThreadsInput {
  create?: GroupCreateWithoutThreadsInput
  connect?: GroupWhereUniqueInput
}

export interface UserUpdateInput {
  name?: String
  email?: String
  username?: String
  password?: String
  feedsCanPostIn?: FeedUpdateManyWithoutCanPostInput
  feedsCanView?: FeedUpdateManyWithoutCanViewInput
  adminOf?: GroupUpdateManyWithoutAdminsInput
  memberOf?: GroupUpdateManyWithoutMembersInput
}

export interface GroupCreateWithoutThreadsInput {
  password: String
  name: String
  admins?: UserCreateManyWithoutAdminOfInput
  members?: UserCreateManyWithoutMemberOfInput
}

export interface UserUpsertWithWhereUniqueWithoutAdminOfInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutAdminOfDataInput
  create: UserCreateWithoutAdminOfInput
}

export interface FeedCreateInput {
  name: String
  canPost?: UserCreateManyWithoutFeedsCanPostInInput
  canView?: UserCreateManyWithoutFeedsCanViewInput
  posts?: PostCreateManyInput
  group: GroupCreateOneWithoutThreadsInput
}

export interface UserUpsertWithWhereUniqueWithoutFeedsCanViewInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutFeedsCanViewDataInput
  create: UserCreateWithoutFeedsCanViewInput
}

export interface GroupUpdateOneWithoutThreadsInput {
  create?: GroupCreateWithoutThreadsInput
  connect?: GroupWhereUniqueInput
  delete?: Boolean
  update?: GroupUpdateWithoutThreadsDataInput
  upsert?: GroupUpsertWithoutThreadsInput
}

export interface UserUpsertWithWhereUniqueWithoutMemberOfInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutMemberOfDataInput
  create: UserCreateWithoutMemberOfInput
}

export interface UserUpdateManyWithoutAdminOfInput {
  create?: UserCreateWithoutAdminOfInput[] | UserCreateWithoutAdminOfInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput
  update?: UserUpdateWithWhereUniqueWithoutAdminOfInput[] | UserUpdateWithWhereUniqueWithoutAdminOfInput
  upsert?: UserUpsertWithWhereUniqueWithoutAdminOfInput[] | UserUpsertWithWhereUniqueWithoutAdminOfInput
}

export interface GroupUpsertWithoutThreadsInput {
  update: GroupUpdateWithoutThreadsDataInput
  create: GroupCreateWithoutThreadsInput
}

export interface UserUpdateWithWhereUniqueWithoutAdminOfInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutAdminOfDataInput
}

export interface GroupCreateInput {
  password: String
  name: String
  admins?: UserCreateManyWithoutAdminOfInput
  members?: UserCreateManyWithoutMemberOfInput
  threads?: FeedCreateManyWithoutGroupInput
}

export interface UserUpdateWithoutAdminOfDataInput {
  name?: String
  email?: String
  username?: String
  password?: String
  feedsCanPostIn?: FeedUpdateManyWithoutCanPostInput
  feedsCanView?: FeedUpdateManyWithoutCanViewInput
  memberOf?: GroupUpdateManyWithoutMembersInput
}

export interface UserCreateWithoutAdminOfInput {
  name: String
  email?: String
  username: String
  password: String
  feedsCanPostIn?: FeedCreateManyWithoutCanPostInput
  feedsCanView?: FeedCreateManyWithoutCanViewInput
  memberOf?: GroupCreateManyWithoutMembersInput
}

export interface UserUpsertWithWhereUniqueWithoutFeedsCanPostInInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutFeedsCanPostInDataInput
  create: UserCreateWithoutFeedsCanPostInInput
}

export interface FeedCreateWithoutCanPostInput {
  name: String
  canView?: UserCreateManyWithoutFeedsCanViewInput
  posts?: PostCreateManyInput
  group: GroupCreateOneWithoutThreadsInput
}

export interface FeedUpdateWithWhereUniqueWithoutCanPostInput {
  where: FeedWhereUniqueInput
  data: FeedUpdateWithoutCanPostDataInput
}

export interface UserCreateWithoutFeedsCanViewInput {
  name: String
  email?: String
  username: String
  password: String
  feedsCanPostIn?: FeedCreateManyWithoutCanPostInput
  adminOf?: GroupCreateManyWithoutAdminsInput
  memberOf?: GroupCreateManyWithoutMembersInput
}

export interface FeedUpdateWithoutCanPostDataInput {
  name?: String
  canView?: UserUpdateManyWithoutFeedsCanViewInput
  posts?: PostUpdateManyInput
  group?: GroupUpdateOneWithoutThreadsInput
}

export interface GroupCreateWithoutAdminsInput {
  password: String
  name: String
  members?: UserCreateManyWithoutMemberOfInput
  threads?: FeedCreateManyWithoutGroupInput
}

export interface UserUpdateManyWithoutFeedsCanViewInput {
  create?: UserCreateWithoutFeedsCanViewInput[] | UserCreateWithoutFeedsCanViewInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput
  update?: UserUpdateWithWhereUniqueWithoutFeedsCanViewInput[] | UserUpdateWithWhereUniqueWithoutFeedsCanViewInput
  upsert?: UserUpsertWithWhereUniqueWithoutFeedsCanViewInput[] | UserUpsertWithWhereUniqueWithoutFeedsCanViewInput
}

export interface UserCreateWithoutMemberOfInput {
  name: String
  email?: String
  username: String
  password: String
  feedsCanPostIn?: FeedCreateManyWithoutCanPostInput
  feedsCanView?: FeedCreateManyWithoutCanViewInput
  adminOf?: GroupCreateManyWithoutAdminsInput
}

export interface UserUpdateWithWhereUniqueWithoutFeedsCanViewInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutFeedsCanViewDataInput
}

export interface FeedCreateWithoutCanViewInput {
  name: String
  canPost?: UserCreateManyWithoutFeedsCanPostInInput
  posts?: PostCreateManyInput
  group: GroupCreateOneWithoutThreadsInput
}

export interface UserUpdateWithoutFeedsCanViewDataInput {
  name?: String
  email?: String
  username?: String
  password?: String
  feedsCanPostIn?: FeedUpdateManyWithoutCanPostInput
  adminOf?: GroupUpdateManyWithoutAdminsInput
  memberOf?: GroupUpdateManyWithoutMembersInput
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

export interface GroupUpdateManyWithoutAdminsInput {
  create?: GroupCreateWithoutAdminsInput[] | GroupCreateWithoutAdminsInput
  connect?: GroupWhereUniqueInput[] | GroupWhereUniqueInput
  disconnect?: GroupWhereUniqueInput[] | GroupWhereUniqueInput
  delete?: GroupWhereUniqueInput[] | GroupWhereUniqueInput
  update?: GroupUpdateWithWhereUniqueWithoutAdminsInput[] | GroupUpdateWithWhereUniqueWithoutAdminsInput
  upsert?: GroupUpsertWithWhereUniqueWithoutAdminsInput[] | GroupUpsertWithWhereUniqueWithoutAdminsInput
}

export interface FeedSubscriptionWhereInput {
  AND?: FeedSubscriptionWhereInput[] | FeedSubscriptionWhereInput
  OR?: FeedSubscriptionWhereInput[] | FeedSubscriptionWhereInput
  NOT?: FeedSubscriptionWhereInput[] | FeedSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: FeedWhereInput
}

export interface GroupUpdateWithWhereUniqueWithoutAdminsInput {
  where: GroupWhereUniqueInput
  data: GroupUpdateWithoutAdminsDataInput
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

export interface GroupUpdateWithoutAdminsDataInput {
  password?: String
  name?: String
  members?: UserUpdateManyWithoutMemberOfInput
  threads?: FeedUpdateManyWithoutGroupInput
}

export interface UserUpdateDataInput {
  name?: String
  email?: String
  username?: String
  password?: String
  feedsCanPostIn?: FeedUpdateManyWithoutCanPostInput
  feedsCanView?: FeedUpdateManyWithoutCanViewInput
  adminOf?: GroupUpdateManyWithoutAdminsInput
  memberOf?: GroupUpdateManyWithoutMembersInput
}

export interface UserUpdateManyWithoutMemberOfInput {
  create?: UserCreateWithoutMemberOfInput[] | UserCreateWithoutMemberOfInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput
  update?: UserUpdateWithWhereUniqueWithoutMemberOfInput[] | UserUpdateWithWhereUniqueWithoutMemberOfInput
  upsert?: UserUpsertWithWhereUniqueWithoutMemberOfInput[] | UserUpsertWithWhereUniqueWithoutMemberOfInput
}

export interface FeedUpdateInput {
  name?: String
  canPost?: UserUpdateManyWithoutFeedsCanPostInInput
  canView?: UserUpdateManyWithoutFeedsCanViewInput
  posts?: PostUpdateManyInput
  group?: GroupUpdateOneWithoutThreadsInput
}

export interface UserUpdateWithWhereUniqueWithoutMemberOfInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutMemberOfDataInput
}

export interface GroupUpsertWithWhereUniqueWithoutAdminsInput {
  where: GroupWhereUniqueInput
  update: GroupUpdateWithoutAdminsDataInput
  create: GroupCreateWithoutAdminsInput
}

export interface UserUpdateWithoutMemberOfDataInput {
  name?: String
  email?: String
  username?: String
  password?: String
  feedsCanPostIn?: FeedUpdateManyWithoutCanPostInput
  feedsCanView?: FeedUpdateManyWithoutCanViewInput
  adminOf?: GroupUpdateManyWithoutAdminsInput
}

export interface GroupUpdateWithoutThreadsDataInput {
  password?: String
  name?: String
  admins?: UserUpdateManyWithoutAdminOfInput
  members?: UserUpdateManyWithoutMemberOfInput
}

export interface FeedUpdateManyWithoutCanViewInput {
  create?: FeedCreateWithoutCanViewInput[] | FeedCreateWithoutCanViewInput
  connect?: FeedWhereUniqueInput[] | FeedWhereUniqueInput
  disconnect?: FeedWhereUniqueInput[] | FeedWhereUniqueInput
  delete?: FeedWhereUniqueInput[] | FeedWhereUniqueInput
  update?: FeedUpdateWithWhereUniqueWithoutCanViewInput[] | FeedUpdateWithWhereUniqueWithoutCanViewInput
  upsert?: FeedUpsertWithWhereUniqueWithoutCanViewInput[] | FeedUpsertWithWhereUniqueWithoutCanViewInput
}

export interface FeedCreateManyWithoutCanPostInput {
  create?: FeedCreateWithoutCanPostInput[] | FeedCreateWithoutCanPostInput
  connect?: FeedWhereUniqueInput[] | FeedWhereUniqueInput
}

export interface FeedUpdateWithWhereUniqueWithoutCanViewInput {
  where: FeedWhereUniqueInput
  data: FeedUpdateWithoutCanViewDataInput
}

export interface GroupCreateManyWithoutAdminsInput {
  create?: GroupCreateWithoutAdminsInput[] | GroupCreateWithoutAdminsInput
  connect?: GroupWhereUniqueInput[] | GroupWhereUniqueInput
}

export interface FeedUpdateWithoutCanViewDataInput {
  name?: String
  canPost?: UserUpdateManyWithoutFeedsCanPostInInput
  posts?: PostUpdateManyInput
  group?: GroupUpdateOneWithoutThreadsInput
}

export interface FeedCreateManyWithoutCanViewInput {
  create?: FeedCreateWithoutCanViewInput[] | FeedCreateWithoutCanViewInput
  connect?: FeedWhereUniqueInput[] | FeedWhereUniqueInput
}

export interface UserUpdateManyWithoutFeedsCanPostInInput {
  create?: UserCreateWithoutFeedsCanPostInInput[] | UserCreateWithoutFeedsCanPostInInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput
  update?: UserUpdateWithWhereUniqueWithoutFeedsCanPostInInput[] | UserUpdateWithWhereUniqueWithoutFeedsCanPostInInput
  upsert?: UserUpsertWithWhereUniqueWithoutFeedsCanPostInInput[] | UserUpsertWithWhereUniqueWithoutFeedsCanPostInInput
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

export interface UserUpdateWithWhereUniqueWithoutFeedsCanPostInInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutFeedsCanPostInDataInput
}

export interface FeedWhereUniqueInput {
  id?: ID_Input
}

export interface UserUpdateWithoutFeedsCanPostInDataInput {
  name?: String
  email?: String
  username?: String
  password?: String
  feedsCanView?: FeedUpdateManyWithoutCanViewInput
  adminOf?: GroupUpdateManyWithoutAdminsInput
  memberOf?: GroupUpdateManyWithoutMembersInput
}

export interface PostUpdateInput {
  text?: String
  author?: UserUpdateOneInput
  comments?: CommentUpdateManyInput
}

export interface GroupUpdateManyWithoutMembersInput {
  create?: GroupCreateWithoutMembersInput[] | GroupCreateWithoutMembersInput
  connect?: GroupWhereUniqueInput[] | GroupWhereUniqueInput
  disconnect?: GroupWhereUniqueInput[] | GroupWhereUniqueInput
  delete?: GroupWhereUniqueInput[] | GroupWhereUniqueInput
  update?: GroupUpdateWithWhereUniqueWithoutMembersInput[] | GroupUpdateWithWhereUniqueWithoutMembersInput
  upsert?: GroupUpsertWithWhereUniqueWithoutMembersInput[] | GroupUpsertWithWhereUniqueWithoutMembersInput
}

export interface FeedUpsertWithWhereUniqueWithoutCanViewInput {
  where: FeedWhereUniqueInput
  update: FeedUpdateWithoutCanViewDataInput
  create: FeedCreateWithoutCanViewInput
}

export interface GroupUpdateWithWhereUniqueWithoutMembersInput {
  where: GroupWhereUniqueInput
  data: GroupUpdateWithoutMembersDataInput
}

export interface UserCreateManyWithoutFeedsCanViewInput {
  create?: UserCreateWithoutFeedsCanViewInput[] | UserCreateWithoutFeedsCanViewInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
}

export interface GroupUpdateWithoutMembersDataInput {
  password?: String
  name?: String
  admins?: UserUpdateManyWithoutAdminOfInput
  threads?: FeedUpdateManyWithoutGroupInput
}

export interface UserCreateManyWithoutFeedsCanPostInInput {
  create?: UserCreateWithoutFeedsCanPostInInput[] | UserCreateWithoutFeedsCanPostInInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
}

export interface FeedUpdateManyWithoutGroupInput {
  create?: FeedCreateWithoutGroupInput[] | FeedCreateWithoutGroupInput
  connect?: FeedWhereUniqueInput[] | FeedWhereUniqueInput
  disconnect?: FeedWhereUniqueInput[] | FeedWhereUniqueInput
  delete?: FeedWhereUniqueInput[] | FeedWhereUniqueInput
  update?: FeedUpdateWithWhereUniqueWithoutGroupInput[] | FeedUpdateWithWhereUniqueWithoutGroupInput
  upsert?: FeedUpsertWithWhereUniqueWithoutGroupInput[] | FeedUpsertWithWhereUniqueWithoutGroupInput
}

export interface CommentUpdateManyInput {
  create?: CommentCreateInput[] | CommentCreateInput
}

export interface FeedUpsertWithWhereUniqueWithoutGroupInput {
  where: FeedWhereUniqueInput
  update: FeedUpdateWithoutGroupDataInput
  create: FeedCreateWithoutGroupInput
}

export interface PostUpdateManyInput {
  create?: PostCreateInput[] | PostCreateInput
}

export interface FeedUpdateWithoutGroupDataInput {
  name?: String
  canPost?: UserUpdateManyWithoutFeedsCanPostInInput
  canView?: UserUpdateManyWithoutFeedsCanViewInput
  posts?: PostUpdateManyInput
}

export interface FeedUpdateWithWhereUniqueWithoutGroupInput {
  where: FeedWhereUniqueInput
  data: FeedUpdateWithoutGroupDataInput
}

export interface FeedUpsertWithWhereUniqueWithoutCanPostInput {
  where: FeedWhereUniqueInput
  update: FeedUpdateWithoutCanPostDataInput
  create: FeedCreateWithoutCanPostInput
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

export interface UserCreateManyWithoutMemberOfInput {
  create?: UserCreateWithoutMemberOfInput[] | UserCreateWithoutMemberOfInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
}

export interface UserCreateManyWithoutAdminOfInput {
  create?: UserCreateWithoutAdminOfInput[] | UserCreateWithoutAdminOfInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface CommentPreviousValues {
  text: String
}

export interface AggregateGroup {
  count: Int
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
export interface GroupEdge {
  node: Group
  cursor: String
}

export interface Group extends Node {
  id: ID_Output
  password: String
  name: String
  admins?: User[]
  members?: User[]
  threads?: Feed[]
}

export interface User extends Node {
  id: ID_Output
  name: String
  email?: String
  username: String
  password: String
  feedsCanPostIn?: Feed[]
  feedsCanView?: Feed[]
  adminOf?: Group[]
  memberOf?: Group[]
}

/*
 * An edge in a connection.

 */
export interface CommentEdge {
  node: Comment
  cursor: String
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

export interface AggregateUser {
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
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

export interface UserPreviousValues {
  id: ID_Output
  name: String
  email?: String
  username: String
  password: String
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

export interface AggregateFeed {
  count: Int
}

export interface GroupPreviousValues {
  id: ID_Output
  password: String
  name: String
}

export interface CommentSubscriptionPayload {
  mutation: MutationType
  node?: Comment
  updatedFields?: String[]
  previousValues?: CommentPreviousValues
}

export interface Comment {
  author: User
  text: String
}

/*
 * A connection to a list of items.

 */
export interface FeedConnection {
  pageInfo: PageInfo
  edges: FeedEdge[]
  aggregate: AggregateFeed
}

export interface FeedSubscriptionPayload {
  mutation: MutationType
  node?: Feed
  updatedFields?: String[]
  previousValues?: FeedPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface CommentConnection {
  pageInfo: PageInfo
  edges: CommentEdge[]
  aggregate: AggregateComment
}

export interface FeedPreviousValues {
  id: ID_Output
  name: String
}

export interface AggregatePost {
  count: Int
}

export interface BatchPayload {
  count: Long
}

export interface Feed extends Node {
  id: ID_Output
  canPost?: User[]
  canView?: User[]
  posts?: Post[]
  group: Group
  name: String
}

export interface PostPreviousValues {
  text: String
}

export interface PostSubscriptionPayload {
  mutation: MutationType
  node?: Post
  updatedFields?: String[]
  previousValues?: PostPreviousValues
}

export interface Post {
  author: User
  text: String
  comments?: Comment[]
}

/*
 * An edge in a connection.

 */
export interface FeedEdge {
  node: Feed
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
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string