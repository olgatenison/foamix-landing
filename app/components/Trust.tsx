import { CheckIcon } from "@heroicons/react/20/solid";

const features = [
  {
    name: "Гарантія на роботи",
    description:
      "Rerum repellat labore necessitatibus reprehenderit molestiae praesentium.",
  },
  {
    name: "Матеріали сертифіковані",
    description:
      "Corporis asperiores ea nulla temporibus asperiores non tempore assumenda aut.",
  },
  {
    name: "Договір / акт виконаних робіт",
    description:
      "In sit qui aliquid deleniti et. Ad nobis sunt omnis. Quo sapiente dicta laboriosam.",
  },
  {
    name: "Фото/відео контролю товщини шару (за бажанням)",
    description:
      "Sed rerum sunt dignissimos ullam. Iusto iure occaecati voluptate eligendi.",
  },
];

export default function Trust() {
  return (
    <div className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <div className="col-span-2">
            <h2 className="text-base/7 font-semibold text-indigo-600">
              Блок довіри (гарантії та документи)
            </h2>
            <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              All-in-one platform
            </p>
            <p className="mt-6 text-base/7 text-gray-700">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              impedit perferendis suscipit eaque, iste dolor cupiditate
              blanditiis ratione.
            </p>
          </div>
          <dl className="col-span-3 grid grid-cols-1 gap-x-8 gap-y-10 text-base/7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="font-semibold text-gray-900">
                  <CheckIcon
                    aria-hidden="true"
                    className="absolute left-0 top-1 size-5 text-indigo-500"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-2">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
