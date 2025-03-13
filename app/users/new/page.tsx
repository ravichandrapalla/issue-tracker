"use client";
import { useRouter } from "next/navigation";
import React from "react";

const NewUserPage = () => {
  const router = useRouter();
  return (
    <div>
      <p>New user</p>
      <button
        className="btn"
        onClick={() => {
          router.push("/users");
        }}
      >
        Create
      </button>
    </div>
  );
};

export default NewUserPage;
