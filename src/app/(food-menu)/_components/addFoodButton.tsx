'use client'

import { FoodCardProps } from "@/type"

export const AddFoodButton = (props: FoodCardProps) => {
    const {_id, category} = props

    return(
        <div className="cursor-pointer flex flex-col gap-6 justify-center items-center border border-red-500 border-dashed w-[270px] h-[240px]">
            <div className="rounded-full bg-red-500 w-[40px] h-[40px] flex justify-center items-center text-white">+</div>
            <p className="">Add new Dish to <br/>{category}</p>
        </div>
    )
}