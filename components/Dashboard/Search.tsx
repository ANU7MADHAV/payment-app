"use client";

import { Users, usersListAtoms } from "@/src/atoms/userListAtom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

const Search = () => {
  const [searchQuery, setSeachQuery] = useState("");
  const [users, setUsers] = useRecoilState<Users[]>(usersListAtoms);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.post("/api/users", { data: searchQuery });
        const data = await res.data;
        setUsers(res.data.users);
      } catch (error) {
        console.log("something wrong", error);
      }
    };
    fetchUsers();
  }, [searchQuery]);
  console.log(searchQuery);
  return (
    <>
      <div className="mx-5">
        <input
          type="text"
          placeholder="search users"
          className="w-full rounded-md border border-blue-400 px-4"
          onChange={(e) => setSeachQuery(e.target.value)}
        />
      </div>
    </>
  );
};

export default Search;
