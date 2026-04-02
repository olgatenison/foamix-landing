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
    <section
      id="contact"
      className="relative isolate bg-white px-6 py-20 lg:px-8"
      aria-labelledby="contact-title"
    >
      <div className="mx-auto max-w-xl lg:max-w-4xl">
        <h2
          id="contact-title"
          className="mx-auto max-w-xl text-center text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl"
        >
          Отримайте розрахунок утеплення пінополіуретаном
        </h2>

        <p
          id="contact-description"
          className="mx-auto mt-10 text-center text-lg/8 text-gray-600"
        >
          Кожен проєкт унікальний. Розкажіть про ваші потреби — і ми
          запропонуємо найкраще рішення з утеплення пінополіуретаном. Залиште
          контакти — уточнимо деталі й зробимо розрахунок.
        </p>

        <div className="mt-10 flex flex-col gap-16 sm:gap-y-20 lg:mt-16 lg:flex-row">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="lg:flex-auto"
            noValidate
            aria-labelledby="contact-title"
            aria-describedby="contact-description contact-status"
          >
            <div hidden aria-hidden="true">
              <label htmlFor="website">Не заповнюйте це поле</label>
              <input
                id="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                {...register("website")}
              />
            </div>

            <div className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm/6 font-semibold text-gray-900"
                >
                  Ваше ім&apos;я
                </label>
                <div className="mt-2.5">
                  <input
                    id="firstName"
                    {...register("firstName")}
                    type="text"
                    autoComplete="given-name"
                    required
                    aria-invalid={errors.firstName ? "true" : "false"}
                    aria-describedby={
                      errors.firstName ? "firstName-error" : undefined
                    }
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#00a0e3]"
                  />
                  {errors.firstName && (
                    <p
                      id="firstName-error"
                      className="mt-2 text-xs text-red-600"
                    >
                      {errors.firstName.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm/6 font-semibold text-gray-900"
                >
                  Прізвище
                </label>
                <div className="mt-2.5">
                  <input
                    id="lastName"
                    {...register("lastName")}
                    type="text"
                    autoComplete="family-name"
                    required
                    aria-invalid={errors.lastName ? "true" : "false"}
                    aria-describedby={
                      errors.lastName ? "lastName-error" : undefined
                    }
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#00a0e3]"
                  />
                  {errors.lastName && (
                    <p
                      id="lastName-error"
                      className="mt-2 text-xs text-red-600"
                    >
                      {errors.lastName.message}
                    </p>
                  )}
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
                    {...register("phone")}
                    type="tel"
                    autoComplete="tel"
                    inputMode="tel"
                    placeholder="+380"
                    required
                    aria-invalid={errors.phone ? "true" : "false"}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#00a0e3]"
                  />
                  {errors.phone && (
                    <p id="phone-error" className="mt-2 text-xs text-red-600">
                      {errors.phone.message}
                    </p>
                  )}
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
                    {...register("email")}
                    type="email"
                    autoComplete="email"
                    placeholder="email@example.com"
                    required
                    aria-invalid={errors.email ? "true" : "false"}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#00a0e3]"
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-2 text-xs text-red-600">
                      {errors.email.message}
                    </p>
                  )}
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
                    {...register("message")}
                    rows={4}
                    placeholder="Напишіть, що потрібно утеплити та приблизну площу (якщо знаєте)."
                    required
                    aria-invalid={errors.message ? "true" : "false"}
                    aria-describedby={
                      errors.message ? "message-error" : undefined
                    }
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#00a0e3]"
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-2 text-xs text-red-600">
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
                aria-disabled={status === "sending"}
                className="block w-full rounded-md bg-[#00a0e3] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-[#0c91c9] focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-[#00a0e3] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending"
                  ? "Надсилання..."
                  : "Надіслати повідомлення"}
              </button>
            </div>

            <div
              id="contact-status"
              className="mt-4 text-center text-xs"
              aria-live="polite"
              aria-atomic="true"
            >
              {status === "success" && (
                <p className="text-green-700">
                  Дякуємо! Повідомлення надіслано.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-600">
                  Помилка відправки. Спробуйте ще раз або зателефонуйте нам.
                </p>
              )}
            </div>

            <p className="mt-4 text-center text-sm/6 text-gray-500">
              Натискаючи «Надіслати», я погоджуюся з умовами{" "}
              <a
                href="#"
                className="whitespace-nowrap font-semibold text-[#00a0e3] underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-[#00a0e3]"
              >
                політики конфіденційності
              </a>
              .
            </p>
          </form>

          <aside
            className="lg:mt-6 lg:w-80 lg:flex-none"
            aria-label="Контактна інформація"
          >
            <Image
              src="/f.svg"
              alt="Foamix"
              width={180}
              height={40}
              className="h-12 w-auto"
              priority
            />

            <div className="mt-10">
              <div className="text-lg/8 font-semibold text-gray-900">
                <p>
                  Хочете тепло без переплат? Залиште заявку — підкажемо
                  найкращий варіант утеплення ППУ і порахуємо під ваші задачі.
                  Швидкий зворотний зв’язок у робочий час.
                </p>
              </div>

              <div className="mt-8">
                <div className="flex items-start gap-x-5">
                  <Image
                    width={96}
                    height={96}
                    alt="Представник Foamix"
                    src="/avatar.webp"
                    className="size-14 flex-none rounded-full object-cover ring-1 ring-gray-200"
                  />

                  <div>
                    <div className="space-y-1">
                      <a
                        href="tel:+380770120077"
                        className="flex items-center gap-2 text-base font-semibold text-gray-900 transition hover:text-[#00a0e3] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00a0e3]"
                      >
                        <span>+38 077 012 0077</span>
                      </a>

                      <a
                        href="mailto:Foamix2025@gmail.com"
                        className="flex items-center gap-2 text-sm text-gray-600 transition hover:text-[#00a0e3] focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-[#00a0e3]"
                      >
                        <span className="break-all">Foamix2025@gmail.com</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
