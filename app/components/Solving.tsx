// import Image from "next/image";

// const posts = [
//   {
//     id: 1,
//     title:
//       "Будинок швидко втрачає тепло, взимку холодно, а витрати на газ чи електроенергію постійно ростуть.",
//     href: "#",
//     description:
//       "Утеплення пінополіуретаном (ППУ) зменшує тепловтрати до 70%, створюючи безшовний теплоізоляційний шар і значну економію на опаленні.",
//     imageUrl: "/close-up-man-using-rotary-switch.jpg",
//     date: "Великі рахунки за опалення",
//   },
//   {
//     id: 2,
//     title:
//       "Влітку в будинку спекотно, кондиціонери працюють постійно й споживають багато електроенергії.",
//     href: "#",
//     description:
//       "ППУ ефективно захищає будівлю від перегріву, підтримує комфортну температуру та знижує витрати на охолодження.",
//     imageUrl: "/woman-with-heat-holding-large-thermometer.jpg",
//     date: "Перегрів приміщень влітку",
//   },
//   {
//     id: 3,
//     title:
//       "Стіни «плачуть», з’являється пліснява, неприємний запах і шкода для здоров’я.",
//     href: "#",
//     description:
//       "Пінополіуретан не вбирає вологу, герметизує поверхні та запобігає утворенню конденсату й грибка.",
//     imageUrl: "/Condensation-image-1024x683.jpeg",
//     date: "Волога, грибок і пліснява",
//   },
//   {
//     id: 4,
//     title:
//       "Мінеральна вата осідає, пінопласт кришиться, утеплення потребує заміни через кілька років.",
//     href: "#",
//     description:
//       "ППУ служить 30–50 років, не деформується та не втрачає своїх теплоізоляційних властивостей.",
//     imageUrl: "/18.png",
//     date: "Часті ремонти та зношене утеплення",
//   },
//   {
//     id: 5,
//     title:
//       "Через стики, щілини та нерівності утеплення тепло виходить назовні.",
//     href: "#",
//     description:
//       "Напилення ППУ повністю закриває всі щілини, усуває містки холоду та забезпечує максимальну герметичність.",
//     imageUrl: "/2333.jpg",
//     date: "Містки холоду та протяги",
//   },
//   {
//     id: 6,
//     title: "Традиційне утеплення займає багато часу та потребує демонтажу.",
//     href: "#",
//     description:
//       "Утеплення ППУ виконується за 1 день без зайвих робіт і підходить для житлових, комерційних та промислових об’єктів.",
//     imageUrl: "/11.png",
//     date: "Довгий та складний монтаж",
//   },
// ];

// export default function Example() {
//   const [featured, ...rest] = posts;

//   return (
//     <section className="bg-white py-24 sm:py-32">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         {/* header */}
//         <div className="mx-auto max-w-2xl text-center">
//           <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 max-w-2xl pl-8">
//             Які проблеми вирішує утеплення пінополіуретаном
//           </h2>
//           <p className="mt-2 text-lg/8 text-gray-600">
//             6 найчастіших причин, чому в будинку некомфортно і ростуть витрати.
//           </p>
//         </div>

//         {/* FEATURED (первый пост) */}
//         <article className="mt-16">
//           <div className="grid items-center gap-24 lg:grid-cols-2">
//             {/* left */}
//             <div className="order-2 lg:order-1 ">
//               <div className="mt-6 inline-flex rounded-full bg-[#00a0e3] px-4 py-2 text-sm font-medium text-white">
//                 {featured.date}
//               </div>
//               <h3 className="text-3xl font-semibold text-gray-900  border-b border-gray-300 pb-12 pt-8">
//                 {featured.title}
//               </h3>

//               <p className="mt-auto pb-5 pt-4 text-base leading-6 text-gray-500">
//                 <span className="font-semibold text-[#00a0e3]">Рішення:</span>{" "}
//                 {featured.description}
//               </p>
//             </div>

//             {/* right */}
//             <div className="order-1 lg:order-2">
//               <div className="relative">
//                 {/* светлый блок-подложка как на скрине */}
//                 <div
//                   aria-hidden="true"
//                   className="absolute -inset-x-6 -inset-y-6 rounded-3xl  lg:-inset-x-10"
//                 />
//                 <div className="relative overflow-hidden rounded-2xl ring-1 ring-inset ring-gray-900/10">
//                   <Image
//                     width={1200}
//                     height={700}
//                     src={featured.imageUrl}
//                     alt={featured.date}
//                     className="aspect-video w-full object-cover"
//                     sizes="(min-width: 1024px) 50vw, 100vw"
//                     priority
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </article>

//         {/* GRID (остальные) */}
//         <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
//           {rest.map((post) => (
//             <article
//               key={post.id}
//               className="group relative flex h-full flex-col border-b border-gray-300 pb-2"
//             >
//               <div className="relative w-full overflow-visible">
//                 <div className="absolute left-4 -top-4 z-10 rounded-full bg-[#00a0e3] px-4 py-2 text-sm font-medium text-white shadow-md">
//                   {post.date}
//                 </div>

//                 <div className="overflow-hidden rounded-2xl bg-gray-100">
//                   <Image
//                     width={800}
//                     height={450}
//                     src={post.imageUrl}
//                     alt={post.date}
//                     className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
//                     sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
//                   />
//                 </div>

//                 <div
//                   aria-hidden="true"
//                   className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"
//                 />
//               </div>

//               <div className="mt-6 flex flex-1 flex-col">
//                 <h3 className="text-lg font-semibold leading-6 text-gray-900  ">
//                   {post.title}
//                 </h3>

//                 <p className="mt-auto pb-5 pt-4 text-base leading-6 text-gray-500">
//                   <span className="font-semibold text-[#00a0e3]">Рішення:</span>{" "}
//                   {post.description}
//                 </p>
//               </div>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import Image from "next/image";

const posts = [
  {
    id: 1,
    title:
      "Будинок швидко втрачає тепло, взимку холодно, а витрати на газ чи електроенергію постійно ростуть.",
    href: "#",
    description:
      "Утеплення пінополіуретаном (ППУ) зменшує тепловтрати до 70%, створюючи безшовний теплоізоляційний шар і значну економію на опаленні.",
    imageUrl: "/close-up-man-using-rotary-switch.jpg",
    date: "Великі рахунки за опалення",
  },
  {
    id: 2,
    title:
      "Влітку в будинку спекотно, кондиціонери працюють постійно й споживають багато електроенергії.",
    href: "#",
    description:
      "ППУ ефективно захищає будівлю від перегріву, підтримує комфортну температуру та знижує витрати на охолодження.",
    imageUrl: "/woman-with-heat-holding-large-thermometer.jpg",
    date: "Перегрів приміщень влітку",
  },
  {
    id: 3,
    title:
      "Стіни «плачуть», з’являється пліснява, неприємний запах і шкода для здоров’я.",
    href: "#",
    description:
      "Пінополіуретан не вбирає вологу, герметизує поверхні та запобігає утворенню конденсату й грибка.",
    imageUrl: "/Condensation-image-1024x683.jpeg",
    date: "Волога, грибок і пліснява",
  },
  {
    id: 4,
    title:
      "Мінеральна вата осідає, пінопласт кришиться, утеплення потребує заміни через кілька років.",
    href: "#",
    description:
      "ППУ служить 30–50 років, не деформується та не втрачає своїх теплоізоляційних властивостей.",
    imageUrl: "/18.png",
    date: "Часті ремонти та зношене утеплення",
  },
  {
    id: 5,
    title:
      "Через стики, щілини та нерівності утеплення тепло виходить назовні.",
    href: "#",
    description:
      "Напилення ППУ повністю закриває всі щілини, усуває містки холоду та забезпечує максимальну герметичність.",
    imageUrl: "/2333.jpg",
    date: "Містки холоду та протяги",
  },
  {
    id: 6,
    title: "Традиційне утеплення займає багато часу та потребує демонтажу.",
    href: "#",
    description:
      "Утеплення ППУ виконується за 1 день без зайвих робіт і підходить для житлових, комерційних та промислових об’єктів.",
    imageUrl: "/11.png",
    date: "Довгий та складний монтаж",
  },
];

export default function Solving() {
  const [featured, ...rest] = posts;

  return (
    <section className=" py-20 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 max-w-2xl pl-8">
            Які проблеми вирішує утеплення пінополіуретаном
          </h2>
          <p className="mt-2 text-lg/8 text-gray-600">
            6 найчастіших причин, чому в будинку некомфортно і ростуть витрати.
          </p>
        </div>

        {/* FEATURED (первый пост) */}
        <article className="mt-16">
          <div className="grid items-center gap-24 lg:grid-cols-2">
            {/* left */}
            <div className="order-2 lg:order-1">
              <div className="mt-6 inline-flex rounded-full bg-[#00a0e3] px-4 py-2 text-sm font-medium text-white">
                {featured.date}
              </div>

              <h3 className="text-3xl font-semibold text-gray-900 border-b border-gray-300 pb-12 pt-8">
                {featured.title}
              </h3>

              <p className="mt-auto pb-5 pt-4 text-base leading-6 text-gray-500">
                <span className="font-semibold text-[#00a0e3]">Рішення:</span>{" "}
                {featured.description}
              </p>
            </div>

            {/* right */}
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute -inset-x-6 -inset-y-6 rounded-3xl lg:-inset-x-10"
                />
                <div className="relative overflow-hidden rounded-2xl ring-1 ring-inset ring-gray-900/10">
                  <Image
                    width={1200}
                    height={700}
                    src={featured.imageUrl}
                    alt={featured.date}
                    className="aspect-video w-full object-cover"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* GRID (остальные) */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {rest.map((post) => (
            <article
              key={post.id}
              className="group relative flex h-full flex-col border-b border-gray-300 pb-2"
            >
              {/* верх (картинка) */}
              <div className="relative w-full overflow-visible">
                <div className="absolute left-4 -top-4 z-10 rounded-full bg-[#00a0e3] px-4 py-2 text-sm font-medium text-white shadow-md">
                  {post.date}
                </div>

                <div className="overflow-hidden rounded-2xl bg-gray-100">
                  <Image
                    width={800}
                    height={450}
                    src={post.imageUrl}
                    alt={post.date}
                    className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"
                />
              </div>

              {/* низ (контент) */}
              <div className="mt-6 flex flex-1 flex-col">
                <h3 className="text-lg font-semibold leading-6 text-gray-900">
                  {post.title}
                </h3>

                <p className="mt-auto pb-5 pt-4 text-base leading-6 text-gray-500">
                  <span className="font-semibold text-[#00a0e3]">Рішення:</span>{" "}
                  {post.description}
                </p>
              </div>
            </article>
          ))}

          {/* CTA карточка в пустую 6-ю ячейку */}
          <article className="relative flex h-full flex-col items-end justify-end  px-8 py-12 text-right ">
            <h3 className="text-2xl font-semibold tracking-tight text-gray-900">
              Готові утеплити будинок
              <br className="hidden sm:block" />
              без зайвих витрат?
            </h3>

            <a
              href="#consultation"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-[#00a0e3] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
            >
              Отримати розрахунок
            </a>

            <p className="mt-6 max-w-sm text-60 leading-6 text-gray-500">
              Розрахуємо вартість і підберемо оптимальну товщину ППУ під ваш
              об’єкт.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
