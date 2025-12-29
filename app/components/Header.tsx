import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center py-4 ">
        <Image
          src="/Logo_b.webp"
          alt="Foamix"
          width={230}
          height={72}
          className="h-14  object-contain "
          priority
        />
      </div>
    </header>
  );
}
