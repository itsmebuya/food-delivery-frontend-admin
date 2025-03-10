import axios from "axios"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const instance = axios.create({ baseURL: BASE_URL });

export const getFood = async () => {
    const { data } = await instance.get(`/foods`);
    return data
}

export const createFood = async (foodID: string) => {
    const { data } = await instance.post(`/foods`, foodID);
    return data
}

export const updateFood = async (foodID: string) => {
    const { data } = await instance.put(`/foods`, foodID);
    return data
}

export const deleteFood = async (foodID: string) => {
    const {data} = await instance.delete(`/foods/${foodID}`)
    return data
}