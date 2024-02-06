import { cookies } from "next/headers";

const logout = () => {
  cookies().delete("token");
};
export default logout;
