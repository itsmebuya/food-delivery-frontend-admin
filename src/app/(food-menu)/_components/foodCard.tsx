'use client'

import { Food, FoodCardProps } from "@/type"
import { getFood } from "@/utils/foodRequests";
import { useEffect, useState } from "react";
import { EditFoodButton } from "./editFoodButton";

export const FoodCard = (props: FoodCardProps) => {
    const { _id } = props;
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [foods, setFoods] = useState<Food[]>([])

    const fetchFood = async () => {
        setLoading(true);
        try {
            const foodData = await getFood();
            setFoods(foodData);
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message || "An unknown error occurred.");
            } else {
                setError("An unknown error occurred.");
            }
        } finally {
            setLoading(false);
        }
    }

    const filteredFoods = foods.filter(food => food.category === _id)

    useEffect(() => {
        fetchFood()
    }, [])

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="flex gap-4">
            {filteredFoods.map((food) => (
                <div key={food._id} className="flex flex-col w-[270px] h-[240px]">
                    <div>

                    </div>
                    <div className="flex flex-col">
                        <div className="flex justify-between">
                            <p className="text-sm ">{food.foodName}</p>
                            <p>${food.price}</p>
                        </div>
                        {food.ingredients}
                        <EditFoodButton _id={food._id} />
                    </div>
                </div>
            ))}
        </div>
    )
}