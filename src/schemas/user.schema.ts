import { z } from "zod";

export const LoginSchema = z.object({
  email: z
    .string()
    .nonempty("Preencha o campo de e-mail")
    .email("Forneca um e-mail válido"),
  password: z.string().nonempty("Preencha o campo de senha"),
});

export type LoginData = z.infer<typeof LoginSchema>;
