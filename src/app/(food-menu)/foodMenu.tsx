'use client'

import { Categories } from "./_features/categories"
import { CategoryFilter } from "./_features/categoryFilter"

export const FoodMenu = () => {

    return(
        <div className="flex flex-col gap-5">
            <CategoryFilter />
            <Categories />
        </div>
    )
}