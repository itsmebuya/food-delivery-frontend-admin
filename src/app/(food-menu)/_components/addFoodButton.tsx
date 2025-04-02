'use client'

import { FoodCardProps } from "@/type"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ImageInput } from "./imageInput"

const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;
const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY;
const CLOUDINARY_UPLOAD_PRESET = process.env.CLOUDINARY_UPLOAD_PRESET;
const API_URL = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`;

export const AddFoodButton = (props: FoodCardProps) => {
    const { _id, category } = props
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className="cursor-pointer flex flex-col gap-6 justify-center items-center border border-red-500 border-dashed w-[270px] h-[240px]">
                    <div className="rounded-full bg-red-500 w-[40px] h-[40px] flex justify-center items-center text-white">+</div>
                    <p className="">Add new Dish to <br />{category}</p>
                </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add new Dish to {category}</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col gap-6 py-4">
                    <div className="flex gap-6">
                        <div className="flex flex-col items-start gap-4">
                            <Label htmlFor="Food name" className="text-right">
                                Food name
                            </Label>
                            <Input id="name" className="col-span-3" placeholder="Type food name" />
                        </div>
                        <div className="flex flex-col items-start gap-4">
                            <Label htmlFor="Food price" className="text-right">
                                Food price
                            </Label>
                            <Input id="Food price" type="number" className="col-span-3" placeholder="Enter price..." />
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-4">
                        <Label htmlFor="Ingredients" className="text-right">
                            Ingredients
                        </Label>
                        <Input id="Ingredients" className="col-span-3 h-[90px]" placeholder="List ingredients..." />
                    </div>
                    <ImageInput />
                </div>
                <DialogFooter>
                    <Button type="submit">Add dish</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
