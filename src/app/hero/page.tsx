import Image from "next/image";
import hero from "/public/mike-kenneally-TD4DBagg2wE-unsplash.jpg";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Image
        src={hero}
        alt="hero"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <Link className="absolute mt-10 px-20 py-5 bg-green-500 text-white rounded-lg hover:bg-green-600"
        href="https://github.com/nazimboudeffa/ui-cool-nextjs-tailwind"
      >
        Start !
      </Link>
    </div>
  );
}