import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="h-[100vh] bg-slate-100 flex flex-col justify-center items-center ">
      <h1 className="uppercase text-5xl text-red-400">Page not found</h1>
      <Link href="/" className="uppercase text-2xl text-blue-400">
        go home
      </Link>
    </div>
  );
};

export default NotFoundPage;
