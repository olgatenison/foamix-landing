"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const ContactSchema = z.object({
  firstName: z.string().min(2, "Вкажіть ім'я (мінімум 2 символи)"),
  lastName: z.string().min(2, "Вкажіть прізвище (мінімум 2 символи)"),
  phone: z
    .string()
    .min(7, "Вкажіть телефон")
    .max(30, "Занадто довгий телефон")
    .regex(/^[0-9+()\-\s]+$/, "Некоректний формат телефону"),
  email: z.string().email("Некоректна електронна пошта"),
  message: z.string().min(10, "Повідомлення має бути мінімум 10 символів"),
  // honeypot
  website: z.string().optional(),
});

type ContactFormValues = z.infer<typeof ContactSchema>;

export default function Contact() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const defaultValues = useMemo<ContactFormValues>(
    () => ({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      message: "",
      website: "",
    }),
    [],
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(ContactSchema),
    defaultValues,
    mode: "onTouched",
  });

  const onSubmit = async (values: ContactFormValues) => {
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      reset(defaultValues);
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="relative isolate bg-white px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-xl lg:max-w-4xl">
        <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl max-w-xl text-center mx-auto">
          Отримайте розрахунок утеплення пінополіуретаном
        </h2>

        <p className="mt-10 text-lg/8 text-gray-600 text-center mx-auto">
          Кожен проєкт унікальний. Розкажіть про ваші потреби — і ми
          запропонуємо найкраще рішення з утеплення пінополіуретаном. Залиште
          контакти — уточнимо деталі й зробимо розрахунок.
        </p>

        <div className="mt-10 lg:mt-16 flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
          <form onSubmit={handleSubmit(onSubmit)} className="lg:flex-auto">
            {/* honeypot (скрыто) */}
            <input
              type="text"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              {...register("website")}
            />

            <div className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
              <div>
                <label className="block text-sm/6 font-semibold text-gray-900">
                  Ваше ім&apos;я
                </label>
                <div className="mt-2.5">
                  <input
                    {...register("firstName")}
                    type="text"
                    autoComplete="given-name"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 backdrop-blur placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#00a0e3]"
                  />
                  {errors.firstName && (
                    <p className="mt-2 text-xs text-red-600">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm/6 font-semibold text-gray-900">
                  Прізвище
                </label>
                <div className="mt-2.5">
                  <input
                    {...register("lastName")}
                    type="text"
                    autoComplete="family-name"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 backdrop-blur placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#00a0e3]"
                  />
                  {errors.lastName && (
                    <p className="mt-2 text-xs text-red-600">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm/6 font-semibold text-gray-900">
                  Телефон
                </label>
                <div className="mt-2.5">
                  <input
                    {...register("phone")}
                    type="tel"
                    autoComplete="tel"
                    inputMode="tel"
                    placeholder="+380"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 backdrop-blur placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#00a0e3]"
                  />
                  {errors.phone && (
                    <p className="mt-2 text-xs text-red-600">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm/6 font-semibold text-gray-900">
                  Електронна пошта
                </label>
                <div className="mt-2.5">
                  <input
                    {...register("email")}
                    type="email"
                    autoComplete="email"
                    placeholder="email@example.com"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 backdrop-blur placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#00a0e3]"
                  />
                  {errors.email && (
                    <p className="mt-2 text-xs text-red-600">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm/6 font-semibold text-gray-900">
                  Повідомлення
                </label>
                <div className="mt-2.5">
                  <textarea
                    {...register("message")}
                    rows={4}
                    placeholder="Напишіть, що потрібно утеплити та приблизну площу (якщо знаєте)."
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 backdrop-blur placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#00a0e3]"
                  />
                  {errors.message && (
                    <p className="mt-2 text-xs text-red-600">
                      {errors.message.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-5">
              <button
                type="submit"
                disabled={status === "sending"}
                className="block w-full rounded-md bg-[#00a0e3] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#0c91c9] focus-visible:outline focus-visible:outline-offset-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending"
                  ? "Надсилання..."
                  : "Надіслати повідомлення"}
              </button>
            </div>

            {status === "success" && (
              <p className="mt-4 text-xs text-green-700 text-center">
                Дякуємо! Повідомлення надіслано.
              </p>
            )}
            {status === "error" && (
              <p className="mt-4 text-xs text-red-600 text-center">
                Помилка відправки. Спробуйте ще раз або зателефонуйте нам.
              </p>
            )}

            <p className="mt-4 text-sm/6 text-gray-500 text-center">
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

// import Image from "next/image";

// export default function Contact() {
//   return (
//     <div className="relative isolate bg-white px-6 py-20  lg:px-8">
//       <div className="mx-auto max-w-xl lg:max-w-4xl">
//         <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl max-w-xl text-center mx-auto">
//           Отримайте розрахунок утеплення пінополіуретаном
//         </h2>

//         <p className="mt-10 text-lg/8 text-gray-600 text-center mx-auto">
//           Кожен проєкт унікальний. Розкажіть про ваші потреби — і ми
//           запропонуємо найкраще рішення з утеплення пінополіуретаном. Залиште
//           контакти — уточнимо деталі й зробимо розрахунок.
//         </p>

//         <div className="mt-10 lg:mt-16 flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
//           <form action="#" method="POST" className="lg:flex-auto">
//             <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
//               <div>
//                 <label
//                   htmlFor="first-name"
//                   className="block text-sm/6 font-semibold text-gray-900"
//                 >
//                   Ваше ім&apos;я
//                 </label>
//                 <div className="mt-2.5">
//                   <input
//                     id="first-name"
//                     name="first-name"
//                     type="text"
//                     autoComplete="given-name"
//                     className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 backdrop-blur placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#00a0e3]"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label
//                   htmlFor="last-name"
//                   className="block text-sm/6 font-semibold text-gray-900"
//                 >
//                   Прізвище
//                 </label>
//                 <div className="mt-2.5">
//                   <input
//                     id="last-name"
//                     name="last-name"
//                     type="text"
//                     autoComplete="family-name"
//                     className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 backdrop-blur placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#00a0e3]"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label
//                   htmlFor="phone"
//                   className="block text-sm/6 font-semibold text-gray-900"
//                 >
//                   Телефон
//                 </label>
//                 <div className="mt-2.5">
//                   <input
//                     id="phone"
//                     name="phone"
//                     type="tel"
//                     autoComplete="tel"
//                     inputMode="tel"
//                     placeholder="+380"
//                     className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 backdrop-blur placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#00a0e3]"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-sm/6 font-semibold text-gray-900"
//                 >
//                   Електронна пошта
//                 </label>
//                 <div className="mt-2.5">
//                   <input
//                     id="email"
//                     name="email"
//                     type="email"
//                     autoComplete="email"
//                     placeholder="email@example.com"
//                     className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 backdrop-blur placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#00a0e3]"
//                   />
//                 </div>
//               </div>

//               <div className="sm:col-span-2">
//                 <label
//                   htmlFor="message"
//                   className="block text-sm/6 font-semibold text-gray-900"
//                 >
//                   Повідомлення
//                 </label>
//                 <div className="mt-2.5">
//                   <textarea
//                     id="message"
//                     name="message"
//                     rows={4}
//                     placeholder="Напишіть, що потрібно утеплити та приблизну площу (якщо знаєте)."
//                     className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 backdrop-blur placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#00a0e3]"
//                     defaultValue={""}
//                   />
//                 </div>
//               </div>
//             </div>

//             <div className="mt-10">
//               <button
//                 type="submit"
//                 className="block w-full rounded-md bg-[#00a0e3] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#0c91c9] focus-visible:outline focus-visible:outline-offset-2"
//               >
//                 Надіслати повідомлення
//               </button>
//             </div>

//             <p className="mt-4 text-sm/6 text-gray-500 text-center">
//               Натискаючи «Надіслати», я погоджуюся з умовами{" "}
//               <a
//                 href="#"
//                 className="whitespace-nowrap font-semibold text-[#00a0e3]"
//               >
//                 політики конфіденційності
//               </a>
//               .
//             </p>
//           </form>

//           <div className="lg:mt-6 lg:w-80 lg:flex-none">
//             <Image
//               src="/f.svg"
//               alt="Foamix"
//               width={180}
//               height={40}
//               className="h-12 w-auto"
//               priority
//             />

//             <figure className="mt-10">
//               <blockquote className="text-lg/8 font-semibold text-gray-900">
//                 <p>
//                   “Хочете тепло без переплат? Залиште заявку — підкажемо
//                   найкращий варіант утеплення ППУ і порахуємо під ваші задачі.
//                   Швидкий зворотний зв’язок у робочий час.”
//                 </p>
//               </blockquote>

//               <figcaption className="mt-10 flex gap-x-6">
//                 <Image
//                   width={96}
//                   height={96}
//                   alt="Ліана"
//                   src="/photo-1550525811-e5869dd03032.avif"
//                   className="size-12 flex-none rounded-full bg-gray-50 object-cover"
//                 />
//                 <div>
//                   <div className="text-base font-semibold text-gray-900">
//                     Ліана ХХХХ
//                   </div>
//                   <div className="text-sm/6 text-gray-600">
//                     директорка Foamix
//                   </div>
//                 </div>
//               </figcaption>
//             </figure>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
