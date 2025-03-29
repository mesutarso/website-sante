import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <header className="relative w-full h-[70vh] overflow-hidden">
      <Image
        src="/images/cnsu-banner.jpeg"
        alt="Couverture Santé Universelle"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-blue-900/40 flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold text-center max-w-4xl">
          Couverture Santé Universelle en RDC
        </h1>
        <p className="text-xl md:text-2xl mt-4 text-center max-w-2xl">
          Au service de la santé pour tous
        </p>
      </div>
    </header>
  );
}

export default Hero;
