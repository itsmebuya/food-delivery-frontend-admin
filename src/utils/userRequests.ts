import axios from "axios"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const instance = axios.create({ baseURL: BASE_URL });

export const getUser = async () => {
    const { data } = await instance.get(`/users`);
    return data
}

export const createUser = async (userID: string) => {
    const { data } = await instance.post(`/users`, userID);
    return data
}

export const updateUser = async (userID: string) => {
    const { data } = await instance.put(`/users`, userID);
    return data
}

export const deleteUser = async (userID: string) => {
    const {data} = await instance.delete(`/users`)
    return data
}