import { z } from "zod";

export const AddressSchema = z.object({
  zip_code: z.string().max(9, { message: "Insira um CEP valido" }).nullable(),
  state: z
    .string()
    .max(2, { message: "Use abreviações, São Paulo: SP" })
    .nullable(),
  street: z
    .string()
    .max(40, { message: "Insira no máximo 40 caracteres" })
    .nullable(),
  number: z
    .string()
    .max(10, { message: "Insira no máximo 10 caracteres" })
    .nullable(),
  complement: z
    .string()
    .max(30, { message: "Insira no máximo 30 caracteres" })
    .nullable(),
});
