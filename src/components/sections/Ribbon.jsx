// src/components/sections/Ribbon.jsx
export default function Ribbon() {
  const items = [
    "Motos",
    "Bicicletas",
    "Trimotos",
    "Motocarros",
    "Scooters",
    "Patines",
    "Mini autos",
  ];

  return (
    <div
      className="bg-hoja text-white overflow-hidden py-5 select-none"
      aria-hidden="true"
    >
      <div className="flex w-max animate-[marquee_35s_linear_infinite]">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="flex items-center gap-8 pr-8 font-display text-[clamp(20px,2.4vw,32px)] font-semibold tracking-tight"
          >
            {items.map((item) => (
              <span key={item} className="flex items-center gap-8">
                <span>{item}</span>
                <span className="w-2.5 h-2.5 rounded-full bg-brote" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
