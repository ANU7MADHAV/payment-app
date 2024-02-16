import { atom } from "recoil";

type CurrenUser = {
  firstName: string;
  lastName: string;
  userName: string;
};

export const currentUserDataSate = atom<CurrenUser>({
  key: "currentUserDataSate",
  default: {
    firstName: "",
    lastName: "",
    userName: "",
  },
});
