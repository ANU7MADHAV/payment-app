import { friendDataSate } from "@/atoms/friendDataAtom";
import React from "react";
import { useRecoilState } from "recoil";

const FriendDetails = () => {
  const [toUser, setToUser] = useRecoilState(friendDataSate);
  return (
    <>
      <h1 className="text-xl font-bold">
        {toUser ? toUser.firstName.toLocaleUpperCase() : "Friend's Name"}
      </h1>

      <p>{toUser ? toUser.username : "Friend's Username"}</p>
    </>
  );
};

export default FriendDetails;
