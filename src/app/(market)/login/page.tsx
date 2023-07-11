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

export default function Login() {
  const [providers, setProviders] = useState<Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null>(null);

  useEffect(() => {
    const fetchProviders = async () => {
      const res = await getProviders();
      setProviders(res);
    };
    fetchProviders();
  }, []);

  const { data: session, status } = useSession();

  if (session) {
    redirect('/');
  }
  return (
    <div>
      {providers != null &&
        Object.values(providers).map((provider) => {
          console.log('provider', provider.id);
          switch (provider.id) {
            case 'credentials':
              return (
                <div key={provider.name}>
                  <button onClick={() => signIn(provider.id)}>Sign in with {provider.name}</button>
                </div>
              );
            case 'github':
              return (
                <div key={provider.name}>
                  <button onClick={() => signIn(provider.id)}>Sign in with {provider.name}</button>
                </div>
              );
            default:
              return (
                <div key={provider.name}>
                  <button onClick={() => signIn(provider.id)}>Sign in with {provider.name}</button>
                </div>
              );
          }
        })}
    </div>
  );
}
