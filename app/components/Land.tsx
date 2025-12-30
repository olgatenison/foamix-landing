import {
  ArrowPathIcon,
  ChevronRightIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import {
  BoltIcon,
  CalendarDaysIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Testimonials from "./Testimonials";
import Questions from "./Questions";
import Trust from "./Trust";

// const primaryFeatures = [
//   {
//     name: "Server monitoring",
//     description:
//       "Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia. Sit nobis consequatur dolores incidunt.",
//     href: "#",
//     icon: BoltIcon,
//   },
//   {
//     name: "Collaborate",
//     description:
//       "Vero eum voluptatem aliquid nostrum voluptatem. Vitae esse natus. Earum nihil deserunt eos quasi cupiditate. A inventore et molestiae natus.",
//     href: "#",
//     icon: UsersIcon,
//   },
//   {
//     name: "Task scheduling",
//     description:
//       "Et quod quaerat dolorem quaerat architecto aliquam accusantium. Ex adipisci et doloremque autem quia quam. Quis eos molestiae at iure impedit.",
//     href: "#",
//     icon: CalendarDaysIcon,
//   },
// ];
const secondaryFeatures = [
  {
    name: "Економія на опаленні до 50%",
    description:
      "ППУ суттєво зменшує тепловтрати будинку. Завдяки високій теплоізоляції витрати на опалення взимку та охолодження влітку помітно знижуються.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Безшовне утеплення без містків холоду",
    description:
      "Напилення ППУ створює суцільний теплоізоляційний шар без швів, тріщин і зазорів — мінімум втрат тепла.",
    icon: LockClosedIcon,
  },
  {
    name: "Швидкий монтаж утеплення ППУ",
    description:
      "Терміни залежать від площі та складності об’єкта, але зазвичай роботи займають від 1 дня — без демонтажу та «мокрих» процесів.",
    icon: ArrowPathIcon,
  },
  {
    name: "Підходить для різних типів об’єктів",
    description:
      "Застосовується для будинків і котеджів, дахів та мансард, перекриттів, ангарів і складів, а також промислових і комерційних приміщень.",
    icon: FingerPrintIcon,
  },
  {
    name: "Довговічність — понад 30 років",
    description:
      "ППУ не просідає, не кришиться та зберігає теплоізоляційні властивості десятиліттями.",
    icon: Cog6ToothIcon,
  },
  {
    name: "Захист від вологи та плісняви",
    description:
      "Жорсткий пінополіуретан майже не вбирає воду, зменшує ризик конденсату та перешкоджає розвитку грибка.",
    icon: ServerIcon,
  },
  {
    name: "Додаткова звукоізоляція",
    description:
      "Шар ППУ допомагає знизити рівень шуму з вулиці та з сусідніх приміщень.",
    icon: FingerPrintIcon,
  },
  {
    name: "Безпечний та екологічний матеріал",
    description:
      "Після застигання ППУ не виділяє шкідливих речовин і підходить для використання в житлових приміщеннях.",
    icon: Cog6ToothIcon,
  },
  {
    name: "Вигідніше за традиційні утеплювачі",
    description:
      "Один шар ППУ може замінити кілька шарів мінеральної вати чи пінопласту — менше витрат і стабільніший результат.",
    icon: ServerIcon,
  },
];

const stats = [
  { id: 1, name: "Приватні будинки / котеджі", value: "8,000+" },
  { id: 2, name: "Дачі, гаражі, господарські споруди", value: "900m+" },
  { id: 3, name: "Комерційні приміщення, склади", value: "99.9%" },
  { id: 4, name: "PНовобудови та реконструкція", value: "12m" },
];
// const footerNavigation = {
//   solutions: [
//     { name: "Hosting", href: "#" },
//     { name: "Data Services", href: "#" },
//     { name: "Uptime Monitoring", href: "#" },
//     { name: "Enterprise Services", href: "#" },
//   ],
//   support: [
//     { name: "Pricing", href: "#" },
//     { name: "Documentation", href: "#" },
//     { name: "Guides", href: "#" },
//     { name: "API Reference", href: "#" },
//   ],
//   company: [
//     { name: "About", href: "#" },
//     { name: "Blog", href: "#" },
//     { name: "Jobs", href: "#" },
//     { name: "Press", href: "#" },
//     { name: "Partners", href: "#" },
//   ],
//   legal: [
//     { name: "Claim", href: "#" },
//     { name: "Privacy", href: "#" },
//     { name: "Terms", href: "#" },
//   ],
//   social: [
//     {
//       name: "Facebook",
//       href: "#",
//       icon: (props) => (
//         <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
//           <path
//             fillRule="evenodd"
//             d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
//             clipRule="evenodd"
//           />
//         </svg>
//       ),
//     },
//     {
//       name: "Instagram",
//       href: "#",
//       icon: (props) => (
//         <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
//           <path
//             fillRule="evenodd"
//             d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
//             clipRule="evenodd"
//           />
//         </svg>
//       ),
//     },
//     {
//       name: "X",
//       href: "#",
//       icon: (props) => (
//         <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
//           <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
//         </svg>
//       ),
//     },
//     {
//       name: "GitHub",
//       href: "#",
//       icon: (props) => (
//         <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
//           <path
//             fillRule="evenodd"
//             d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
//             clipRule="evenodd"
//           />
//         </svg>
//       ),
//     },
//     {
//       name: "YouTube",
//       href: "#",
//       icon: (props) => (
//         <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
//           <path
//             fillRule="evenodd"
//             d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
//             clipRule="evenodd"
//           />
//         </svg>
//       ),
//     },
//   ],
// };

export default function Land() {
  return (
    <div className="bg-white">
      <main>
        {/* Hero section */}
        {/* <div className=" overflow-hidden bg-blue-50 mx-8 rounded-b-[90px]">
          <div className="mx-auto max-w-7xl px-6 pb-24 pt-20 lg:flex justify-center ">
            <div className="mx-auto max-w-2xl shrink-0 ">
              <div className="inline-flex items-center gap-4 pb-10">
                <Image
                  src="/avatar.webp"
                  alt="Логотип"
                  width={24}
                  height={24}
                  className="h-6 w-6 rounded-md object-cover"
                  priority
                />
                <span className="text-pretty text-lg font-medium text-gray-500">
                  Економія на опаленні до 50%
                </span>
              </div>
              <h1 className=" text-6xl font-semibold tracking-tight text-gray-900 text-balance">
                Енергоефективне утеплення пінополіуретаном
              </h1>
              <p className="mt-12 text-balance text-lg font-medium text-gray-500 ">
                Професійне ППУ утеплення будинків, дахів, ангарів, складів і
                промислових об’єктів{" "}
                <span className="font-bold text-gray-900">по всій Україні</span>
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="#"
                  className=" bg-[#00a0e3] px-5 py-4 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 uppercase rounded-4xl"
                >
                  замовити прорахунок
                </a>
              </div>
            </div>
            <div className="w-full">
              <div className="relative mx-auto w-full max-w-130 lg:ml-auto lg:max-w-140">
                <Image
                  alt="ППУ утеплення"
                  src="/polyurethane.jpg"
                  width={1500}
                  height={1500}
                  className="
        w-full
        h-70 sm:h-90 lg:h-130
        object-cover
        rounded-2xl sm:rounded-4xl lg:rounded-[56px]
        bg-gray-50
        shadow-sm
      "
                  priority
                />
              </div>

              <div className="bg-[#00a0e3] rounded-full w-40 h-40 text-white flex flex-col items-center justify-center absolute top-0 right-0 lg:top-auto lg:right-10 lg:bottom-[-80px] shadow-lg translate-x-1/2 -translate-y-1/2 lg:translate-x-0 lg:translate-y-0">
                Ціна від
                <span className="block font-bold text-5xl">395</span>
                грн/м2
              </div>
            </div>
          </div>
        </div> */}

        {/* Logo cloud */}
        {/* <div className="mx-auto mt-8 max-w-7xl px-6 sm:mt-16 lg:px-8">
          <h2 className="text-center text-lg/8 font-semibold text-gray-900">
            The world’s most innovative companies use our app
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              alt="Transistor"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-gray-900.svg"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            />
            <img
              alt="Reform"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-gray-900.svg"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            />
            <img
              alt="Tuple"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-gray-900.svg"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            />
            <img
              alt="SavvyCal"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-gray-900.svg"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            />
            <img
              alt="Statamic"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-gray-900.svg"
              width={158}
              height={48}
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            />
          </div>
        </div> */}

        {/* Feature section */}
        {/* <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base/7 font-semibold text-indigo-600">
              Deploy faster
            </h2>
            <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
              Everything you need to deploy your app
            </p>
            <p className="mt-6 text-lg/8 text-gray-600">
              Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
              Suspendisse eget egestas a elementum pulvinar et feugiat blandit
              at. In mi viverra elit nunc.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {primaryFeatures.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="text-base/7 font-semibold text-gray-900">
                    <div className="mb-6 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                      <feature.icon
                        aria-hidden="true"
                        className="size-6 text-white"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base/7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                    <p className="mt-6">
                      <a
                        href={feature.href}
                        className="text-sm/6 font-semibold text-indigo-600 hover:text-indigo-500"
                      >
                        Learn more <span aria-hidden="true">→</span>
                      </a>
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div> */}

        {/* Feature section */}
        <div className="">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto sm:text-center">
              <h2 className="text-base/7 font-semibold text-indigo-600">
                Безкоштовна консультація • Виїзд на об’єкт • Кошторис у день
                звернення
              </h2>
              <p className="mt-8 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-balance sm:text-5xl">
                Чому утеплення пінополіуретаном (ППУ) — це вигідно
              </p>
              <p className="mt-6 text-lg/8 text-gray-600 max-w-2xl mx-auto ">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden pt-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <Image
                alt="App screenshot"
                src="/2025-realizacieIMG_8962-1920x899.jpg"
                width={2432}
                height={1442}
                className=" rounded-xl shadow-2xl ring-1 ring-gray-900/10"
              />
              {/* <div aria-hidden="true" className="relative">
                <div className="absolute -inset-x-20 bottom-0 bg-linear-to-t from-white pt-[7%]" />
              </div> */}
            </div>
          </div>
          <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
            <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base/7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
              {secondaryFeatures.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <feature.icon
                      aria-hidden="true"
                      className="absolute left-1 top-1 size-5 text-indigo-600"
                    />
                    {feature.name}
                  </dt>{" "}
                  <dd className="inline">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Stats */}
        <div className="mx-auto max-w-7xl px-6  lg:px-8 mt-20">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
            <h2 className="text-base/8 font-semibold text-indigo-600">
              Our track record
            </h2>
            <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Для яких об’єктів підходить
            </p>
            <p className="mt-6 text-lg/8 text-gray-700">
              Сітка “типів будівель”: житлові, комерційні, промислові,
              сільськогосподарські, інфраструктурні об’єкти.
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-gray-900 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="flex flex-col gap-y-3 border-l border-gray-900/15 pl-6"
              >
                <dt className="text-sm/6">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <div className="relative overflow-hidden pt-16">
            <p className="py-10 text-gray-400 max-w-2xl mx-auto ">
              Технологія напилення: як це працює Схема з 4 кроків: Огляд і
              підготовка основи (очистка, ґрунтування за потреби) Захист
              вікон/дверей та зон, що не напилюються Напилення ППУ потрібної
              товщини (контроль шару) Фінішний захист від УФ
              (фарба/штукатурка/обшивка)
            </p>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <Image
                alt="App screenshot"
                src="/Без имени-1.jpg"
                width={2432}
                height={1442}
                className=" rounded-xl shadow-2xl ring-1 ring-gray-900/10"
              />
              {/* <div aria-hidden="true" className="relative">
                <div className="absolute -inset-x-20 bottom-0 bg-linear-to-t from-white pt-[7%]" />
              </div> */}
            </div>
          </div>
        </div>
        <div>
          <div className="relative overflow-hidden pt-16">
            <p className="py-10 text-gray-400 max-w-2xl mx-auto ">
              Важливо знати (чесний блок про обмеження) Цей блок підвищує
              довіру. ППУ потребує захисту від УФ-променів — без фінішного шару
              може руйнуватися під сонцем. Не всі поверхні підходять: наприклад,
              поліетилен — погана адгезія. Основа має бути сухою й чистою — для
              якісного зчеплення.
              <span className="text-red-700">
                CTA: Перевіримо вашу поверхню безкоштовно (консультація)
              </span>
            </p>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <Image
                alt="App screenshot"
                src="/3.jpg"
                width={2432}
                height={1442}
                className=" rounded-xl shadow-2xl ring-1 ring-gray-900/10"
              />
              {/* <div aria-hidden="true" className="relative">
                <div className="absolute -inset-x-20 bottom-0 bg-linear-to-t from-white pt-[7%]" />
              </div> */}
            </div>
          </div>
        </div>
        <p className="py-10 text-gray-400 max-w-2xl mx-auto ">
          Порівняння з іншими утеплювачами Таблиця: ППУ vs мінвата vs пінопласт
          Критерії: шви/містки холоду стійкість до вологи швидкість монтажу
          складні форми потреба в додатковому захисті (ППУ тут виграє по
          безшовності/формі, але чесно вказати про УФ-захист)
        </p>

        <p className="py-10 text-gray-400 max-w-2xl mx-auto ">
          Рішення “під ключ” (пакети або варіанти) Наприклад: Економ — напилення
          + базова підготовка Стандарт — напилення + армування + фініш
          (штукатурка/фарба) Преміум — напилення + повний фасадний комплекс
        </p>
        <p className="py-10 text-gray-400 max-w-2xl mx-auto ">
          Приклади робіт (портфоліо) Галерея: до/після, коротко: площа (м²)
          товщина шару термін виконання що було зроблено як фінішний УФ-захист
        </p>
        <Testimonials />
        <Questions />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Image
            alt="App screenshot"
            src="/2.jpg"
            width={2432}
            height={1442}
            className=" rounded-xl shadow-2xl ring-1 ring-gray-900/10"
          />
          {/* <div aria-hidden="true" className="relative">
                <div className="absolute -inset-x-20 bottom-0 bg-linear-to-t from-white pt-[7%]" />
              </div> */}
        </div>
        <Trust />
        {/* CTA section */}
        <div className="relative isolate mt-16 px-6  lg:px-8">
          <svg
            aria-hidden="true"
            className="absolute inset-0 -z-10 size-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          >
            <defs>
              <pattern
                x="50%"
                y={0}
                id="1d4240dd-898f-445f-932d-e2872fd12de3"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={0} className="overflow-visible fill-gray-50">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              fill="url(#1d4240dd-898f-445f-932d-e2872fd12de3)"
              width="100%"
              height="100%"
              strokeWidth={0}
            />
          </svg>
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-10 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
          >
            <div
              style={{
                clipPath:
                  "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
              }}
              className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
            />
          </div>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Boost your productivity. Start using our app today.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-lg/8 text-gray-600">
              Incididunt sint fugiat pariatur cupidatat consectetur sit cillum
              anim id veniam aliqua proident excepteur commodo do ea.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a href="#" className="text-sm/6 font-semibold text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      {/* <footer className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="border-t border-gray-200 py-12 md:flex md:items-center md:justify-between">
          <div className="flex justify-center gap-x-6 md:order-2">
            {footerNavigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-gray-800"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon aria-hidden="true" className="size-6" />
              </a>
            ))}
          </div>
          <p className="mt-8 text-center text-sm/6 text-gray-600 md:order-1 md:mt-0">
            &copy; 2024 Your Company, Inc. All rights reserved.
          </p>
        </div>
      </footer> */}
    </div>
  );
}
