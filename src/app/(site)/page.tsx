import animationData from '../../../public/developer-animation.json';
import LottieComp from '@/components/lottie/Lottie';
import { BlogPost } from '@/types/BlogPost';
import { Home } from '@/types/Home';
import { Button } from '@components/button/Button';
import Image from 'next/image';
import Link from 'next/link';
import { BsTagFill } from 'react-icons/bs';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../lib/auth';

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div className="max-w-[1440px] w-[100%] min-h-[calc(100vh-60px)] flex items-center justify-center">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="text-center text-3xl font-extrabold">Analytics</h2>
        </div>
      </div>
    </div>
  );
}
