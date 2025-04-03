import { createFoodParams, UpdateFoodParams } from "@/type";
import axios from "axios"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const instance = axios.create({ baseURL: BASE_URL });

export const getFood = async () => {
    const { data } = await instance.get(`/foods`);
    return data
}

export const createFood = async ({ foodName, price, ingredients, image, category }: createFoodParams) => {
    const { data } = await instance.post(`/foods`, { foodName, price, ingredients, image, category });
    return data
}

export const updateFood = async ({ id, foodName, price, image, ingredients, categoryId }: UpdateFoodParams) => {
    const { data } = await instance.put(`/foods`, { id, foodName, price, image, ingredients, categoryId });
    return data
}

export const deleteFood = async (id: string) => {
    const { data } = await instance.delete(`/foods/`, {
        data: { id }
    })
    return data
}