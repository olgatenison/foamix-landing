import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 pt-2 pb-3">
        <Link href="/" className="inline-flex" aria-label="Foamix — на головну">
          <Image
            src="/f.svg"
            alt="Foamix"
            width={180}
            height={40}
            className="h-10 object-contain"
            priority
          />
        </Link>

        <a
          href="tel:+380770120077"
          className="pt-2 flex flex-col items-start transition hover:opacity-80"
          aria-label="Зателефонувати до Foamix"
        >
          <span className="text-xs font-medium uppercase tracking-wide text-[#0581b6]">
            Зателефонуйте
          </span>
          <span className="text-base md:text-xl font-semibold text-gray-900">
            +38 077 012 0077
          </span>
        </a>
      </div>
    </header>
  );
}
