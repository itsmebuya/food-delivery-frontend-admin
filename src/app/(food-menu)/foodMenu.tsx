'use client'

import { Categories } from "./_features/categories"
import { CategoryFilter } from "./_features/categoryFilter"

export const FoodMenu = () => {

    return(
        <div>
            <CategoryFilter />
            <Categories />
        </div>
    )
}