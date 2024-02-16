import UserNavbar from "@/components/Navbar/UserNavbar";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className="dark:bg-gray-800">
        <UserNavbar />
      </nav>
      <main className="dark:bg-gray-800 dark:text-white">{children}</main>
    </>
  );
}
