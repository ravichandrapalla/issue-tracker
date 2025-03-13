import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const AdminLayout = ({ children }: Props) => {
  return (
    <div className="flex">
      <aside className="bg-slate-200 p-2 mr-2 text-black">Admin side bar</aside>
      <div>{children}</div>
    </div>
  );
};

export default AdminLayout;
