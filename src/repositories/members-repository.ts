import { MemberModel } from "../models/member-view.model";

export const membersRepository = {
  async findMembers(name: string | null) {
    let query: any = {};
    if (name) {
      query.title = { $regex: name, $options: "i" };
    }
    const foundMembers = await MemberModel.aggregate([
      { $match: query },
      {
        $lookup: {
          from: "cars",
          localField: "_id",
          foreignField: "owner",
          as: "cars",
        },
      },
    ]);

    return foundMembers;
  },
  async createMember(data: any) {
    const newMember = await MemberModel.create(data);
    return newMember;
  },
  async getMemberById(id: string) {
    const foundMember = await MemberModel.findById(id);
    return foundMember;
  },
  async updateMember(id: string, data: any) {
    try {
      const updatedMember = await MemberModel.findByIdAndUpdate(id, {
        $set: { name: data.name, age: data.age },
      });

      return !!updatedMember;
    } catch (error) {
      console.log(error);
    }
  },
  async deleteMember(id: string) {
    const deletedMember = await MemberModel.findByIdAndDelete(id);

    return deletedMember;
  },
};
