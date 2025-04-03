"use client"

import * as Yup from 'yup';

export const addFoodSchema = Yup.object({
  foodName: Yup.string().required("Food name is required"),
  price: Yup.number()
    .positive()
    .test("is positive", "ERROR: number must be greater than 0!", (value) => value !== undefined && value > 0)
    .required("Food price is required"),
  ingredients: Yup.string().required("Ingredients are required"),
});

export const updateFoodSchema = Yup.object({
  foodName: Yup.string().required("Food name is required"),
  price: Yup.number()
    .positive()
    .test("is positive", "ERROR: number must be greater than 0!", (value) => value !== undefined && value > 0)
    .required("Food price is required"),
  ingredients: Yup.string().required("Ingredients are required"),
});

