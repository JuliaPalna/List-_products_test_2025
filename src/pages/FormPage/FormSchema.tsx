import { z } from "zod";

export const formSchema = z.object({
  title: z
    .string()
    .min(2, { message: "Name short" })
    .max(10, { message: "Name long" }),
  price: z.number().refine((v) => v > 0, {
    message: "prise will not zero",
  }),
  description: z
    .string()
    .min(4, { message: "description short" })
    .max(50, { message: "description long" }),
});

export type FormSchema = z.infer<typeof formSchema>;
