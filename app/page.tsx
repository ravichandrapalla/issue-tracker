import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Hello world</h1>
      <Link href="/users">Users</Link>
      <Link href="/users/new">New User</Link>
    </main>
  );
}
