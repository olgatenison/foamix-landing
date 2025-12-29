import Image from "next/image";
export default function First() {
  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="rounded-[48px] bg-[#F6F3EF] px-8 py-12 lg:px-14 lg:py-16">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-wide text-gray-600">
              <span className="h-2 w-2 rounded-full bg-[#ff5a64]" />
              ППУ утеплення по Україні
            </div>

            <h1 className="mt-5 max-w-138.75 text-[46px] font-semibold leading-tight tracking-tight text-gray-900">
              Енергоефективне утеплення пінополіуретаном
            </h1>

            <p className="mt-4 max-w-130 text-[15px] leading-6 text-gray-600">
              Професійне ППУ утеплення будинків, дахів, ангарів, складів і
              промислових об’єктів{" "}
              <span className="font-semibold text-gray-900">
                по всій Україні
              </span>
              . Швидкий монтаж, економія на опаленні до 50% та гарантія якості.
            </p>

            <div className="mt-7 flex items-center gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full bg-[#ff5a64] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#ff3f4b]"
              >
                Розрахувати вартість
              </a>

              <a href="#" className="text-sm font-semibold text-gray-900">
                Замовити виїзд майстра <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className="mt-7 text-xs text-gray-500">
              Ціна —{" "}
              <span className="font-semibold text-gray-900">
                від 395 грн/м²
              </span>
            </div>

            {/* (опционально) LOGOS как у Mews */}
            <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-6 opacity-80">
              <span className="text-xs font-semibold tracking-wide text-gray-500">
                Працюємо з:
              </span>
              <span className="text-sm font-semibold text-gray-700">
                Котеджі
              </span>
              <span className="text-sm font-semibold text-gray-700">
                Склади
              </span>
              <span className="text-sm font-semibold text-gray-700">
                Ангари
              </span>
              <span className="text-sm font-semibold text-gray-700">
                Промоб’єкти
              </span>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-130">
              <div className="relative overflow-hidden rounded-bl-[48px] rounded-br-[48px] rounded-tl-[140px] rounded-tr-[140px] bg-[#ead8c8] shadow-sm">
                <Image
                  alt="ППУ утеплення"
                  src="/polyurethane.jpg"
                  width={1200}
                  height={1200}
                  className="h-105 w-full object-cover"
                  priority
                />

                {/* бейдж как “Small Hotels” */}
                <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-900 shadow-sm backdrop-blur">
                  Економія до 50%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
