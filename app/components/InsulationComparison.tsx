"use client";

import Image from "next/image";
import { useState } from "react";

const items = [
  { mm: 25, name: "Пінополіуретан", pb: 10 },
  { mm: 60, name: "Пінопласт", pb: 14 },
  { mm: 70, name: "Пробка", pb: 14 },
  { mm: 80, name: "Мінеральна вата", pb: 16 },
  { mm: 140, name: "Дерево", pb: 26 },
  { mm: 250, name: "Пінобетон", pb: 34 },
  { mm: 650, name: "Цегла", pb: 0 },
];

export default function InsulationComparison() {
  const [hovered, setHovered] = useState<number | null>(null);
  const showBadge = hovered === 25;

  return (
    <section className="w-full">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="md:pt-12 pb-8">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 text-balance md:text-center max-w-2xl mx-auto">
            Чому <span className="text-[#00a0e3]">пінополіуретан</span> зберігає
            тепло краще?
          </h2>
        </div>
        <div className="flex justify-center items-end border-b border-gray-200 pb-6 lg:flex-row flex-col gap-10">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 text-balance lg:max-w-[320px] mx-auto">
            Порівняння теплопровідності утеплювачів
          </h2>
          <p className="mt-8 text-balance text-lg font-medium text-gray-500 max-w-xl mx-auto">
            Низька теплопровідність пінополіуретану робить ППУ одним із
            найефективніших утеплювачів на ринку.{" "}
            <span className="block">
              <span className="font-bold text-gray-900">
                Це довготривале та вигідне рішення
              </span>{" "}
              для будь-якого типу будівлі.
            </span>
          </p>
        </div>

        <div className="mt-8 mx-auto w-full max-w-150">
          {/* ── MOBILE: готовая картинка ── */}
          <div className="md:hidden">
            <Image
              src="/all-mob.jpg"
              alt="Порівняння товщини матеріалів для теплоізоляції"
              width={1200}
              height={900}
              className="block h-auto w-full"
              priority
            />
          </div>

          {/* ── DESKTOP: интерактив ── */}
          <div className="relative hidden md:block">
            <Image
              src="/all-lines.png"
              alt="Порівняння товщини матеріалів для теплоізоляції"
              width={1100}
              height={750}
              className="block h-auto w-full select-none"
              priority
            />
            <div className="absolute top-5 left-90 w-90">
              <ul onMouseLeave={() => setHovered(null)}>
                {items.map((it, idx) => {
                  const isFirst = idx === 0;
                  const isRowHovered = hovered === it.mm;
                  const nameColor = !isRowHovered
                    ? "text-gray-300"
                    : isFirst
                      ? "text-[#00a0e3]"
                      : "text-gray-900";
                  return (
                    <li
                      key={it.mm}
                      style={{ paddingBottom: it.pb }}
                      className="grid grid-cols-[50px_1fr] items-baseline gap-4"
                    >
                      <span className="text-sm font-semibold text-gray-900">
                        {it.mm} мм
                      </span>
                      <span
                        onMouseEnter={() => setHovered(it.mm)}
                        className={[
                          "text-sm cursor-default inline-block",
                          "transition-all duration-300 ease-out",
                          nameColor,
                          isRowHovered
                            ? "translate-x-1 font-semibold"
                            : "font-medium",
                        ].join(" ")}
                      >
                        {it.name}
                      </span>
                    </li>
                  );
                })}
              </ul>
              <div
                className={[
                  "mt-6 flex flex-col items-center gap-1 -ml-40",
                  "transition-all duration-200 ease-out",
                  showBadge
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-1 pointer-events-none",
                ].join(" ")}
              >
                <span className="inline-flex w-fit rounded-2xl bg-[#00a0e3] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow-lg mb-2">
                  Ефективна теплоізоляція
                </span>
                <span className="max-w-70 text-center text-sm font-medium text-balance leading-snug text-gray-500">
                  Максимальний ефект при мінімальній товщині покриття
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
