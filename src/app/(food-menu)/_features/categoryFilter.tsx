'use client'

import { Category } from "@/type"
import { getCategory } from "@/utils/categoryRequests"
import { useEffect, useState } from "react"
import { CategoryFilterButton } from "../_components/categoryFilterButton"

export const CategoryFilter = () => {
    
    return (
        <div className="bg-white rounded-xl">
            <p>Dishes category</p>
            <CategoryFilterButton />
        </div>
    )
}