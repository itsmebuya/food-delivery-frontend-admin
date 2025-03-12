'use client'

import { Category } from "@/type"
import { getCategory } from "@/utils/categoryRequests"
import { useState, useEffect } from "react"

export const CategoryFilterButton = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [categories, setCategories] = useState<Category[]>([])

    const fetchCategory = async () => {
        setLoading(true);
        try {
            const categoryData = await getCategory();
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
        fetchCategory();
    }, [])

    console.log(categories);
    

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return(
        <div className="cursor-pointer flex">
            {categories.map((cate) => (
                <div key={cate._id} className="m-2">
                    {cate.categoryName}
                </div>
            ))}
        </div>
    )
}