// import { providers, signIn, getSession, csrfToken } from 'next-auth/client';
'use client';
import {
  ClientSafeProvider,
  LiteralUnion,
  getProviders,
  signIn,
  useSession,
} from 'next-auth/react';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { useEffect, useState } from 'react';
import { BuiltInProviderType } from 'next-auth/providers';
import { redirect } from 'next/navigation';
import { GithubButton } from '@/components/social-login-buttons/Github';
import { GoogleButton } from '@/components/social-login-buttons/Google';
import { EmailButton } from '@/components/social-login-buttons/Email';
import { Input } from '@/components/form/input/Input';
import LottieComp from '@/components/lottie/Lottie';
import animationData from '../../../../public/dashboard.json';

export default function Login() {
  const [providers, setProviders] = useState<Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null>(null);

  const { data: session, status } = useSession();

  useEffect(() => {
    const fetchProviders = async () => {
      const res = await getProviders();
      setProviders(res);
    };
    fetchProviders();
  }, [session]);

  if (session) {
    redirect('/');
  }
  return (
    <div className="flex justify-center items-center w-[100%] h-[100vh] relative overflow-hidden">
      <div className="absolute opacity-10 top-[-38%] left-0 w-[100%]">
        <LottieComp animationData={animationData} />
      </div>
      <div className="flex flex-col space-y-0 shadow-4 p-10 pt-6  bg-white-500 rounded-md z-[1]">
        <h1 className="text-3xl font-bold leading-0">Welcome back!</h1>
        <div className="flex flex-col space-y-4">
          {providers == null && <p>Loading...</p>}
          {providers != null &&
            Object.values(providers).map((provider) => {
              switch (provider.id) {
                case 'email':
                  return (
                    <form
                      key={provider.name}
                      className="border-b-[1px] pb-6 mb-2 border-b-black-50 border-b-dashed flex flex-col space-y-4"
                      onSubmit={(e) => {
                        e.preventDefault();
                        signIn(provider.id, {
                          email: 'alyssadev30@gmail.com',
                        });
                      }}
                    >
                      <Input label="Enter your email address" type="email" required={true} />
                      <EmailButton type="submit" />
                    </form>
                  );
                case 'github':
                  return (
                    <div key={provider.name}>
                      <GithubButton onClick={() => signIn(provider.id)} />
                    </div>
                  );
                case 'google':
                  return (
                    <div key={provider.name}>
                      <GoogleButton onClick={() => signIn(provider.id)} />
                    </div>
                  );
                default:
                  return (
                    <div key={provider.name}>
                      <button onClick={() => signIn(provider.id)}>
                        Sign in with {provider.name}
                      </button>
                    </div>
                  );
              }
            })}
        </div>
      </div>
    </div>
  );
}
