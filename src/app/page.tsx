'use client'

import { MainContent } from "@/components/mainContent";
import { SideMenu } from "@/components/sideMenu";
import { useEffect, useState } from "react";

export default function Home() {
  const [page, setPage] = useState("Food menu")

  return (
    <div className="flex">
      <div className="w-[15%]">
        <SideMenu setPage={setPage}/>
      </div>
      <div className="w-[85%]">
        <MainContent page={page} />
      </div>
    </div>
  );
}
