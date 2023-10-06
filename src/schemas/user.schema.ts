import { z } from "zod";

export const LoginSchema = z.object({
  email: z
    .string()
    .nonempty("Preencha o campo de e-mail")
    .email("Forneca um e-mail válido"),
  password: z.string().nonempty("Preencha o campo de senha"),
});

export const RegisterSchema = z.object({
  name: z.string().nonempty("Preencha o campo nome"),
  email: z
    .string()
    .email("Insira um e-mail valido")
    .nonempty("Preencha o campo de email"),
  cpf: z
    .string()
    .max(13, { message: "Insira um CPF com no maximo 13 números" })
    .nonempty("Preencha com o seu CPF"),
  phone: z.string().nonempty("Preencha o campo celular"),
  birth_date: z
    .string()
    .nonempty("Selecione sua data de nascimento")
    .or(z.date()),
  description: z.string(),
  cep: z.string().nonempty("Preencha o seu CEP"),
  state: z
    .string()
    .max(2, { message: "Preencha com a sigla do seu estado, Ex: SP" })
    .nonempty("Preencha o seu estado"),
  city: z.string().nonempty("Preencha o nome da sua cidade"),
  street: z.string().nonempty("Preencha o nome da sua rua"),
  number: z.string().nonempty("Preencha o numero da sua residência"),
  complement: z.string(),
  is_seller: z.boolean(),
  password: z.string().nonempty("Preencha o campo com a sua senha"),
  confirm_password: z.string().nonempty("Preencha o campo com a sua senha"),
});

export type LoginData = z.infer<typeof LoginSchema>;
export type RegisterData = z.infer<typeof RegisterSchema>;
