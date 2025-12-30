import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center pt-2 pb-3 px-6">
        <Image
          src="/f.svg"
          alt="Foamix"
          width={180}
          height={40}
          className="h-10  object-contain "
          priority
        />
      </div>
    </header>
  );
}
