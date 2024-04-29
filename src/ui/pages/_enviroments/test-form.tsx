import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const createUserSchema = z.object({
  firstName: z.string().nonempty("Este campo é obrigatório!"),
  lastName: z.string().nonempty("Este campo é obrigatório!"),
  email: z
    .string()
    .nonempty("Este campo é obrigatório!")
    .email("Email Inváido"),
  password: z
    .string()
    .min(6, "A senha dever conter no minímo 6 caracteres")
    .max(12, "A senha dever conter no máximo 12 caracteres")
    .nonempty("Este campo é obrigatório!"),
});

type CreateUserFormData = z.infer<typeof createUserSchema>;

export default function TestForm() {
  const [output, setOutput] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserFormData>({
    resolver: zodResolver(createUserSchema),
  });

  const createUser = (data: any) => {
    setOutput(JSON.stringify(data, null, 2));
  };

  return (
    <div className="bg-neutral-950 w-full h-screen flex justify-center items-center">
      <div className="flex max-w-7xl w-full mx-auto">
        <form
          onSubmit={handleSubmit(createUser)}
          className="py-24 px-14 rounded-md max-w-2xl w-full mx-auto flex justify-center items-center flex-col gap-4 border border-solid border-neutral-800"
        >
          <div className="flex flex-col w-full gap-4">
            <div className="flex gap-4 items-center w-full">
              <div className="w-full flex items-start justify-start flex-col gap-1">
                <label className="text-white" htmlFor="firstName">
                  Nome:
                </label>
                <input
                  id="firstName"
                  className="w-full bg-transparent text-white border border-solid border-neutral-800 p-1 px-4 rounded-md"
                  type="text"
                  autoComplete="off"
                  placeholder="Digite o seu nome"
                  {...register("firstName")}
                />
                {errors.firstName && (
                  <span className="text-red-400/70 text-sm">
                    {errors.firstName.message}
                  </span>
                )}
              </div>
              <div className="w-full flex items-start justify-start flex-col gap-1">
                <label className="text-white" htmlFor="lastName">
                  Sobrenome:
                </label>
                <input
                  id="lastName"
                  className="w-full bg-transparent text-white border border-solid border-neutral-800 p-1 px-4 rounded-md"
                  type="text"
                  autoComplete="off"
                  placeholder="Digite o seu sobrenome"
                  {...register("lastName")}
                />
                {errors.lastName && (
                  <span className="text-red-400/70 text-sm">
                    {errors.lastName.message}
                  </span>
                )}
              </div>
            </div>

            <div className="w-full flex items-start justify-start flex-col gap-1">
              <label className="text-white" htmlFor="email">
                Email:
              </label>
              <input
                id="email"
                className="w-full bg-transparent text-white border border-solid border-neutral-800 p-1 px-4 rounded-md"
                type="email"
                autoComplete="off"
                placeholder="Digite o seu email"
                {...register("email")}
              />
              {errors.email && (
                <span className="text-red-400/70 text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="w-full flex items-start justify-start flex-col gap-1">
              <label className="text-white" htmlFor="password">
                Senha:
              </label>
              <input
                id="password"
                className="w-full bg-transparent text-white border border-solid border-neutral-800 p-1 px-4 rounded-md"
                type="text"
                autoComplete="off"
                placeholder="Digite uma senha"
                {...register("password")}
              />
              {errors.password && (
                <span className="text-red-400/70 text-sm">
                  {errors.password.message}
                </span>
              )}
            </div>
          </div>
          <button className="bg-emerald-500 text-lg font-semibold mt-8 text-white rounded-md py-2 px-4 w-full">
            Salvar
          </button>
        </form>
        <div className="py-24 px-14 rounded-md max-w-2xl w-full mx-auto flex justify-center items-center flex-col gap-4 border-l-0 border border-solid border-neutral-800">
          <pre className="h-full w-full bg-neutral-900 text-neutral-300 p-2 rounded-md border border-solid border-neutral-800">
            {output}
          </pre>
        </div>
      </div>
    </div>
  );
}
