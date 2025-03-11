'use client'

import { FoodMenu } from "@/app/(food-menu)/foodMenu"
import { Orders } from "@/app/(orders)/orders"
import { Settings } from "@/app/(settings)/settings"
import { useState } from "react"

export const MainContent = (props : {page: string}) => {
    const {page} = props;

    return (
        <div>
            {page == "Food menu" && <FoodMenu />}
            {page == "Orders" && <Orders />}
            {page == "Settings" && <Settings />}
        </div>
    )
}