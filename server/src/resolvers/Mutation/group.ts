import { Context, getUserId } from "../../utils"

export const group = {
  async createGroup(parent, args, ctx: Context, info) {
    // const id = getUserId(ctx)
    // const user = await ctx.db.query.user({ where: { id } }, info)
    //FIX WITH THE: localStorage.getItem("username")
    let uniqueAdminInput
    let uniqueMemberInput
    let allUsers
    let lengthAdds
    let lengthMems
    if (!args.admins) {
      // uniqueAdminInput = [{ username: args.username }]
      lengthAdds = 0
      if (!args.members) {
        // allUsers = [{ username: args.username }]
      }
    }

    if (!args.members) {
      lengthMems = 0
    }

    if (args.members || args.admins) {
      if (args.admins) {
        console.log("length admins: " + args.admins.length)
        lengthAdds = args.admins.length
        console.log("length ads: " + lengthAdds)
      }
      if (args.members) {
        lengthMems = args.members.length
        console.log("length mems: " + lengthMems)
      }

      let count = 1

      allUsers = new Array<any>(lengthAdds + lengthMems + 1)
      if (args.admins) {
        uniqueAdminInput = new Array<any>(lengthAdds + 1)
        uniqueAdminInput[0] = { username: args.username }

        args.admins.forEach(element => {
          console.log(element)
          uniqueAdminInput[count] = { username: element }
          allUsers[count] = { username: element }
          count++
        })
      }

      if (args.members) {
        uniqueMemberInput = new Array<any>(lengthMems)
        allUsers[0] = { username: args.username }

        let inc = 0
        args.members.forEach(element => {
          console.log(element)
          uniqueMemberInput[inc] = { username: element }
          allUsers[count] = { username: element }
          count++
          inc++
        })
      }
    }

    if (!args.members || !args.admins) {
      uniqueAdminInput = new Array<any>(lengthAdds + 1)
      uniqueAdminInput[0] = { username: args.username }
    }

    if (args.admins && !args.members) {
      uniqueAdminInput = new Array<any>(lengthAdds + 1)
      uniqueAdminInput[0] = { username: args.username }

      allUsers = new Array<any>(lengthAdds + 1)
      allUsers[0] = { username: args.username }

      let count = 1

      args.admins.forEach(element => {
        console.log(element)
        uniqueAdminInput[count] = { username: element }
        allUsers[count] = { username: element }
        count++
      })
    }

    if (!args.members && !args.admins) {
      allUsers = new Array<any>(1)
      allUsers[0] = { username: args.username }
    }

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
