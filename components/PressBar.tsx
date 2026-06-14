"use client";

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
        <div className="flex flex-row flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:gap-x-12">
          {names.map((name, idx) => (
            <div key={idx} className="flex items-center">
              <span className="font-display text-base sm:text-lg lg:text-xl text-ink opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-default select-none whitespace-nowrap font-light">
                {name}
              </span>
              {idx < names.length - 1 && (
                <span className="text-sand/65 text-sm sm:text-base ml-8 sm:ml-12 font-light select-none pointer-events-none">|</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
