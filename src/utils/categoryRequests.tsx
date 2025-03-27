import axios from "axios"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const instance = axios.create({ baseURL: BASE_URL });

export const getCategory = async () => {
    const { data } = await instance.get(`/categories`);    
    return data
}

export const createCategory = async (categoryID: string) => {
    const { data } = await instance.post(`/categories`, categoryID);
    return data
}

export const updateCategory = async (categoryID: string) => {
    const { data } = await instance.put(`/categories`, categoryID);
    return data
}

export const deleteCategory = async (categoryID: string) => {
    const {data} = await instance.delete(`/categories/${categoryID}`)
    return data
}