"use client";

import { Category, CategoryParams, Food } from "@/type";
import { getCategory } from "@/utils/categoryRequests";
import { FoodCard } from "../_components/foodCard";
import { AddFoodButton } from "../_components/addFoodButton";
import { useQuery } from "@tanstack/react-query";

export const Categories = (props: CategoryParams) => {
  const { selectedCategory } = props;

  const fetchCategories = async (): Promise<Category[]> => {
    const categoryData = await getCategory();
    return categoryData;
  };

  const {
    data: categories = [],
    error,
    isLoading,
    isError,
  } = useQuery({ queryKey: ["categories"], queryFn: fetchCategories });

  const filteredCategories = selectedCategory === "All dishes"
    ? categories
    : categories.filter(cate => cate.categoryName === selectedCategory);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return (
      <div>
        Error:{" "}
        {error instanceof Error ? error.message : "An unknown error occurred."}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5 max-h-[85vh] overflow-scroll">
      {filteredCategories.map((cate) => (
        <div key={cate._id} className="flex flex-col gap-5 bg-white rounded-xl">
          <p className="text-xl">{cate.categoryName}</p>
          <div className="flex gap-4 ">
            <AddFoodButton _id={cate._id} category={cate.categoryName} />
            <FoodCard _id={cate._id} category={cate.categoryName} />
          </div>
        </div>
      ))}
    </div>
  );
};
