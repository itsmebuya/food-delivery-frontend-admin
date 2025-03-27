import { JSX } from "react"

export type MenuCardProps = {
    title: string
    Logo: () => JSX.Element
    onClick: () => void
}

export type FoodCardProps = {
    _id: string
    category: string
}

export type User = {
    _id: string
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
    _id: string
    foodName: string
    price: number 
    image: string
    ingredients: string
    category: string
    createdAt: Date
    updatedAt: Date
}

export type Category = {
    _id: string
    categoryName: string
    createdAt: Date
    updatedAt: Date
    foodCount: number
}

export type FoodOrder = {
    _id: string
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