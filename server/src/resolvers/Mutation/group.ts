import { Context, getUserId } from "../../utils"

export const group = {
  async createGroup(parent, args, ctx: Context, info) {
    // const id = getUserId(ctx)
    // const user = await ctx.db.query.user({ where: { id } }, info)
    //FIX WITH THE: localStorage.getItem("username")

    let uniqueAdminInput = new Array<any>(args.admins.length)
    let count = 0

    args.admins.forEach(element => {
      uniqueAdminInput[count] = { username: element }
      count++
    })

    let uniqueMemberInput = new Array<any>(args.members.length)
    let inc = 0

    args.members.forEach(element => {
      uniqueMemberInput[inc] = { username: element }
      inc++
    })

    return await ctx.db.mutation.createGroup(
      {
        data: {
          name: args.name,
          password: args.password,
          // admins: args.admins,
          // members: args.members
          admins: {
            connect: uniqueAdminInput
          },
          members: {
            connect: uniqueMemberInput
          }
        }
      },
      info
    )
  },

  async createFeed(parent, args, ctx: Context, info) {
    const group = await ctx.db.query.group({
      where: { password: args.group }
    })

    const ads = await ctx.db.query.users({
      where: { adminOf_some: { password: args.group } }
    })

    const mems = await ctx.db.query.users({
      where: { memberOf_some: { password: args.group } }
    })

    let uniqueAdminInput = new Array<any>(ads.length)
    let uniqueMemberInput = new Array<any>(mems.length + ads.length)
    let inc = 0

    ads.forEach(element => {
      uniqueAdminInput[inc] = { username: element.username }
      uniqueMemberInput[inc] = { username: element.username }
      inc++
    })

    mems.forEach(element => {
      uniqueMemberInput[inc] = { username: element.username }
      inc++
    })

    return await ctx.db.mutation.createFeed({
      data: {
        group: {
          connect: {
            //group identifier password
            password: group.password
          }
        },
        name: args.name,
        canPost: {
          connect: uniqueAdminInput
        },
        canView: {
          connect: uniqueMemberInput
        }
      }
    })
  }
}
