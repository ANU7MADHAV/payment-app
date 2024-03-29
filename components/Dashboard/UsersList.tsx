"use client";

import { currentUserDataSate } from "@/atoms/currentUserData";
import { usersListAtoms } from "@/src/atoms/userListAtom";
import Link from "next/link";
import { useRecoilState, useRecoilValue } from "recoil";
import AvatarIcon from "../Avatar";

const UsersList = () => {
  const [users, setUsers] = useRecoilState(usersListAtoms);
  const currentUser = useRecoilValue(currentUserDataSate);

  const actualUsers = users.filter(
    (user) => user.username !== currentUser.userName,
  );

  return (
    <div className="px-6 text-lg font-medium">
      <ul>
        {actualUsers.map((user, index) => (
          <li key={user.id}>
            <div className="my-4 flex flex-col justify-between space-y-3 border-b py-3 md:flex-row">
              <section className="flex items-center">
                <AvatarIcon>{user ? user.firstName.charAt(0) : "U"}</AvatarIcon>
                <span>{user.firstName}</span>
              </section>
              <Link href={`/dashboard/sendmoney?user=${user.id}`}>
                <button className="ml-2 rounded-md bg-black px-2 py-1 text-white dark:bg-white dark:text-black">
                  Send Money
                </button>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
