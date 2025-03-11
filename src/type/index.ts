import { JSX } from "react"

export type MenuCard = {
    title: string
    Logo: () => JSX.Element
    onClick: () => void
}

export type User = {
    id: string
    email: string
    password: string
    phoneNumber: number
    address: string
    role: string 
    orderedFoods: string
    ttl: Date
    isVerified: boolean
    createdAt: Date
    updatedAt: Date
}

export type Food = {
    foodName: string
    price: number 
    image: string
    ingredients: string
    category: string
    createdAt: Date
    updatedAt: Date
}

export type Category = {
    categoryName: string
    createdAt: Date
    updatedAt: Date
}

export type FoodOrder = {
    user: string
    totalPrice: number
    foodOrderItems: string
    status: string
    createdAt: Date
    updatedAt: Date
}

export type foodOrderItem = {
    food: string
    quantity: number
}