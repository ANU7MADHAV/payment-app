"use client";

import { user } from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";

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

  return <div>{user ? user.firstName : "user"}</div>;
};

export default User;
