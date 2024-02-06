import { atom } from "recoil";

export type Users = {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
};

export const usersListAtoms = atom({
  key: "usersListState",
  default: <Users[]>[],
});
