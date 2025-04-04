'use client'

import { MainContent } from "@/components/mainContent";
import { SideMenu } from "@/components/sideMenu";
import { useState } from "react";

export default function Home() {
  const [page, setPage] = useState("Food menu");

  return (
    <div className="flex bg-[#f4f4f5]">
      <div className="w-[15%] max-w-[220px]">
        <SideMenu setPage={setPage}/>
      </div>
      <div className="w-[85%] m-5 ">
        <MainContent page={page} />
      </div>
    </div>
  );
}

