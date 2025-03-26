'use client'

import { Category, Food } from "@/type"
import { getCategory } from "@/utils/categoryRequests"
import { useEffect, useState } from "react"
import { FoodCard } from "../_components/foodCard"
import { AddFoodButton } from "../_components/addFoodButton"
import { useQuery } from "@tanstack/react-query"

export const Categories = () => {
    // const [loading, setLoading] = useState(false)
    // const [error, setError] = useState("")
    // const [categories, setCategories] = useState<Category[]>([])

    const fetchCategories = async (): Promise<Category[]> => {
        const categoryData = await getCategory();
        return categoryData;
    }

    // const fetchCategory = async () => {
    //     setLoading(true);
    //     try {
    //         const categoryData = await getCategory();
    //         setCategories(categoryData);
    //     } catch (error) {
    //         if (error instanceof Error) {
    //             setError(error.message || "An unknown error occurred.");
    //         } else {
    //             setError("An unknown error occurred.");
    //         }
    //     } finally {
    //         setLoading(false);
    //     }
    // }

    // useEffect(() => {
    //     fetchCategory();
    // }, [])

    const {
        data: categories = [],
        error,
        isLoading,
        isError
    } = useQuery({queryKey:['categories'], queryFn:fetchCategories});

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error: {error instanceof Error ? error.message : "An unknown error occurred."}</div>;
    }

    return (
        <div>
            {categories.map((cate) => (
                <div key={cate._id}>
                    <p className="text-xl">
                        {cate.categoryName}
                    </p>
                    <div className="flex">
                        <AddFoodButton _id={cate._id} category={cate.categoryName} />
                        <FoodCard _id={cate._id} category={cate.categoryName} />
                    </div>

                </div>
            ))}
        </div>
    )
}