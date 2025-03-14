'use client'

import { Category, Food } from "@/type"
import { getCategory } from "@/utils/categoryRequests"
import { getFood } from "@/utils/foodRequests"
import { useEffect, useState } from "react"

export const Categories = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [categories, setCategories] = useState<Category[]>([])
    const [foods, setFoods] = useState<Food[]>([])

    const fetchCategoryAndFood = async () => {
        setLoading(true);
        try {
            const categoryData = await getCategory();
            const foodData = await getFood();
            setFoods(foodData);
            setCategories(categoryData);
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

    useEffect(() => {
        fetchCategoryAndFood();
    }, [])

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            {}
            <p>cate</p>
        </div>
    )
}