import { Context, getUserId } from "../../utils"

export const group = {
  async createGroup(parent, args, ctx: Context, info) {
    // const id = getUserId(ctx)
    // const user = await ctx.db.query.user({ where: { id } }, info)
    //FIX WITH THE: localStorage.getItem("username")

    let allUsers = new Array<any>(args.admins.length + args.members.length + 1)
    let uniqueAdminInput = new Array<any>(args.admins.length + 1)
    let count = 1

    uniqueAdminInput[0] = { username: args.username }
    allUsers[0] = { username: args.username }
    args.admins.forEach(element => {
      uniqueAdminInput[count] = { username: element }
      allUsers[count] = { username: element }
      count++
    })

    let uniqueMemberInput = new Array<any>(args.members.length)
    let inc = 0

    args.members.forEach(element => {
      uniqueMemberInput[inc] = { username: element }
      allUsers[count] = { username: element }
      count++
      inc++
    })

    return await ctx.db.mutation.createGroup(
      {
        data: {
          name: args.name,
          // admins: args.admins,
          // members: args.members
          admins: {
            connect: uniqueAdminInput
          },
          members: {
            connect: uniqueMemberInput
          },
          allUsers: {
            connect: allUsers
          }
        }
      },
      info
    )
  },

  async createPost(parent, args, ctx: Context, info) {
    const id = getUserId(ctx)
    return await ctx.db.mutation.createPost(
      {
        data: {
          author: {
            connect: {
              id: id
            }
          },
          text: args.text,
          group: {
            connect: {
              id: args.group
            }
          }
        }
      },
      info
    )
  },

  async createComment(parent, args, ctx: Context, info) {
    const id = getUserId(ctx)
    return await ctx.db.mutation.createComment(
      {
        data: {
          author: {
            connect: {
              id: id
            }
          },
          text: args.text,
          post: {
            connect: {
              id: args.post
            }
          }
        }
      },
      info
    )
  }
}
