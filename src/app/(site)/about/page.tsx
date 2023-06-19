import SanityPortableText from '@/components/portable-text/PortableText';

export default async function AboutPage() {
  return (
    <div className="w-[100%] flex flex-col items-center">
      <div className="max-w-[1024px] w-[100%] min-h-[calc(100vh-60px)] my-4 text-black-500">
        {/* <SanityPortableText content={aboutContent?.content} /> */}
      </div>
    </div>
  );
}
