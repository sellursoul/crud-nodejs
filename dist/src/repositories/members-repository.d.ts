export declare const membersRepository: {
    findMembers(title: string | null): {
        id: string;
        title: string;
        age: string;
    }[];
    createMember(title: string): {
        id: string;
        title: string;
        age: string;
    }[];
    getMemberById(id: string): {
        id: string;
        title: string;
        age: string;
    } | undefined;
    updateMember(id: string, title: string): boolean;
    deleteMember(id: string): {
        id: string;
        title: string;
        age: string;
    } | undefined;
};
