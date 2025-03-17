'use client'

import { FoodCardProps } from "@/type"

export const AddFoodButton = (props: FoodCardProps) => {
    const {_id, category} = props

    return(
        <div className="cursor-pointer">
            <div>+</div>
            <p className="">Add new Dish to <br/>{category}</p>
        </div>
    )
}