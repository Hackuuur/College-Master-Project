"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Loader2 } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import {
  AuthCredentialsValidator,
  TAuthCredentialsValidator,
} from "@/lib/validators/account-credentials-validator";
import { trpc } from "@/trpc/client";
import { ZodError } from "zod";
import { useRouter,useSearchParams } from "next/navigation";

const Page = () => {

    const searchParams = useSearchParams()
    const router = useRouter()
    const isCreator = searchParams.get('as') === 'creator'
    const origin = searchParams.get('origin')
  
    const continueAsCreator = () =>{
        router.push("?as=creator")
    }
    const continueAsUser =() =>{
        router.replace('/sign-in',undefined)
    }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TAuthCredentialsValidator>({
    resolver: zodResolver(AuthCredentialsValidator),
  });

  const { mutate: signIn, isLoading } =
    trpc.auth.signIn.useMutation({
      onSuccess: async () => {
        toast.success('Signed in successfully')

        router.refresh()

        if (origin) {
          router.push(`/${origin}`)
          return
        }

        if (isCreator) {
          router.push('/sell')
          return
        }

        router.push('/')
      },
      onError: (err) => {
        if (err.data?.code === 'UNAUTHORIZED') {
          toast.error('Invalid email or password.')
        }
      },
  });
  const onSubmit = ({ email, password }: TAuthCredentialsValidator) => {
    signIn({ email, password });
  };

  return (
    <div className="flex items-center justify-center pt-20 md:pt-10  px-5 md:px-20 ">
      <div
        className="w-full max-w-md p-3 sm:p-4 lg:p-8 md:py-5 rounded-md text-white bg-slate-400 bg-opacity-20"
        id="sign-up"
      >
        <div className="flex flex-col items-center space-y-4">
          <img
            src={"/Logo.png"}
            alt="logo"
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
          />
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
          Sign in to your {isCreator ? 'creator' : ''}{' '}
              account
          </h1>
          <Link
              className={buttonVariants({
                variant: 'link',
                className: 'gap-1.5 text-white',
              })}
              href='/sign-up'>
              Don&apos;t have an account?
              <ArrowRight className='h-4 w-4' />
            </Link>
        </div>
        <hr className="w-full bg-gray-100 dark:bg-gray-700 h-1 mx-auto mt-3  border-0 rounded " />
        <div className="grid gap-4 mt-3">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-y-3 lg:gap-y-4">
              <div className="grid gap-y-1 lg:gap-y-2">
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
                {errors?.email && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>
              <div className="grid gap-1 py-2 ">
                <Label htmlFor="password">Password</Label>
                <Input
                  {...register("password")}
                  type="password"
                  className={cn(
                    "border p-2 text-black focus:outline-none focus:ring focus:border-black",
                    { "focus-visible:ring-red-500": errors.password }
                  )}
                  placeholder="Password"
                />
                {errors?.password && (
                  <p className="text-sm text-red-500">{errors.password.message}</p>
                )}
              </div>
              <Button disabled={isLoading}>
                  {isLoading && (
                    <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                  )}
                  Sign in
                </Button>
              
            </div>
          </form>
         <div className="relative">
            <div aria-hidden='true' className="absolute inset-0 flex items-center "  >
                <span className="w-full border-t"/>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
                <span  className=" text-white bg-backgroundColor-custom-color rounded-lg px-2" >or</span>
            </div>
         </div>
         {isCreator ? (
              <Button
                onClick={continueAsUser}
                variant='secondary'
                disabled={isLoading}>
                Continue as customer
              </Button>
            ) : (
              <Button
                onClick={continueAsCreator}
                variant='secondary'
                disabled={isLoading}>
                Continue as creator
              </Button>
            )}
        </div>
      </div>
    </div>
  );
};

export default Page;
