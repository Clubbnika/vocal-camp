'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useTabContext } from '@/components/ui/TabContext';

export default function HeroSection() {
  const router = useRouter();
  const { setActiveTab } = useTabContext();

  const handleButtonClick = () => {
    setActiveTab(2);
    router.push('#masterclass');
    const masterclassSection = document.getElementById('masterclass');
    if (masterclassSection) {
      masterclassSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-[1040px] w-full flex flex-col items-center p-4 mt-[-50px]">
        <Image
          src="/logo.webp"
          alt="Vocal Camp logo"
          width={300}
          height={300}
          className="mb-4"
          priority
        />
        <button
          onClick={handleButtonClick}
          className="inline-block text-black bg-white px-4 py-2 rounded-3xl mb-4 font-bold hover:bg-[#ff00be] transition duration-300"
        >
          ЗАПИСАТИСЯ НА БЕЗКОШТОВНИЙ МАЙСТЕР-КЛАС!
        </button>
      </div>
    </div>
  );
}