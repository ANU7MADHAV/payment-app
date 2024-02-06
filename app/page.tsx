import UserNavbar from "@/components/Navbar/UserNavbar";

const Home = () => {
  return (
    <main>
      <nav>
        <UserNavbar />
      </nav>
      <div className="flex justify-between">
        <h1 className="text-3xl">Payment App</h1>
        <h3>user</h3>
        <div className="border"></div>
      </div>
    </main>
  );
};

export default Home;
