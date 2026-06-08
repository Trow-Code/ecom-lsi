export default function PressBar() {
  const names = [
    "Architectural Digest",
    "ELLE Decor",
    "Better Homes",
    "Vogue Living",
    "Livspace"
  ];

  return (
    <section className="bg-warm-white py-12 border-y border-sand/35">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-12 lg:px-20 xl:px-24">
        {/* Desktop: Single row, 5 names, separator between each */}
        <div className="hidden md:flex flex-row items-center justify-center gap-8 lg:gap-12 flex-wrap">
          {names.map((name, idx) => (
            <div key={idx} className="flex items-center gap-8 lg:gap-12">
              <span className="font-display text-xl text-ink opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-default select-none whitespace-nowrap font-light">
                {name}
              </span>
              {idx < names.length - 1 && (
                <span className="text-sand/60 text-lg font-light select-none">|</span>
              )}
            </div>
          ))}
        </div>

        {/* Mobile: 2 rows - 3 then 2, centered */}
        <div className="flex md:hidden flex-col items-center gap-5">
          <div className="flex flex-row items-center justify-center gap-4 flex-wrap">
            {names.slice(0, 3).map((name, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <span className="font-display text-lg text-ink opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-default select-none whitespace-nowrap font-light">
                  {name}
                </span>
                {idx < 2 && (
                  <span className="text-sand/60 text-sm select-none">|</span>
                )}
              </div>
            ))}
          </div>
          <div className="flex flex-row items-center justify-center gap-4 flex-wrap">
            {names.slice(3).map((name, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <span className="font-display text-lg text-ink opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-default select-none whitespace-nowrap font-light">
                  {name}
                </span>
                {idx < 1 && (
                  <span className="text-sand/60 text-sm select-none">|</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
