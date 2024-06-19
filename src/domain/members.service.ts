import { membersRepository } from "../repositories/members-repository";

export const membersService = {
  async findMembers(title: string | null) {
    return membersRepository.findMembers(title);
  },
  async createMember(data: any) {
    return membersRepository.createMember(data);
  },
  async getMemberById(id: string) {
    return membersRepository.getMemberById(id);
  },
  async updateMember(id: string, data: any) {
    return membersRepository.updateMember(id, data);
  },
  async deleteMember(id: string) {
    return membersRepository.deleteMember(id);
  },
};
