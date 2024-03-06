import React from "react";
import Container from "./container";
import Link from "next/link";

const seeAll = () => {
  return (
      <div className="flex flex-wrap w-full sm:px-8 items-end justify-end mx-auto text-indigo-600">
        <Link href="#">Lihat Semua</Link>
      </div>
    
  );
}

export default seeAll;