'use client'

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ImageInputProps } from "@/type";
import Image from "next/image";

export const ImageInput = (props: ImageInputProps) => {
    const { handleUploadImg, prevImg } = props;

    return (
        <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="Ingredients" className="text-right">
                Food image
            </Label>
            <Input
                id="Ingredients"
                type="file"
                onChange={handleUploadImg}
                className="col-span-3 h-[90px]"
                placeholder="List ingredients..."
            />
            <p>preview img</p>
            {prevImg && <Image src={prevImg} alt="preview image" />}
            
        </div>
    )
}