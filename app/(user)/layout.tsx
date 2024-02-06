import UserNavbar from "@/components/Navbar/UserNavbar";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav>
        <UserNavbar />
      </nav>
      <main>{children}</main>
    </>
  );
}
