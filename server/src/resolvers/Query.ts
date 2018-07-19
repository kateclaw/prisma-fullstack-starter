import { Context, getUserId } from "../utils"
import { Group, User } from "../generated/prisma"

let flag: boolean

export default {
  async me(parent, args, ctx: Context, info) {
    const id = getUserId(ctx)
    return await ctx.db.query.user({ where: { id } }, info)
  },

  async postsForGroup(parent, args, ctx: Context, info) {
    return await ctx.db.query.posts(
      {
        orderBy: "createdAt_DESC",
        where: { group: { id: args.group } }
      },
      info
    )
  },

  async adminsForGroup(parent, args, ctx: Context, info) {
    return await ctx.db.query.users(
      { where: { adminOf_some: { id: args.group } } },
      info
    )
  },

  async nonAdminsForGroup(parent, args, ctx: Context, info) {
    return await ctx.db.query.users(
      { where: { memberOf_some: { id: args.group } } },
      info
    )
  },

  async allMembersForGroup(parent, args, ctx: Context, info) {
    return await ctx.db.query.users(
      {
        where: {
          groups_some: { id: args.group }
        }
      },
      info
    )
  },

  async userCanPost(parent, args, ctx: Context, info) {
    const group = await ctx.db.query.group(
      { where: { id: args.group } },
      `{ admins{
        username
      } }`
    )

    flag = false
    group.admins.forEach(element => {
      if (element.username == args.username) {
        flag = true
        console.log(flag)
      }
    })
    return flag
  }
}
