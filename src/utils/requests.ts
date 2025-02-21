import axios from "axios"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const instance = axios.create({ baseURL: BASE_URL });

export const getData = async () => {
    const {data} = await instance.get(``);
    return data
}