import Balance from "@/components/Dashboard/Balance";
import Search from "@/components/Dashboard/Search";
import UsersList from "@/components/Dashboard/UsersList";

const dashboard = () => {
  return (
    <div className="mt-5 flex w-screen flex-col space-y-4 p-4">
      <div className="flex justify-end pr-4">
        <Balance />
      </div>
      <div>
        <h1 className="px-4 text-4xl font-bold">Users</h1>
      </div>
      <div>
        <Search />
      </div>
      <div className="pt-8">
        <UsersList />
      </div>
    </div>
  );
};

export default dashboard;
