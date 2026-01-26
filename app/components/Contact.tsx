import Image from "next/image";

export default function Contact() {
  return (
    <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      {/* <svg
        aria-hidden="true"
        className="absolute inset-0 -z-10 size-full stroke-gray-200 mask-[radial-gradient(100%_100%_at_top_right,white,transparent)]"
      >
        <defs>
          <pattern
            x="50%"
            y={-64}
            id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M100 200V.5M.5 .5H200" fill="none" />
          </pattern>
        </defs>

        <svg x="50%" y={-64} className="overflow-visible fill-gray-50">
          <path
            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M299.5 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>

        <rect
          fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
          width="100%"
          height="100%"
          strokeWidth={0}
        />
      </svg> */}

      <div className="mx-auto max-w-xl lg:max-w-4xl">
        <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          Отримайте розрахунок утеплення пінополіуретаном
        </h2>

        <p className="mt-2 text-lg/8 text-gray-600">
          Кожен проєкт унікальний. Розкажіть про ваші потреби — і ми
          запропонуємо найкраще рішення з утеплення пінополіуретаном. Залиште
          контакти — уточнимо деталі й зробимо розрахунок.
        </p>

        <div className="mt-16 flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
          <form action="#" method="POST" className="lg:flex-auto">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm/6 font-semibold text-gray-900"
                >
                  Ваше ім&apos;я
                </label>
                <div className="mt-2.5">
                  <input
                    id="first-name"
                    name="first-name"
                    type="text"
                    autoComplete="given-name"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 backdrop-blur placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm/6 font-semibold text-gray-900"
                >
                  Прізвище
                </label>
                <div className="mt-2.5">
                  <input
                    id="last-name"
                    name="last-name"
                    type="text"
                    autoComplete="family-name"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 backdrop-blur placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm/6 font-semibold text-gray-900"
                >
                  Телефон
                </label>
                <div className="mt-2.5">
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    inputMode="tel"
                    placeholder="+380"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 backdrop-blur placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm/6 font-semibold text-gray-900"
                >
                  Електронна пошта
                </label>
                <div className="mt-2.5">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="email@example.com"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 backdrop-blur placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm/6 font-semibold text-gray-900"
                >
                  Повідомлення
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Напишіть, що потрібно утеплити та приблизну площу (якщо знаєте)."
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 backdrop-blur placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>

            <div className="mt-10">
              <button
                type="submit"
                className="block w-full rounded-md bg-[#00a0e3] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#0c91c9] focus-visible:outline focus-visible:outline-offset-2"
              >
                Надіслати повідомлення
              </button>
            </div>

            <p className="mt-4 text-sm/6 text-gray-500">
              Натискаючи «Надіслати», я погоджуюся з умовами{" "}
              <a
                href="#"
                className="whitespace-nowrap font-semibold text-[#00a0e3]"
              >
                політики конфіденційності
              </a>
              .
            </p>
          </form>

          <div className="lg:mt-6 lg:w-80 lg:flex-none">
            <Image
              src="/f.svg"
              alt="Foamix"
              width={180}
              height={40}
              className="h-12 w-auto"
              priority
            />

            <figure className="mt-10">
              <blockquote className="text-lg/8 font-semibold text-gray-900">
                <p>
                  “Хочете тепло без переплат? Залиште заявку — підкажемо
                  найкращий варіант утеплення ППУ і порахуємо під ваші задачі.
                  Швидкий зворотний зв’язок у робочий час.”
                </p>
              </blockquote>

              <figcaption className="mt-10 flex gap-x-6">
                <Image
                  width={96}
                  height={96}
                  alt="Ліана"
                  src="/photo-1550525811-e5869dd03032.avif"
                  className="size-12 flex-none rounded-full bg-gray-50 object-cover"
                />
                <div>
                  <div className="text-base font-semibold text-gray-900">
                    Ліана ХХХХ
                  </div>
                  <div className="text-sm/6 text-gray-600">
                    директорка Foamix
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
