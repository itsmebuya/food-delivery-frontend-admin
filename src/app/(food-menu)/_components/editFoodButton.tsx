"use client";

import { Category, EditFoodProps, FoodEditFormik } from "@/type";
import { Pen } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormik } from "formik";
import { updateFoodSchema } from "@/schema";
import { getCategory } from "@/utils/categoryRequests";
import { useQuery } from "@tanstack/react-query";
import { updateFood } from "@/utils/foodRequests";
import { ChangeEvent, useState } from "react";
import { ImageInput } from "./imageInput";
import axios from "axios";
import { DeleteFoodButton } from "./deleteFoodButton";

const CLOUDINARY_CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const CLOUDINARY_API_KEY = process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY;
const CLOUDINARY_UPLOAD_PRESET =
  process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;
const API_URL = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`;

export const EditFoodButton = (props: EditFoodProps) => {
  const { _id } = props;
  const [data, setData] = useState<File | null>(null);
  const [prevImg, setPrevImg] = useState<string | undefined>();

  const uploadCloudinary = async () => {
    if (!data) alert("Please insert photo");

    try {
      const file = new FormData();
      file.append("file", data as File);
      file.append("upload_preset", CLOUDINARY_UPLOAD_PRESET as string);
      file.append("api_key", CLOUDINARY_API_KEY as string);

      const response = await axios.post(API_URL, file, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data.secure_url;
    } catch (error) {
      console.log(error);
      throw error;
      //  toast
    }
  };

  const handleUploadImg = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e?.target?.files;
    if (!files) return;

    const file = files[0];
    setData(file);

    const reader = new FileReader();
    reader.onload = () => {
      setPrevImg(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const fetchCategories = async (): Promise<Category[]> => {
    const categoryData = await getCategory();
    return categoryData;
  };

  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  const handleUpdate = async (values: FoodEditFormik) => {
    try {
      const img_url = await uploadCloudinary();
      const newData = { ...values, image: img_url, id: _id };
      console.log(newData);

      const fetchFood = await updateFood(newData);
      console.log(fetchFood);
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues: {
        id:"",
      foodName: "",
      price: 0,
      ingredients: "",
      image: "",
      categoryId: "",
    },
    validationSchema: updateFoodSchema,
    onSubmit: handleUpdate,
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="cursor-pointer">
          <Pen />
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Dishes info</DialogTitle>
        </DialogHeader>
        <form onSubmit={formik.handleSubmit} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="foodName" className="text-right">
              Dish Name
            </Label>
            <Input
              id="foodName"
              name="foodName"
              className="col-span-3"
              value={formik.values.foodName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="category" className="text-right">
              Category
            </Label>
            <Select
              onValueChange={(value) => formik.setFieldValue("category", value)}
              value={formik.values.categoryId}
            >
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cate) => (
                  <SelectItem key={cate._id} value={cate.categoryName}>
                    {cate.categoryName}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="ingredients" className="text-right">
              Ingredients
            </label>
            <Input
              id="ingredients"
              name="ingredients"
              className="col-span-3 h-[90px] w-full"
              placeholder="List ingredients..."
              value={formik.values.ingredients}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.ingredients && formik.errors.ingredients && (
              <div className="text-red-500 text-sm col-span-4">
                {formik.errors.ingredients}
              </div>
            )}
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="price" className="text-right">
              Food price
            </label>
            <Input
              id="price"
              name="price"
              type="number"
              className="col-span-3"
              placeholder="Enter price..."
              value={formik.values.price}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.price && formik.errors.price && (
              <div className="text-red-500 text-sm col-span-4">
                {formik.errors.price}
              </div>
            )}
          </div>
          <ImageInput handleUploadImg={handleUploadImg} prevImg={prevImg} />
          <DialogFooter>
            <DeleteFoodButton _id={_id} />
            <Button type="submit" disabled={formik.isSubmitting}>
              Save changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
