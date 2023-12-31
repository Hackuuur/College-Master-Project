import VerifyEmail from "@/components/VerifyEmail";
import Image from "next/image";

interface PageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

const VerifyEmailPage = ({ searchParams }: PageProps) => {
  const token = searchParams.token;
  const toEmail = searchParams.to;

  return (
    <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">

        {token && typeof token === 'string' ? (
          <div className='grid gap-6'>
            <VerifyEmail token={token} />
          </div>
        ) : (
          <div className="flex h-full flex-col items-center justify-center space-y-4">

            <div className="relative mb-4 h-60 w-60">
              <Image src="/img1.gif" alt="Gmail img" layout="fill" objectFit="cover" />
            </div>

            <h3 className="font-semibold text-2xl text-white">Check Your Email</h3>

            {toEmail ? (
              <p className="text-muted-foreground text-center">
                We&apos;ve sent a verification link to
                <span className="font-semibold block mt-1">{toEmail}</span>.
              </p>
            ) : (
              <p className='text-muted-foreground text-center'>
                We&apos;ve sent a verification link to your email.
              </p>
            )}

            {/* Add more styled content as needed */}
            {/* Example: */}
          </div>
        )}
      </div>
    </div>
  );
};

export default VerifyEmailPage;
