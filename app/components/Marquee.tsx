export default function Marquee() {
  const Items = () => (
    <>
      <span>Тепло яке залишається</span>
      <span>•</span>
      <span>Економія на опаленні до 50%</span>
      <span>•</span>
      <span>Гарантія якості</span>
      <span>•</span>
    </>
  );

  return (
    <div className="bg-[#00a0e3] text-white uppercase text-sm font-semibold tracking-wide">
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
      <div className="marquee overflow-hidden py-2">
        <div className="flex flex-row gap-6 animate-scroll whitespace-nowrap">
          <Items />
          <Items />
          <Items />
          <Items />
        </div>
      </div>
    </div>
  );
}
