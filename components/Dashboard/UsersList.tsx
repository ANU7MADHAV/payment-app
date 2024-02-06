"use client";

import { usersListAtoms } from "@/src/atoms/userListAtom";
import Link from "next/link";
import { useRecoilState } from "recoil";

const UsersList = () => {
  const [users, setUsers] = useRecoilState(usersListAtoms);

  return (
    <div className="px-6 text-lg font-medium">
      <ul>
        {users.map((user, index) => (
          <li key={user.id}>
            <div className="flex justify-between space-y-3">
              <span>{user.firstName}</span>
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
