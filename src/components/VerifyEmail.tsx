"use client"

import { trpc } from "@/trpc/client"
import { Loader2, XCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { buttonVariants } from "./ui/button"

interface VerifyEmailProps {
    token:string
}

const VerifyEmail = ({token}:VerifyEmailProps) => {
 
    const {data,isLoading,isError} = trpc.auth.verifyEmail.useQuery({
        token,
    })
    if(isError){
        return <div className="flex flex-col items-center gap-2 " >
            <XCircle className="h-8 w-8 text-red-600" />
            <h3 className="font-semibold text-xl text-white" >
                There was a Problem
            </h3>
            <p className="text-muted-foreground text-sm text-center " >
                This token is not valid or might me expired.
                Please try again.
            </p>
        </div>
    }
    if(data?.success){
        return <div className="flex h-full flex-col items-center justify-center" >
            <div className=" relative mb-3 h-40 w-28 text-muted-foreground">
                <Image src='/Hello.gif' fill alt="all set Gif"/>
            </div>
            <h3 className="font-semibold text-2xl text-white  " >You&apos;re All set</h3>
            <p className="text-muted-foreground ml-1" >Thank you for verifying Your Email</p>
            <Link className={buttonVariants({className:'mt-4'})}  href='/sign-in' >sign-in</Link>
        </div>
    }
    if(isLoading){
       return <div className="  flex flex-col items-center gap-2 " >
            <Loader2 className="animate-spin h-8 w-8 text-red-600" />
            <h3 className="font-semibold text-xl text-white" >
                verifying.....
            </h3>
            <p className="text-muted-foreground text-sm text-center " >
                This Won&apos;t take to long
            </p>
        </div>
    }

}

export default VerifyEmail