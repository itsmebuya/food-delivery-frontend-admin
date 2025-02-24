'use client'

import { SideMenu } from "@/components/sideMenu";
import { useEffect, useState } from "react";

export default function Home() {
  const [page, setPage] = useState(1)

  const onClick = () => {
    setPage(page +1)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        
      } catch (error) {
        
      }
    }
  }, []);

  return (
    <div className="flex">
      <SideMenu/>
      <div className="bg-black h-[100px] w-[100px]">asdas</div>
    </div>
  );
}
