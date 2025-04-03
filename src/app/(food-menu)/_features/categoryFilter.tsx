"use client";

import { CategoryFilterParams } from "@/type";
import { CategoryFilterButton } from "../_components/categoryFilterButton";

export const CategoryFilter = (props: CategoryFilterParams) => {
  const { setSelectedCategory } = props;

  return (
    <div className="bg-white rounded-xl">
      <p>Dishes category</p>
      <CategoryFilterButton setSelectedCategory={setSelectedCategory} />
    </div>
  );
};
