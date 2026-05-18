'use client';

import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-white">
      <div className="text-center">
        <div className="mb-[128px] w-full max-w-[320px] md:max-w-[1440px]">
          <Image
            src="/logo.png"
            alt="Musicamobile"
            width={1440}
            height={622}
            className="w-full h-auto"
            priority
          />
        </div>
        <a 
          href="mailto:info@musicamobile.com.br" 
          className="text-[20px] md:text-[48px] font-extrabold no-underline transition-colors"
          style={{ 
            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Rounded", "Segoe UI", Roboto, sans-serif', 
            textDecoration: 'none',
            color: '#6B7280'
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#1F2937'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#6B7280'}
        >
          info@musicamobile.com.br
        </a>
      </div>
    </main>
  );
}
