import { atom } from "recoil";

type ToUser = {
  message: string;
  firstName: string;
  username: string;
};

export const friendDataSate = atom<ToUser>({
  key: "friendDataState",
  default: {
    message: "",
    firstName: "",
    username: "",
  },
});
