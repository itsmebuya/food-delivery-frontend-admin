'use client'

import { Category, CategoryFilterParams } from "@/type"
import { getCategory } from "@/utils/categoryRequests"
import { getFood } from "@/utils/foodRequests"
import { useQuery } from "@tanstack/react-query"
import { AddCategoryButton } from "./addCategoryButton"

export const CategoryFilterButton = (props: CategoryFilterParams) => {
    const {setSelectedCategory} = props

    const fetchCategories = async (): Promise<Category[]> => {
        const categoryData = await getCategory();
        return categoryData;
    }
    const fetchFoods = async() => {
        const foodData = await getFood();
        return foodData
    }
    
    const {
        data: categories ,
        error,
        isLoading,
        isError
    } = useQuery({ queryKey: ['categories'], queryFn: fetchCategories });

    const {
        data: foods 
    } = useQuery({ queryKey: ['foods'], queryFn: fetchFoods });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error: {error instanceof Error ? error.message : "An unknown error occurred."}</div>;
    }

    return(
        <div className="flex">
            <div className="cursor-pointer" onClick={()=> setSelectedCategory("All dishes")}>
                All dishes 
                {/* {foods.length} */}
            </div>
            {categories?.map((cate) => (
                <div key={cate._id} className="m-2 cursor-pointer" onClick={()=> setSelectedCategory(cate.categoryName)}>
                    {cate.categoryName} 
                    <div>
                        {cate.foodCount}
                    </div>
                </div>
            ))}
            <AddCategoryButton/>
        </div>
    )
}