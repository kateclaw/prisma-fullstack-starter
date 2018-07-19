import { extractFragmentReplacements } from "prisma-binding"
import Query from "./Query"
import { auth } from "./Mutation/auth"
import { group } from "./Mutation/group"
import { AuthPayload } from "./AuthPayload"
import { addMembers } from "./Mutation/addMembers"

export const resolvers = {
  Query,
  Mutation: {
    ...auth,
    ...group,
    ...addMembers
  },
  AuthPayload
}

export const fragmentReplacements = extractFragmentReplacements(resolvers)
