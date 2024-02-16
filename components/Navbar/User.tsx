"use client";

import { user } from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";
import AvatarIcon from "../Avatar";

type CurrenUser = {
  firstName: string;
  lastName: string;
  userName: string;
};

const User = () => {
  const [user, setUser] = useState<CurrenUser>();
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get("/api/users");
        const data = await res.data;
        const { currentUser } = data;
        setUser(currentUser);
      } catch (error) {
        console.log(error, "something wrong");
      }
    };
    getUser();
  }, []);
  const nameFirstLetter = user ? user.firstName.charAt(0) : "U";
  return (
    <div className="flex items-center justify-around dark:to-blue-400">
      <AvatarIcon>{nameFirstLetter}</AvatarIcon>
      <h1 className="font-medium dark:text-white">
        {user ? user.firstName : "user"}
      </h1>
    </div>
  );
};

export default User;
