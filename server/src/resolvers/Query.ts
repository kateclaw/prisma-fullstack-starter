import { Context, getUserId } from "../utils"

export default {
  me(parent, args, ctx: Context, info) {
    const id = getUserId(ctx)
    return ctx.db.query.user({ where: { id } }, info)
  },

  postsForGroup(parent, args, ctx: Context, info) {
    return ctx.db.query.posts(
      {
        orderBy: "createdAt_DESC",
        where: { group: { id: args.group } }
      },
      info
    )
  }
}
