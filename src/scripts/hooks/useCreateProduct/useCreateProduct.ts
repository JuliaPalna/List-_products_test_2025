import { formSchema, FormSchema, IForm } from "@/pages/FormPage";
import { TypeProduct } from "@/pages/ProductPage";
import { addProduct } from "@/store/productsListReducer/clices";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { TypeApiDispatch, TypeRootState } from "@/store";

export const useCreateProduct = (): IForm => {
  const history = useSelector((state: TypeRootState) => state.productsList);
  const dispatch = useDispatch<TypeApiDispatch>();

  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState: { isDirty, isSubmitting, errors },
  } = useForm<FormSchema>({ resolver: zodResolver(formSchema) });

  const onSubmit: SubmitHandler<FormSchema> = (data: FormSchema) => {
    const newProduct: TypeProduct = {
      id: history.length + 1,
      title: data.title,
      price: data.price.toString(),
      description: data.description,
    };

    dispatch(addProduct(newProduct));
    reset();
  };

  const handelClickCancel = (): void => {
    reset();
  };

  const isDesebled = (): boolean => !isDirty || isSubmitting;

  useEffect(() => {
    setFocus("title");
  }, []);

  return {
    register,
    errors,
    isDesebled,
    handelClickCancel,
    handleSubmit,
    onSubmit,
  };
};
