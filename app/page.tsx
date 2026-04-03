import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Features from "./components/Features";
import PpuTypes from "./components/PpuTypes";
import HowToChoosePpu from "./components/HowToChoosePpu";
import InsulationComparison from "./components/InsulationComparison";
import HowWeWork from "./components/HowWeWork";
import StatsSection from "./components/Stats";
import Solving from "./components/Solving";
import Approach from "./components/Approach";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://foamix.com.ua/#organization",
        name: "Foamix",
        url: "https://foamix.com.ua",
        logo: "https://foamix.com.ua/favicon/favicon-96x96.png",
        telephone: "+380770120077",
      },
      {
        "@type": "WebSite",
        "@id": "https://foamix.com.ua/#website",
        url: "https://foamix.com.ua",
        name: "Foamix",
        publisher: {
          "@id": "https://foamix.com.ua/#organization",
        },
        inLanguage: "uk-UA",
      },
      {
        "@type": "FAQPage",
        "@id": "https://foamix.com.ua/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "Скільки коштує утеплення пінополіуретаном?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Вартість залежить від площі, товщини шару, типу об'єкта та умов нанесення. Ціна на сайті вказана орієнтовно — для точного прорахунку залиште заявку або зв'яжіться з нами.",
            },
          },
          {
            "@type": "Question",
            name: "Чому на сайті вказано ціну «від 345 грн/м²»?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Це базовий орієнтир. Фінальна вартість залежить від площі, необхідної товщини шару, типу поверхні, складності доступу до об'єкта та умов виконання робіт.",
            },
          },
          {
            "@type": "Question",
            name: "Від чого залежить товщина шару ППУ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Товщина підбирається індивідуально — залежно від типу конструкції, рівня тепловтрат, призначення приміщення та бажаного результату.",
            },
          },
          {
            "@type": "Question",
            name: "Скільки часу займає утеплення?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Терміни залежать від площі та складності об'єкта, але більшість робіт виконується від 1 дня.",
            },
          },
          {
            "@type": "Question",
            name: "Що саме можна утеплювати пінополіуретаном?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "ППУ підходить для утеплення будинків, дахів, мансард, перекриттів, фасадів, підвалів, ангарів, складів, холодильних камер, комерційних і промислових приміщень.",
            },
          },
          {
            "@type": "Question",
            name: "Чи можна утеплювати ППУ взимку?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "У багатьох випадках так, але можливість виконання робіт залежить від типу поверхні, погодних умов і технологічних вимог до нанесення.",
            },
          },
          {
            "@type": "Question",
            name: "Чи безпечний пінополіуретан для житлових приміщень?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Після правильного нанесення та повного застигання пінополіуретан є безпечним для використання в житлових приміщеннях.",
            },
          },
          {
            "@type": "Question",
            name: "Чи потрібно готувати об'єкт перед приїздом?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Зазвичай потрібен доступ до об'єкта, можливість підключення до електромережі та вільний під'їзд.",
            },
          },
          {
            "@type": "Question",
            name: "Як замовити прорахунок утеплення?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Залиште заявку на сайті або зателефонуйте нам. Ми уточнимо параметри об'єкта та підготуємо попередній розрахунок вартості.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <div>
        <Marquee />
        <Hero />
        <Features />
        <PpuTypes />
        <HowToChoosePpu />
        <InsulationComparison />
        <HowWeWork />
        <StatsSection />
        <Solving />
        <Approach />
        <FAQ />
        <Contact />
      </div>
    </>
  );
}
