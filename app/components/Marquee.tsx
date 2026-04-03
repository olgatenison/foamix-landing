function MarqueeItems() {
  return (
    <>
      <span>Тепло яке залишається</span>
      <span>•</span>
      <span>Економія на опаленні до 50%</span>
      <span>•</span>
      <span>Гарантія якості</span>
      <span>•</span>
    </>
  );
}

export default function Marquee() {
  return (
    <div className="bg-(--blue) text-white uppercase text-sm font-semibold tracking-wide">
      <div className="overflow-hidden py-2">
        <div className="flex flex-row gap-6 whitespace-nowrap animate-marquee-scroll">
          <MarqueeItems />
          <MarqueeItems />
          <MarqueeItems />
          <MarqueeItems />
        </div>
      </div>
    </div>
  );
}
