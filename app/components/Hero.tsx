import Image from "next/image";

export default function Hero() {
  return (
    <div className=" bg-blue-50 lg:mx-8 lg:rounded-b-[90px]">
      <div className="mx-auto max-w-7xl px-6 pb-10 md:pb-18 pt-10 lg:flex lg:items-center lg:gap-6 lg:justify-between justify-self-start">
        {/* LEFT */}
        <div className="mx-auto max-w-xl shrink-0">
          <div className="inline-flex items-center gap-4 pb-10">
            <Image
              src="/avatar.webp"
              alt="Логотип"
              width={24}
              height={24}
              className="h-6 w-6 rounded-md object-cover"
              priority
            />
            <span className="text-pretty text-lg font-medium text-gray-500 ">
              Економія на опаленні до 50%
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 text-balance">
            Енергоефективне утеплення пінополіуретаном
          </h1>

          <p className="mt-8 sm:mt-12 text-balance text-lg font-medium text-gray-500">
            Професійне ППУ утеплення будинків, дахів, ангарів, складів і
            промислових об&apos;єктів{" "}
            <span className="font-bold text-gray-900">по всій Україні</span>
          </p>

          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="#"
              className="bg-[#00a0e3] px-5 py-4 text-sm font-semibold text-white shadow-sm hover:bg-[#028fcc] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00a0e3] uppercase rounded-full"
            >
              замовити прорахунок
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="mt-12 lg:mt-0 w-full">
          <div className="relative mx-auto w-full lg:max-w-130 lg:ml-auto ">
            <Image
              alt="ППУ утеплення"
              src="/polyurethane.jpg"
              width={1500}
              height={1500}
              className="w-full h-70 sm:h-90 lg:h-130 object-cover rounded-2xl sm:rounded-4xl lg:rounded-[56px] bg-gray-50 shadow-sm"
              priority
            />

            {/* BADGE */}
            <div
              className="
    absolute
    top-70 sm:top-0 lg:top-1/2
    left-1/2 sm:left-120 lg:left-auto
    right-auto lg:right-10
    -translate-x-1/2 lg:translate-x-1/2
    -translate-y-1/2
    z-12
    text-center px-4
    bg-[#00a0e3]
    rounded-full h-40 w-40
    text-white
    flex flex-col justify-center items-center
    shadow-lg
  "
            >
              <div className="text-base">Ціна від</div>
              <span className="block font-bold text-5xl leading-none">395</span>
              <div className="text-base">грн/м²</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
