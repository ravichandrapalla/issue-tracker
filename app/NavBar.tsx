import Link from "next/link";
import React from "react";
import SignIn from "./components/sign-in";
const NavLinks = [
  { path: "/", name: "Home" },
  { path: "/admin", name: "Admin" },
  { path: "/products", name: "Products" },
];

const NavBar = () => {
  return (
    <div className="flex gap-2 justify-end bg-slate-200 text-black">
      {NavLinks.map((item) => (
        <Link key={item.path} href={item.path}>
          {item.name}
        </Link>
      ))}
      <SignIn />
    </div>
  );
};

export default NavBar;
