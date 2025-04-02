'use client'

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { ChangeEvent } from "react";

export const ImageInput = () => {
    const [data, setData] = useState<File>();
    const [prevImg, setPrevImg] = useState<string>();

    const handleUploadImg = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e?.target?.files;
        if(!files) return

        const file = files[0]
        setData(file)

        const reader = new FileReader();
        reader.onload(() => {
            setPrevImg(reader.result as string)
        })

        reader.readAsDataURL(file)
    }

    return (
        <div className="flex flex-col items-start gap-4">
            <Label htmlFor="Ingredients" className="text-right">
                Ingredients
            </Label>
            <Input id="Ingredients" type="file" className="col-span-3 h-[90px]" placeholder="List ingredients..." />
        </div>
    )
}