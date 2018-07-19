import { Context } from "../../utils"

export const addMembers = {
  async addMember(parent, args, ctx: Context, info) {
    const newMem = { username: args.username }
    const curMems = await ctx.db.query.group(
      { where: { id: args.group } },
      `{ 
        members{
          username
      }
        allUsers{
          username
      }
     }`
    )

    const updatedAllUsers = [newMem, ...curMems.allUsers]
    const updatedMems = [newMem, ...curMems.members]

    return await ctx.db.mutation.updateGroup(
      {
        where: { id: args.group },
        data: {
          members: { connect: updatedMems },
          allUsers: { connect: updatedAllUsers }
        }
      },
      info
    )
  },

  async addNewAdmin(parent, args, ctx: Context, info) {
    const newAd = { username: args.username }
    const curAds = await ctx.db.query.group(
      { where: { id: args.group } },
      `{ 
        admins{
          username
      }
        allUsers{
          username
      }
     }`
    )

    const updatedAllUsers = [newAd, ...curAds.allUsers]
    const updatedAds = [newAd, ...curAds.admins]

    return await ctx.db.mutation.updateGroup(
      {
        where: { id: args.group },
        data: {
          admins: { connect: updatedAds },
          allUsers: { connect: updatedAllUsers }
        }
      },
      info
    )
  }

  // async removeMember(parent, args, ctx: Context, info){

  // }
}
