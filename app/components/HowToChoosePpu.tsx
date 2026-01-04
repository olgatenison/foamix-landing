import Image from "next/image";

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M20 6L9 17l-5-5"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function HowToChoosePpu() {
  return (
    <section className="relative mx-6 bg-white ">
      <div className="absolute inset-x-0 top-0 h-1/3 bg-blue-50 rounded-b-[90px]" />
      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* LEFT */}
          <div className="relative mx-auto w-full max-w-130 lg:ml-auto lg:max-w-140">
            <Image
              width={600}
              height={600}
              src="/q.jpg"
              alt="Консультація щодо вибору ППУ"
              className="w-full h-70 sm:h-90 lg:h-130 object-cover rounded-2xl sm:rounded-4xl lg:rounded-[56px] bg-gray-50 shadow-sm"
            />
          </div>{" "}
          {/* RIGHT (image) */}
          <div className="p-3">
            <h2 className="text-5xl font-semibold tracking-tight text-gray-900 text-balance max-w-lg ">
              Як обрати пінополіуретан для утеплення?
            </h2>

            <p className="mt-8 text-base text-gray-700 max-w-xl">
              Вибір типу пінополіуретану залежить від:
            </p>

            <ul className="mt-12 space-y-4 text-gray-900">
              {[
                "умов вологості",
                "навантажень на поверхню",
                "необхідної теплоізоляції",
                "бюджету проєкту",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Image
                    src="/avatar.webp"
                    alt="Логотип"
                    width={24}
                    height={24}
                    className="h-6 w-6 rounded-md object-cover"
                    priority
                  />
                  <span className="text-base text-gray-800">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex gap-8 items-center ">
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="#"
                  className="bg-[#00a0e3] px-5 py-4 text-sm font-semibold text-white shadow-sm hover:bg-[#028fcc] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00a0e3] uppercase rounded-full srink-0"
                >
                  Отримати консультацію
                </a>
              </div>
              <p className="mt-8 text-sm text-gray-700 max-w-[320px]">
                Наші спеціалісти допоможуть підібрати оптимальний тип ППУ для
                вашого об’єкта.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
