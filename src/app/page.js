"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <div className="flex items-center justify-center mt-40 w-full">
        <div className="w-full max-w-sm space-y-6 p-4 bg-white rounded-lg shadow-md">
          <button 
            onClick={()=> router.push('/select-time')}
            className="w-full py-6 mt-4 bg-[#00a38f] text-white hover:bg-blue-600 rounded-md font-semibold text-2xl relative z-[1000]">
            SCHEDULE A SHOP
          </button>
          <button
            onClick={()=> router.push('/login')}
            className="w-full py-6 mt-4 bg-blue-900 text-white hover:bg-blue-600 rounded-md font-semibold text-2xl relative z-[1000]">
            START A SHOP
          </button>
        </div>
      </div>
    </>
  );
}
