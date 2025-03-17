'use client'

import { Food, FoodCardProps } from "@/type"
import { getFood } from "@/utils/foodRequests";
import { useEffect, useState } from "react";

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
        <div>
            {filteredFoods.map((food) => (
                <div key={food._id}>
                    <p className="text-sm text-red-500">
                        {food.foodName}
                    </p>

                </div>
            ))}
        </div>
    )
}