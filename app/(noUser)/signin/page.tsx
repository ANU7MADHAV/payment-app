"use client";
import { signInValidation } from "@/utilities/clientValidationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

type ValidationSchema = z.infer<typeof signInValidation>;

const SignIn = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(signInValidation),
  });
  const onSubmit: SubmitHandler<ValidationSchema> = (submitData) => {
    const fetchData = async () => {
      try {
        const res = await axios.post("/api/signin", submitData);
        const data = res.data;
        router.push("/dashboard");
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center ">
      <div className="flex flex-col rounded-md px-8 py-6 shadow-lg dark:shadow-blue-400">
        <h1 className="text-center text-2xl font-medium">Sign In</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          <label className="py-2 font-medium">Username</label>
          <input
            {...register("username")}
            className="rounded-md border border-gray-400  bg-transparent px-2 placeholder-gray-400  outline-blue-400 "
          />
          {errors.username && (
            <p className="mt-2 text-xs italic text-red-500">
              {" "}
              {errors.username?.message}
            </p>
          )}
          <label className="py-2 font-medium">Password</label>
          <input
            {...register("password")}
            className="rounded-md border border-gray-400  bg-transparent px-2 placeholder-gray-400  outline-blue-400 "
          />
          {errors.password && (
            <p className="mt-2 text-xs italic text-red-500">
              {" "}
              {errors.password?.message}
            </p>
          )}
          <input type="submit" className="cursor-pointer pt-4 text-blue-500" />
          <div className="flex space-x-2 py-3">
            <p>Already have an account ?</p>
            <Link href="/signup">
              <h3 className="border-b-2 border-blue-300">Sign up</h3>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
