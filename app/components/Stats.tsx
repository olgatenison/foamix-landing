import Image from "next/image";

const stats = [
  {
    id: 1,
    value: "Прозора ціна",
    description:
      "Прозора ціна на утеплення ППУ формується виключно за фактом використаного матеріалу. Оплата здійснюється за реальний об’єм пінополіуретану, використаного на вашому об’єкті, з урахуванням фактичній товщини шару та особливостей поверхні. Це гарантує чесний розрахунок без прихованих витрат і переплат.",
  },
  {
    id: 2,
    value: "Швидке виконання",
    description:
      "Швидко напилюємо ППУ та закриваємо об’єкт у найкоротші терміни (залежно від площі). Працюємо організовано: підготовка, нанесення та прибирання — без зайвих затримок. Мінімум простою для вашого будинку або бізнесу.",
  },
  {
    id: 3,
    value: "Довгий ефект",
    description:
      "Безшовний шар тримає тепло, не боїться вологи та служить роками без просідання. ППУ щільно прилягає до поверхні й перекриває містки холоду, тому утеплення працює стабільно по всій площі. Результат відчувається одразу після нанесення.",
  },
  {
    id: 4,
    value: "Економія тепла",
    description:
      "Менше тепловтрат — менші рахунки за опалення та кондиціювання. Утеплення зменшує продування й втрати через щілини, а температура в приміщенні тримається рівніше. Влітку — прохолодніше, взимку — тепліше без перевитрат.",
  },
];

export default function StatsSection() {
  return (
    <section className="py-6 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 border-b border-t border-gray-300">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
          {/* LEFT: 5/12 */}
          <div className="lg:col-span-5">
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900">
              Чому нам довіряють?
            </h3>
          </div>

          {/* RIGHT: 7/12 (шире) */}
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 text-gray-900 sm:grid-cols-2 sm:gap-y-16 lg:col-span-7">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col gap-y-3  pl-6">
                <dd className="order-first flex items-center gap-3 text-3xl font-semibold tracking-tight">
                  <Image
                    src="/avatar.webp"
                    alt="Логотип"
                    width={24}
                    height={24}
                    className="h-6 w-6 rounded-md object-cover"
                    priority
                  />
                  <span>{stat.value}</span>
                </dd>

                <dt className="text-sm/6 text-gray-600">{stat.description}</dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
