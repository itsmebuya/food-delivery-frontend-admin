"use client";

import { FoodCardProps } from "@/type";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormik } from "formik";
import { ImageInput } from "./imageInput";
import { ChangeEvent, useState } from "react";
import axios from "axios";
import { addFoodSchema } from "@/schema";
import { createFood } from "@/utils/foodRequests";

const CLOUDINARY_CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const CLOUDINARY_API_KEY = process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY;
const CLOUDINARY_UPLOAD_PRESET =
  process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;
const API_URL = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`;

export const AddFoodButton = (props: FoodCardProps) => {
  const { _id, category } = props;

  const [data, setData] = useState<File | null>(null);
  const [prevImg, setPrevImg] = useState<string | undefined>();

  const uploadCloudinary = async () => {
    if (!data) alert("Please insert photo");

    try {
      console.log("file", data);

      const file = new FormData();
      file.append("file", data as File);
      file.append("upload_preset", CLOUDINARY_UPLOAD_PRESET as string);
      file.append("api_key", CLOUDINARY_API_KEY as string);

      const response = await axios.post(API_URL, file, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response);
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

  const handleSubmit = async (values: any) => {
    try {
      const img_url = await uploadCloudinary();
      const newData = { ...values, image: img_url, category: _id };

      const fetchFood = await createFood(newData);

      console.log(fetchFood);
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      foodName: "",
      price: "",
      ingredients: "",
      image: "",
    },
    validationSchema: addFoodSchema,
    onSubmit: handleSubmit,
  });

  return (
    <Dialog >
      <DialogTrigger asChild>
        <div className="cursor-pointer flex flex-col gap-6 justify-center items-center border border-red-500 border-dashed w-[270px] h-[240px]">
          <div className="rounded-full bg-red-500 w-[40px] h-[40px] flex justify-center items-center text-white">
            +
          </div>
          <p className="">
            Add new Dish to <br />
            {category}
          </p>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add new Dish to {category}</DialogTitle>
        </DialogHeader>
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col gap-6 py-4"
        >
          <div className="flex gap-6">
            <div className="flex flex-col items-start gap-4">
              <label htmlFor="name" className="text-right">
                Food name
              </label>
              <Input
                id="foodName"
                name="foodName"
                className="col-span-3"
                placeholder="Type food name"
                value={formik.values.foodName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.foodName && formik.errors.foodName && (
                <div className="text-red-500 text-sm">
                  {formik.errors.foodName}
                </div>
              )}
            </div>
            <div className="flex flex-col items-start gap-4">
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
                <div className="text-red-500 text-sm">
                  {formik.errors.price}
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col items-start gap-4">
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
              <div className="text-red-500 text-sm">
                {formik.errors.ingredients}
              </div>
            )}
          </div>
          <ImageInput handleUploadImg={handleUploadImg} prevImg={prevImg} />
          <DialogFooter>
            <Button type="submit" onClick={uploadCloudinary}>
              Add dish
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
