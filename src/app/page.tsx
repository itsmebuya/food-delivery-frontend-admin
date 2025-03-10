'use client'

import { SideMenu } from "@/components/sideMenu";
import { useEffect, useState } from "react";

export default function Home() {
  const [page, setPage] = useState(1)

  useEffect(() => {
    const fetchData = async () => {
      try {

      } catch (error) {

      }
    }
  }, []);

  return (
    <div className="flex">
      <div className="w-[15%]">
        <SideMenu />
      </div>
      
    </div>
  );
}
