'use client'

import { useState } from "react";
import { Categories } from "./_features/categories"
import { CategoryFilter } from "./_features/categoryFilter"

export const FoodMenu = () => {
    const[selectedCategory, setSelectedCategory] = useState("All dishes");

    return(
        <div className="flex flex-col gap-5">
            <CategoryFilter setSelectedCategory={setSelectedCategory}/>
            <Categories selectedCategory={selectedCategory} />
        </div>
    )
}