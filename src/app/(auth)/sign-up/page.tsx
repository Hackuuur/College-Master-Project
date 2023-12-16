'use client'

import Link from "next/link";
import { Input } from "@/ui/input";
import { Label } from "@/ui/label";
import { Button } from "@/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { AuthCredentialsValidator, TAuthCredentialsValidator } from "@/lib/validators/accound-credentials-validators";

const Page = () => {



  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TAuthCredentialsValidator>({
    resolver: zodResolver(AuthCredentialsValidator),
  })


  const onSubmit = ({email,password}:TAuthCredentialsValidator) =>{

  }

  return (
    <div className="min-h-screen  flex items-center justify-center px-7 md:px-0 ">
      <div
        className="w-full max-w-md p-3  sm:p-4 lg:p-8 md:py-5 rounded-md text-white "
        id="sign-up"
      >
        <div className="flex flex-col items-center space-y-4">
          <img
            src={"/Logo.png"}
            alt="logo"
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
          />
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
            Create an Account
          </h1>
          <Link
            className="flex gap-1 text-sm md:text-base items-center hover:underline hover:underline-offset-4"
            href="/"
          >
            Already have an Account? sign-in
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <hr className="w-full bg-gray-100 dark:bg-gray-700 h-1 mx-auto mt-3  border-0 rounded " />
        <div className="grid  gap-4 mt-3">
          <form onSubmit={handleSubmit(onSubmit)} >
            <div className="grid gap-y-3 lg:gap-y-4  ">
              <div className="grid gap-y-1 lg:gap-y-2 ">
                <Label htmlFor="Email">Email</Label>

                <Input
                {...register("email")}
                  type="email"
                  className={cn(
                    "border p-2 text-black focus:outline-none focus:ring focus:border-black",
                    { "focus-visible:ring-red-500": errors.email }
                  )}
                  placeholder="Email"
                />
              </div>
              <div className="grid gap-y-1 lg:gap-y-2 ">
                <Label htmlFor="Password">Password</Label>
                <Input
                {...register("password")}

                  type="password"
                  className={cn(
                    "border p-2 text-black focus:outline-none focus:ring focus:border-black",
                    { "focus-visible:ring-red-500": errors.password }
                  )}
                  placeholder="Password"
                />
              </div>
              <div className="flex justify-end">
                <Button variant="ghost" className=" w-[100px]">
                  Sign Up
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};


export default Page;
