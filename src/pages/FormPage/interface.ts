import {
  FieldErrors,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface IForm {
  register: UseFormRegister<{
    price: number;
    description: string;
    title: string;
  }>;
  errors: FieldErrors<{
    title: string;
    price: number;
    description: string;
  }>;
  isDesebled: () => boolean;
  handelClickCancel: () => void;
  handleSubmit: UseFormHandleSubmit<
    {
      title: string;
      price: number;
      description: string;
    },
    undefined
  >;
  onSubmit: SubmitHandler<{
    title: string;
    price: number;
    description: string;
  }>;
}
