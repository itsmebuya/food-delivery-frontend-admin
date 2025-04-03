"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Formik, Field, Form } from "formik";
import { addCategory } from "@/type";
import { createCategory } from "@/utils/categoryRequests";

export const AddCategoryButton = () => {
  const initialValues: addCategory = {
    category: "",
  };

  const handleSubmit = async (values: addCategory) => {
    try {
        const categoryName = values.category;
       const response =  await createCategory(categoryName)
       console.log(response);
       
    } catch (error) {
        console.log(error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="rounded-full bg-red-500 w-[36px] h-[36px] flex justify-center items-center cursor-pointer text-white">
            +
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add new category</DialogTitle>
        </DialogHeader>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="grid flex-1 gap-2">
                <Field
                  id="category"
                  name="category"
                  type="text"
                  placeholder="Enter category name"
                  as={Input}
                  className="border-gray-300"
                />
              </div>
            </div>
            <DialogFooter className="sm:justify-end">
              <DialogClose asChild>
                <Button type="submit">
                  Add category
                </Button>
              </DialogClose>
            </DialogFooter>
          </Form>
        </Formik>
      </DialogContent>
    </Dialog>
  );
};
