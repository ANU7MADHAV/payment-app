"use client";

import { usersListAtoms } from "@/src/atoms/userListAtom";
import Link from "next/link";
import { useRecoilState } from "recoil";
import AvatarIcon from "../Avatar";

const UsersList = () => {
  const [users, setUsers] = useRecoilState(usersListAtoms);

  return (
    <div className="px-6 text-lg font-medium">
      <ul>
        {users.map((user, index) => (
          <li key={user.id}>
            <div className="flex justify-between space-y-3">
              <section className="flex items-center">
                <AvatarIcon>{user ? user.firstName.charAt(0) : "U"}</AvatarIcon>
                <span>{user.firstName}</span>
              </section>

              <Link href={`/dashboard/sendmoney?user=${user.id}`}>
                <button className="rounded-md bg-black px-2 py-1 text-white dark:bg-white dark:text-black">
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
